export const port: Number = +(process?.env?.PORT || 3000);

export const nodeEnv: string = process.env.NODE_ENV || 'dev';

export const basePath: string = process.env.BASE_PATH || '/';
