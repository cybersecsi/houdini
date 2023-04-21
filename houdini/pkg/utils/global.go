package utils

import (
	"github.com/cybersecsi/HOUDINI/houdini/pkg/types"
)

var CurrentPrompt string = "0"
var Tools []types.Tool
var DStdout DynamicStdout = DynamicStdout{}
