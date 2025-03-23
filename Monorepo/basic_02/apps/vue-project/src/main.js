import { createApp } from 'vue'
import App from './App.vue'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'


let app = null;
// 不存在qiankun环境 直接 渲染 挂载到app中
if(!qiankunWindow.__POWERED_BY_QIANKUN__) {
    app = createApp(App);
    app.mount('#app');
} else {
    // 存在qiankun环境 通过 renderWithQiankun 方法 渲染 挂载
    renderWithQiankun({
        mount(props) {
            app = createApp(App);
            app.mount();
        },
        bootstrap() {},
        update() {},
        unmount() {}

    })
}


