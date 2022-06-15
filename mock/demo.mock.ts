import { MockHandler } from 'vite-plugin-mock-server'

const mocks: MockHandler[] = [
  {
    pattern: '/api/test',
    handle: (req, res) => {
      const data = {
        username: 'admin',
        avatar:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202101%2F28%2F20210128075645_58931.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657889701&t=90a8cf82e4a8028488065afe0b533714'
      }
      res.end(JSON.stringify(data))
    }
  }
]

export default mocks
