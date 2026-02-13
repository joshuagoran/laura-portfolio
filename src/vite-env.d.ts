/// <reference types="vite/client" />

declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "vite-prerender-plugin/parse" {
    export function parseLinks(html: string): string[];
}
