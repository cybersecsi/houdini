package cmd

import (
	"os"

	"github.com/cybersecsi/HOUDINI/cli/pkg/utils"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "houdini",
	Short: "Hundreds of Offensive and Useful Docker Images for Network Intrusion",
	Run: func(cmd *cobra.Command, args []string) {
		utils.Banner()
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		utils.Error(err.Error())
		os.Exit(1)
	}
}
