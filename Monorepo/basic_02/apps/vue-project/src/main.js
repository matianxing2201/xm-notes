import { createApp } from 'vue'
import App from './App.vue'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import { routes, router } from './router';
import { createRouter, createWebHashHistory } from 'vue-router'

let app = null;
let _router = null;
let history = null;

// 不存在qiankun环境 直接 渲染 挂载到app中
if(!qiankunWindow.__POWERED_BY_QIANKUN__) {
    app = createApp(App);
    app.use(router);
    app.mount('#app');
} else {
    history = createWebHashHistory();
    _router = createRouter({
        history,
        routes
    })
    // 存在qiankun环境 通过 renderWithQiankun 方法 渲染 挂载
    renderWithQiankun({
        mount(props) {
            console.log('vue 应用挂载');
            const { container } = props;
            app = createApp(App);
            app.use(_router);
            app.mount(
                container ? container.querySelector('#app') : document.querySelector('#app')
            );
        },
        bootstrap() {
            console.log('vue 应用初始化');
        },
        update() {
            console.log('vue 应用更新');
        },
        unmount() {
            console.log('vue 应用卸载');
            app.unmount();
            app = null;
            history = null;
            _router = null;
        }

    })
}


