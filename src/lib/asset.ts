const basePath = process.env.NODE_ENV === "production" ? "/nomado-travel" : "";
export const asset = (path: string) => `${basePath}${path}`;
