export type ITool = {
    fancy_name: string
    name: string, // Used to load the .md file (name MUST be the same as the filename)
    description?: string,
    official_doc: string,
    categories: string[],
    organization?: string,
    run_command: string,
}