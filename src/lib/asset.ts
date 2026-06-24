// Prefixes a public-asset path with the basePath so local images resolve
// correctly when the site is served from a subpath (e.g. GitHub Pages at
// /nomado-travel/). next/image does not apply basePath to `unoptimized` images,
// so we prepend it ourselves. In dev the basePath is empty.
const basePath = process.env.NODE_ENV === "production" ? "/nomado-travel" : "";

export const asset = (path: string) => `${basePath}${path}`;
