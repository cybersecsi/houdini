package utils

import (
	"bytes"
	"os"
)

type DynamicStdout struct {
	buffer bytes.Buffer
}

func (d *DynamicStdout) Write(p []byte) (n int, err error) {
	if CurrentPrompt == "0" {
		return d.buffer.Write(p)
	}
	return os.Stdout.Write(p)
}
