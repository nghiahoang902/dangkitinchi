import {createRouter , createWebHistory} from 'vue-router';
import admin from './admin.js';
import web  from './web.js';
const routes = [...admin,...web]; 
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('accessToken');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Nếu trang yêu cầu đăng nhập mà người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next('/');
  } else {
    next();
  }
});

export default router;