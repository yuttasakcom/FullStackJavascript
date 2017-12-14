import expect from 'expect'

import renderer from '../../../server/helpers/renderer'

describe('Helpers Renderer', () => {
  it('should return response', () => {
    expect(renderer()).toBe(`<!DOCTYPE html>
    <html lang=\"en\">
    <head>
      <meta charset=\"UTF-8\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
      <title>JS Full Stack</title>
      <link rel=icon type=image/png href=/statics/img/favicon.png>
    </head>
    <body>
      <div id=\"root\"><div data-reactroot=\"\">Home Page</div></div>
      <script src=\"bundle.js\"></script>
    </body>
    </html>`)
  })
})
