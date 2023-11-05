import { type ServerBuild } from "@remix-run/server-runtime";
import { type ViteDevServer } from "vite";
import { type RemixConfig as ResolvedRemixConfig } from "../config";
export declare const isCssModulesFile: (file: string) => boolean;
export declare const getStylesForUrl: (vite: ViteDevServer, config: Pick<ResolvedRemixConfig, "appDirectory" | "routes">, cssModulesManifest: Record<string, string>, build: ServerBuild, url: string | undefined) => Promise<string | undefined>;