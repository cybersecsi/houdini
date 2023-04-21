package houdini

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/cybersecsi/HOUDINI/pkg/types"
	"github.com/cybersecsi/HOUDINI/pkg/utils"
)

func LoadTools() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	houdiniDir := filepath.Join(homeDir, ".houdini")
	toolsFilePath := filepath.Join(houdiniDir, "tools.json")
	// Read the contents of the JSON file
	jsonFile, err := ioutil.ReadFile(toolsFilePath)
	if err != nil {
		log.Fatal(err)
	}

	// Parse the JSON data into an array of Tool objects
	err = json.Unmarshal(jsonFile, &utils.Tools)
	if err != nil {
		log.Fatal(err)
	}
}

func ListTools() {
	for _, tool := range utils.Tools {
		fmt.Printf("%s/%s\n", tool.Organization, tool.Name)
	}
}

func FindTool(fullName string) (*types.Tool, error) {
	res := strings.Split(fullName, "/")
	org := res[0]
	name := res[1]
	for _, tool := range utils.Tools {
		if tool.Name == name && tool.Organization == org {
			return &tool, nil
		}
	}
	return nil, errors.New("Unable to find the tool")
}
