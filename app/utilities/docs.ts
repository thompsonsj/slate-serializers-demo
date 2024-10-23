const GITHUB_MAIN_ROOT = `https://github.com/thompsonsj/slate-serializers/blob/main/`

export const ghUrl = (relativePath: string) => new URL(relativePath, GITHUB_MAIN_ROOT).href;
