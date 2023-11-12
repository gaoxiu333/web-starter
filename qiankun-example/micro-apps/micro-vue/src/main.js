import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import MHome from './components/MHome.vue'
import MAbout from './components/MAbout.vue'

const routes = [
    { path: '/', component: MHome },
    { path: '/about', component: MAbout },
]

let instance = null;
let router = null;

function render(props = {}) {
    const { container } = props
    const base = window.__POWERED_BY_QIANKUN__ ? 'micro-vue' : '/'
    router = createRouter({
        history: createWebHistory(base),
        routes, // `routes: routes` 的缩写
    })

    instance = createApp(App)
    instance.use(router)
    instance.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.unmount();
    // instance.$el.innerHTML = '';
    instance = null;
    // router = null;
}


