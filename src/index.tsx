import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './serviceWorker'
import { App } from './App'
import '@elastic/eui/dist/eui_theme_light.css'

ReactDOM.render(<App />, document.getElementById('root'))

unregister()
