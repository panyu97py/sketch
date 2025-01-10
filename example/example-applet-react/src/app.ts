import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import './app.less'

console.log('process.env.SKETCH_PLATFORM', process.env.SKETCH_PLATFORM)

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}



export default App
