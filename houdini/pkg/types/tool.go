package types

type Tool struct {
	FancyName    string   `json:"fancy_name"`
	Name         string   `json:"name"`
	OfficialDoc  string   `json:"official_doc"`
	Organization string   `json:"organization"`
	RunCommand   string   `json:"run_command"`
	Categories   []string `json:"categories"`
	Description  string   `json:"description"`
}
