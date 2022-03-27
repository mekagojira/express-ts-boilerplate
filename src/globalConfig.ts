export const port: Number = +(process?.env?.PORT || 3000)

export const nodeEnv: string = process.env.NODE_ENV || 'dev'

export const basePath: string = process.env.BASE_PATH || '/'

export const jwt: Readonly<{ secret: string, expirationInMinute: number }> = {
    secret: process.env.JWT_SECRET || '',
    expirationInMinute: +(process.env?.JWT_EXP_IN_MIN || 0),
}
