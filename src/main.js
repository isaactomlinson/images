import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import ImageFavourites from './components/ImageFavourites';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/', component: ImageList },
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/upload', component: UploadForm },
        { path: '/favourites', component: ImageFavourites }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');




// 4e233feee535b6e

// 9fa639b69dde8ab8dc897bc7287d53bd8378e5b0