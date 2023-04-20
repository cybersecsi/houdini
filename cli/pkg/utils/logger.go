package utils

import (
	"fmt"
	"time"
)

const colorReset = "\033[0m"
const colorRed = "\033[31m"
const colorGreen = "\033[32m"
const colorYellow = "\033[33m"
const colorBlue = "\033[34m"
const colorPurple = "\033[35m"
const colorCyan = "\033[36m"
const colorWhite = "\033[37m"
const dateFormat = "02-01-2006 15:04:05"

func Banner() {
	banner := `
  ███████╗███████╗ ██████╗███████╗██╗
  ██╔════╝██╔════╝██╔════╝██╔════╝██║
  ███████╗█████╗  ██║     ███████╗██║
  ╚════██║██╔══╝  ██║     ╚════██║██║
  ███████║███████╗╚██████╗███████║██║
  ╚══════╝╚══════╝ ╚═════╝╚══════╝╚═╝
  HOUDINI CLI
`
	fmt.Print(banner)
}

func Info(s string) {
	dt := time.Now()
	fmt.Printf("[%s] - [INFO] - %s%s\n", dt.Format(dateFormat), s, colorReset)
}

func Error(s string) {
	dt := time.Now()
	fmt.Printf("%s[%s] - [ERROR] - %s%s\n", string(colorRed), dt.Format(dateFormat), s, colorReset)
}

func Debug(s string) {
	dt := time.Now()
	fmt.Printf("%s[%s] - [DEBUG] - %s%s\n", string(colorYellow), dt.Format(dateFormat), s, colorReset)
}

func Success(s string) {
	dt := time.Now()
	fmt.Printf("%s[%s] - [SUCCESS] - %s%s\n", string(colorGreen), dt.Format(dateFormat), s, colorReset)
}
