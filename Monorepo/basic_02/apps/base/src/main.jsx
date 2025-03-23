import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import microAppsConfig from './micro-apps.js'
import { registerMicroApps, start } from 'qiankun'

createRoot(document.getElementById('root')).render(
    <App />
)


// 1. 注册微应用
registerMicroApps(microAppsConfig, {
    beforeLoad: (app) => {
        console.log('before load', app)
    },
    beforeMount: (app) => {
        console.log('before mount', app)
    },
    afterMount: (app) => {
        console.log('after mount', app)
    },
    beforeUnmount: (app) => {
        console.log('before unmount', app)
    },
    afterUnmount: (app) => {
        console.log('after unmount', app)
    }
})

start();
