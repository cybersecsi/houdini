package docker

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"strings"
	"syscall"

	"github.com/cybersecsi/HOUDINI/cli/pkg/utils"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/stdcopy"
)

func runDockerContainerSdk(imageName string, runCompleted chan struct{}) {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv, client.WithAPIVersionNegotiation())
	if err != nil {
		panic(err)
	}
	defer cli.Close()

	reader, err := cli.ImagePull(ctx, fmt.Sprintf("docker.io/library/%s", imageName), types.ImagePullOptions{})
	if err != nil {
		panic(err)
	}

	defer reader.Close()

	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: imageName,
		Cmd:   []string{"echo", "hello world"},
		Tty:   false,
	}, nil, nil, nil, "")
	if err != nil {
		panic(err)
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		panic(err)
	}

	statusCh, errCh := cli.ContainerWait(ctx, resp.ID, container.WaitConditionNotRunning)
	select {
	case err := <-errCh:
		if err != nil {
			panic(err)
		}
	case <-statusCh:
	}

	out, err := cli.ContainerLogs(ctx, resp.ID, types.ContainerLogsOptions{ShowStdout: true})
	if err != nil {
		panic(err)
	}

	if utils.CurrentPrompt == "1" {
		stdcopy.StdCopy(os.Stdout, os.Stderr, out)
	}
	runCompleted <- struct{}{}
}

func runDockerContainerCmd(runCommand string, runCompleted chan struct{}) {
	cmdParts := strings.Fields(runCommand)
	cmd := exec.Command(cmdParts[0], cmdParts[1:]...)
	ds := utils.DStdout
	cmd.Stdin = os.Stdin
	cmd.Stdout = &ds
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		fmt.Printf("Error running command: %v\n", err)
	}
	runCompleted <- struct{}{}
}

func RunTool(runCommand string) {
	var runCompleted = make(chan struct{})

	// Create a channel to listen for signals
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGTERM, syscall.SIGINT)

	// Start runDockerContainer in a goroutine
	go runDockerContainerCmd(runCommand, runCompleted)

	// Wait for either FunctionTwo to finish or the user to interrupt
	select {
	case <-interrupt:
		// User has interrupted the program
		utils.CurrentPrompt = "0"
		return
	case <-runCompleted:
		// runDockerContainer has finished executing
	}
}
