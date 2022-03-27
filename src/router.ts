import { Router } from 'express'
import Route from 'interfaces/Route'
import processAction from 'libs/processAction'
import routes from 'routes'

const router = Router()

routes.forEach((route: Route) => {
    const { url, action, method } = route

    if (method === 'post') return router.post(url, processAction(action))
    return router.get(url, processAction(action))
})

export default router
