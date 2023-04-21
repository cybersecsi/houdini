package cmd

import (
	"fmt"
	"os"

	"github.com/AlecAivazis/survey/v2"
	"github.com/AlecAivazis/survey/v2/terminal"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/docker"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/utils"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "houdini",
	Short: "Hundreds of Offensive and Useful Docker Images for Network Intrusion",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println()
		utils.Bold("Interactive mode")
		help()

		userInput := ""
		prompt := &survey.Input{
			Message: "houdini>",
		}

		for {
			err := survey.AskOne(prompt, &userInput, survey.WithIcons(func(icons *survey.IconSet) {
				icons.Question.Text = "🐋"
			}))
			if err != nil {
				utils.CurrentPrompt = "0"
				if err == terminal.InterruptErr {
					fmt.Println("CTRL-C is disabled in the current console, use the 'exit' command close.")
				} else {
					fmt.Println(err.Error())
				}
				continue
			}

			switch userInput {
			case "run":
				run()
			case "quick":
				quick()
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
				fmt.Printf("Unknown command '%s', type 'help' to get the available commands\n", userInput)
			}
			fmt.Println("")
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
	fmt.Println("- quick: runs the quick command of a HOUDINI tool")
	fmt.Println("- update: updates the list of tools from HOUDINI repository")
	fmt.Println("- list: displays the list of all available HOUDINI tools")
	fmt.Println("- clear: cleanup the output")
	fmt.Println("- help: shows this message")
	fmt.Println("- exit: closes HOUDINI")
	fmt.Println("")
}

func run() {
	runCommand, err := docker.GetFullRunCommand()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	confirmRun := utils.ConfirmAction(fmt.Sprintf("Are you sure to run the command: '%s'?", runCommand))
	if confirmRun {
		utils.CurrentPrompt = "1"
		fmt.Printf("Running the command '%s'\n", runCommand)
		docker.RunTool(runCommand)
	} else {
		fmt.Println("Run canceled")
	}
}

func quick() {
	runCommand, err := docker.GetQuickRunCommand()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	confirmRun := utils.ConfirmAction(fmt.Sprintf("Are you sure to run the command: '%s'?", runCommand))
	if confirmRun {
		utils.CurrentPrompt = "1"
		fmt.Printf("Running the command '%s'\n", runCommand)
		docker.RunTool(runCommand)
	} else {
		fmt.Println("Run canceled")
	}
}

func update() {
	houdini.UpdateToolsFile()
}

func list() {
	houdini.ListTools()
}
