import renderer from '../helpers/renderer'

const router = app => {
  app.use('/api', (req, res) => {
    res.end('Welcome to NODE ES6')
  })

  app.get('*', (req, res) => {
    res.send(renderer())
  })
}

export default router
