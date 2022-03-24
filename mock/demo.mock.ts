import { MockHandler } from 'vite-plugin-mock-server'

const mocks: MockHandler[] = [
  {
    pattern: '/api/test',
    handle: (req, res) => {
      res.end('Hello')
    }
  }
]

export default mocks
