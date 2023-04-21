package docker

import (
	"fmt"

	"github.com/AlecAivazis/survey/v2"
)

type GenericMapping struct {
	HostValue      string
	ContainerValue string
}

func GetMappings(mappingName string, mappingOption string) string {
	mappings := []GenericMapping{}
	var firstTime bool
	firstTime = true

	for {
		var dynamicTxt string
		if firstTime {
			dynamicTxt = "a"
		} else {
			dynamicTxt = "another"
		}
		var addMapping bool
		if err := survey.AskOne(
			&survey.Confirm{
				Message: fmt.Sprintf("Do you want to configure %s %s mapping?", dynamicTxt, mappingName),
				Default: false,
			},
			&addMapping,
		); err != nil {
			fmt.Println("Error:", err)
			return ""
		}

		if !addMapping {
			break
		}

		firstTime = false
		mapping := GenericMapping{}
		if err := survey.Ask([]*survey.Question{
			{
				Name: "hostValue",
				Prompt: &survey.Input{
					Message: fmt.Sprintf("What host %s do you want to bind?", mappingName),
					Default: "",
				},
				Validate: survey.Required,
			},
			{
				Name: "containerValue",
				Prompt: &survey.Input{
					Message: fmt.Sprintf("What container %s do you want to bind?", mappingName),
					Default: "",
				},
				Validate: survey.Required,
			},
		}, &mapping); err != nil {
			fmt.Println("Error:", err)
			return ""
		}

		mappings = append(mappings, mapping)
	}

	mappingStr := ""
	for _, mapping := range mappings {
		mappingStr += fmt.Sprintf("%s %s:%s ", mappingOption, mapping.HostValue, mapping.ContainerValue)
	}

	return mappingStr
}

func GetBooleanOption(optionText string, optionValue string) string {
	booleanOptionEnabled := false
	prompt := &survey.Confirm{
		Message: fmt.Sprintf("%s?", optionText),
	}
	survey.AskOne(prompt, &booleanOptionEnabled)

	if booleanOptionEnabled {
		return fmt.Sprintf("%s ", optionValue)
	} else {
		return ""
	}
}

func GetCmd() string {
	cmd := ""
	prompt := &survey.Input{
		Message: "Command:",
	}
	survey.AskOne(prompt, &cmd)

	return cmd
}
