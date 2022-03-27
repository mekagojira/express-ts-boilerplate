import { Request, Response } from 'express'
import Action from 'interfaces/Action'
import ResponseBody from 'interfaces/ResponseBody'

type ProcessAction = (
    _action: Action
) => (_req: Request, _res: Response) => Promise<any>

const processAction: ProcessAction = (action) => async (req, res) => {
    try {
        const data = await action(req, res)
        const response: ResponseBody = {
            success: true,
            data: data,
        }

        return res.json(response)
    } catch (e: Error | any) {
        console.error(e)
        const response: ResponseBody = {
            success: false,
            message: e.message || e || 'Something went wrong',
        }

        return res.json(response)
    }
}

export default processAction
