package cmd

import (
	"fmt"
	"os"

	"github.com/cybersecsi/HOUDINI/houdini/pkg/docker"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/utils"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "houdini",
	Short: "Hundreds of Offensive and Useful Docker Images for Network Intrusion",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println()
		utils.Bold("Interactive mode")
		help()

		prompt := promptui.Prompt{
			Label: "houdini>",
		}

		for {
			result, err := prompt.Run()
			if err != nil {
				fmt.Print(utils.CurrentPrompt)
				utils.CurrentPrompt = "0"
				fmt.Println("Error:", err)
				continue
			}

			switch result {
			case "run":
				run()
			case "update":
				update()
			case "list":
				list()
			case "clear":
				fmt.Print("\033[H\033[2J")
			case "help":
				help()
			case "exit":
				os.Exit(0)
			default:
				fmt.Printf("Unknown command '%s', type 'help' to get the available commands\n", result)
			}
		}
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		utils.Error(err.Error())
		os.Exit(1)
	}
}

func help() {
	fmt.Println("Available commands:")
	fmt.Println("- run: runs a HOUDINI tool")
	fmt.Println("- update: updates the list of tools from HOUDINI repository")
	fmt.Println("- list: displays the list of all available HOUDINI tools")
	fmt.Println("- clear: cleanup the output")
	fmt.Println("- help: shows this message")
	fmt.Println("- exit: closes HOUDINI")
	fmt.Println("")
}

func run() {
	prompt := promptui.Prompt{
		Label: "Tool: ",
	}

	result, err := prompt.Run()

	if err != nil {
		fmt.Printf("Prompt failed %v\n", err)
		return
	}

	tool, err := houdini.FindTool(result)
	if err != nil {
		fmt.Print(err)
		return
	}

	runCommand := utils.CompileRunCommand(tool.RunCommand)

	fmt.Printf("Running the command '%s'\n", runCommand)

	utils.CurrentPrompt = "1"
	docker.RunTool(runCommand)
}

func update() {
	houdini.UpdateToolsFile()
}

func list() {
	houdini.ListTools()
}
