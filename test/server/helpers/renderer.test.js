import { createStore } from 'redux'
import expect from 'expect'
import renderer from '../../../server/helpers/renderer'
import reducers from '../../../client/reducers'

const store = createStore(reducers, {})

describe('Helpers Renderer', () => {
  it('should return response', () => {
    renderer.__Rewire__('renderToString', () => '<div data-reactroot=""></div>')
    renderer.__Rewire__('serialize', () => '{}')

    expect(renderer({ path: '/' }, store)).toBe(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>JS Full Stack</title>
      <link rel=icon type=image/png href=/statics/img/favicon.png>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="root"><div data-reactroot=""></div></div>
      <script>
        window.INITIAL_STATE = {}
      </script>
      <script src="bundle.js"></script>
    </body>
    </html>`)
  })
})
