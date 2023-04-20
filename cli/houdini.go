package main

import (
	"github.com/cybersecsi/HOUDINI/cli/cmd"
	"github.com/cybersecsi/HOUDINI/cli/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/cli/pkg/utils"
)

func main() {
	utils.Banner()
	houdini.CheckAndCreateHoudiniDir()
	houdini.DownloadToolsFile()
	houdini.LoadTools()
	cmd.Execute()
}
