package utils

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strings"

	"github.com/AlecAivazis/survey/v2"
)

func CompileRunCommand(runCommand string) string {
	// Sample string with tags

	// Define a regular expression to match tags
	re := regexp.MustCompile("<(\\w+)>")

	// Find all matches in the string
	matches := re.FindAllStringSubmatch(runCommand, -1)

	// Create a map to store user input for each tag
	inputs := make(map[string]string)

	// Ask the user to set a value for each tag
	reader := bufio.NewReader(os.Stdin)
	for _, match := range matches {
		tag := match[1]
		fmt.Printf("Enter a value for '%s%s%s': ", boldStart, tag, boldEnd)
		value, _ := reader.ReadString('\n')
		inputs[tag] = strings.TrimSpace(value)
	}

	// Replace tags with user input
	for tag, value := range inputs {
		runCommand = strings.ReplaceAll(runCommand, fmt.Sprintf("<%s>", tag), value)
	}

	// Return the final string with replaced values
	return runCommand
}

func ConfirmAction(actionTxt string) bool {
	actionConfirmed := true
	prompt := &survey.Confirm{
		Message: actionTxt,
		Default: true,
	}
	err := survey.AskOne(prompt, &actionConfirmed)
	if err != nil {
		fmt.Println("Error:", err)
		return false
	}
	return actionConfirmed
}
