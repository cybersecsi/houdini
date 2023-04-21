package docker

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/AlecAivazis/survey/v2"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/types"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/utils"
)

func promptTool() (types.Tool, error) {
	prompt := &survey.Input{
		Message: "Image to run:",
		Suggest: func(toComplete string) []string {
			toolNames := houdini.GetToolNames()
			possibleTools := []string{}
			for _, tool := range toolNames {
				if strings.HasPrefix(tool, toComplete) {
					possibleTools = append(possibleTools, tool)
				}
			}
			return possibleTools
		},
	}

	toolName := ""
	err := survey.AskOne(prompt, &toolName)
	if err != nil {
		fmt.Println(err.Error())
		return types.Tool{}, err
	}

	tool, err := houdini.FindTool(toolName)
	if err != nil {
		fmt.Print(err)
		return types.Tool{}, err
	}
	return *tool, nil
}

func GetQuickRunCommand() (string, error) {
	tool, err := promptTool()
	if err != nil {
		fmt.Print(err)
		return "", err
	}

	runCommand := utils.CompileRunCommand(tool.RunCommand)

	return runCommand, nil
}

func GetFullRunCommand() (string, error) {
	tool, err := promptTool()
	if err != nil {
		fmt.Print(err)
		return "", err
	}
	// Options
	privilegedOption := GetBooleanOption("Privileged Mode", "--privileged")
	interactiveOption := GetBooleanOption("Interactive Mode", "-it")
	removeAfterOption := GetBooleanOption("Remove After execution", "--rm")
	// Mappings
	portMappings := GetMappings("port", "-p")
	volumeMappings := GetMappings("volume", "-v")
	// Command
	cmd := GetCmd()

	runCommand := fmt.Sprintf("docker run %s %s %s %s %s %s/%s %s", privilegedOption, interactiveOption, removeAfterOption, portMappings, volumeMappings, tool.Organization, tool.Name, cmd)

	// Remove duplicate spaces using a regular expression
	re := regexp.MustCompile(`\s+`)
	runCommand = re.ReplaceAllString(runCommand, " ")
	runCommand = strings.TrimSpace(runCommand)

	return runCommand, nil
}
