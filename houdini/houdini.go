package main

import (
	"github.com/cybersecsi/HOUDINI/houdini/cmd"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/houdini"
	"github.com/cybersecsi/HOUDINI/houdini/pkg/utils"
)

func main() {
	utils.Banner()
	houdini.CheckAndCreateHoudiniDir()
	houdini.DownloadToolsFile()
	houdini.LoadTools()
	cmd.Execute()
}
