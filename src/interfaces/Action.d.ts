import { Request, Response } from 'express';

type Action = (_req: Request, _res: Response) => Promise<any>;

export default Action;
