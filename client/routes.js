import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default () => {
    return new VueRouter({
        mode: 'history',
        linkActiveClass: 'is-active',
        routes: [
            {
                name: 'home',
                path: '/',
                component: resolve => require(['./pages/Home.vue'], resolve)
            },
            {
                name: 'myChars',
                path: '/myChars',
                component: resolve => require(['./pages/MyChars.vue'], resolve)
            },
            {
                name: 'me',
                path: '/me',
                component: resolve => require(['./pages/Me.vue'], resolve)
            },
            {
                name: 'newChar',
                path: '/newChar',
                component: resolve => require(['./pages/MyChars.vue'], resolve)
            }
        ]
    });
};
