import Vue from "vue";
import VueRouter from "vue-router"
import MainPage from "@/pages/MainPage.vue"
import ProductPage from "@/pages/ProductPage.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/product:id',
        name: 'ProductPageView',
        component: ProductPage
    }
];

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new VueRouter({
    mode: 'history',
    routes
});