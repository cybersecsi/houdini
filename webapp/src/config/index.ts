import { ITool } from 'types';
import data from './tools.json';

export const CONFIG = {
    ORGANIZATION: "secsi",
    DOCKER: {
        BASE_URL: "https://hub.docker.com/v2/repositories/",
        TAGS: "/tags?page=1&page_size=50"
    }
}

/*
A tool is composed by a few fields:
- fancy_name: the 'long' name of the tool (Can be anything)
- name: the name of the Docker Image
- organization: the organization it belongs to. This field is optional, when missing it is replaced with the default value
- official_doc: a link to the official documentation
- run_command: the quick command to execute the container
*/

export const TOOLS: ITool[] = data;