package main

import (
	"github.com/cybersecsi/HOUDINI/cmd"
	"github.com/cybersecsi/HOUDINI/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/pkg/utils"
)

func main() {
	utils.Banner()
	houdini.CheckAndCreateHoudiniDir()
	houdini.DownloadToolsFile()
	houdini.LoadTools()
	cmd.Execute()
}
