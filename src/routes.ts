import { Response, Router } from 'express'

const router = Router()

router.post('/users', (req, res: Response) => {
  return res.status(201).send()
})

export { router }