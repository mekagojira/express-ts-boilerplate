import { Request, Response } from 'express';

type Action = (req: Request, res: Response) => Promise<any>;

export default Action;
