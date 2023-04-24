import fetch, { RequestInit } from 'node-fetch'
import { fetchLatest } from "gh-release-fetch";
import { dirname, resolve } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repository = "cybersecsi/houdini";
const srcFolder = resolve(__dirname, "..", "src");

const resolveRelease = async (repository: string, fetchOptions?: RequestInit): Promise<string> => {
  const res = await fetch(
    `https://api.github.com/repos/${repository}/releases/latest`,
    fetchOptions
  );
  const json = await res.json() as any;
  if (
    res.status === 403 &&
    typeof json.message === "string" &&
    json.message.includes("API rate limit exceeded")
  ) {
    throw new Error("API rate limit exceeded, please try again later");
  }
  return json.tag_name;
};

const downloadRelease = async () => {
  const version = await resolveRelease(repository);
  await fetchLatest({
    repository: repository,
    package: `houdini-library-${version}.tar.gz`,
    version: version,
    destination: srcFolder,
    extract: true,
  });
};

const main = async () => {
  console.log("HOUDINI library download started");
  await downloadRelease();
  console.log("HOUDINI library download completed!");
};

main();
