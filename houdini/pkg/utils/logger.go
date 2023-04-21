package utils

import (
	"fmt"
)

const boldStart = "\033[1m"
const boldEnd = "\033[0m"
const colorReset = "\033[0m"
const colorRed = "\033[31m"
const colorGreen = "\033[32m"
const colorYellow = "\033[33m"
const colorBlue = "\033[34m"
const colorPurple = "\033[35m"
const colorCyan = "\033[36m"
const colorWhite = "\033[37m"

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
	fmt.Printf("%s%s%s\n", string(colorBlue), s, colorReset)
}

func Error(s string) {
	fmt.Printf("%s%s%s\n", string(colorRed), s, colorReset)
}

func Debug(s string) {
	fmt.Printf("%s%s%s\n", string(colorYellow), s, colorReset)
}

func Success(s string) {
	fmt.Printf("%s%s%s\n", string(colorGreen), s, colorReset)
}

func Bold(s string) {
	fmt.Printf("%s%s%s\n", boldStart, s, boldEnd)
}
