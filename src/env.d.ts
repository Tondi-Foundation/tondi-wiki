export interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL: string;
	readonly GITHUB_REPO_URL: string;
}

export interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
	interface ProcessEnv extends ImportMetaEnv {}
}
