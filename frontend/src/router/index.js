import Vue from 'vue';
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard/index";

Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

import Layout from '../layout';

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: "/dashboard",
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: '首页'}
    }]
  }
]

const createRouter = () => new VueRouter({
  mode: process.env.NODE_ENV == 'production'? 'abstract': 'history',
  routes: constantRoutes
});
const router = createRouter();

export default router;