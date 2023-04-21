package houdini

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/cybersecsi/HOUDINI/houdini/pkg/utils"
)

const houdiniToolsURL = "https://raw.githubusercontent.com/cybersecsi/HOUDINI/main/webapp/src/config/tools.json"

func CheckAndCreateHoudiniDir() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	houdiniDir := filepath.Join(homeDir, ".houdini")

	if _, err := os.Stat(houdiniDir); os.IsNotExist(err) {
		utils.Info(fmt.Sprintf("Creating %s/.houdini directory...", homeDir))
		if err := os.Mkdir(houdiniDir, 0700); err != nil {
			utils.Error(fmt.Sprintf("Failed to create %s/.houdini directory", homeDir))
			os.Exit(1)
		}
	}
}

func DownloadToolsFile() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	houdiniDir := filepath.Join(homeDir, ".houdini")
	toolsFilePath := filepath.Join(houdiniDir, "tools.json")

	// Check if the tools file already exists
	if _, err := os.Stat(toolsFilePath); os.IsNotExist(err) {
		utils.Info("Downloading tools.json...")
		resp, err := http.Get(houdiniToolsURL)
		if err != nil {
			utils.Error("Failed to download tools.json")
			os.Exit(1)
		}
		defer resp.Body.Close()

		// Create the tools file
		toolsFile, err := os.Create(toolsFilePath)
		if err != nil {
			utils.Error("Failed to create tools.json file")
			os.Exit(1)
		}
		defer toolsFile.Close()

		// Save the contents of the response body to the tools file
		if _, err := io.Copy(toolsFile, resp.Body); err != nil {
			utils.Error("Failed to write tools.json file")
			os.Exit(1)
		}
		utils.Success("File tools.json correctly downloaded")
	}
}

func UpdateToolsFile() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	houdiniDir := filepath.Join(homeDir, ".houdini")
	toolsFilePath := filepath.Join(houdiniDir, "tools.json")

	if _, err := os.Stat(toolsFilePath); err == nil {
		err := os.Remove(toolsFilePath)
		if err != nil {
			fmt.Println("Error deleting file:", err)
			return
		}
	}
	DownloadToolsFile()
}
