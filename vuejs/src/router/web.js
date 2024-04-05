const web = [
    {
        path: "/",
        name: "Login",
        component: () => import ("../layouts/LoginComponent.vue"),
    },
    { 
        path:"/web",
        name:"Home",
        component: () => import("../layouts/home.vue"), 
        meta: { requiresAuth: true,loadData: true , reload: true},
        children: [
            {
                path: "web-home",
                name: "Web-home",
                component: () => import ("../pages/web/home/index.vue"),
                meta : { reload:true },
            },
            {
                path: "account",
                name: "account",
                component: () => import ("../pages/web/account/index.vue")
            },

            {
                path: "result",
                name: "result",
                component: () => import ("../pages/web/result/index.vue")
            },

            {
                path: "module-registration",
                name: "module-registration",
                component: () => import ("../pages/web/module-registration/index.vue")
            },
            {
                path: "module-registration/register-tc/:id",
                name: "module-registration-register",
                component: () => import ("../pages/web/module-registration/register.vue")
            },
            {
                path: "edu-program",
                name: "edu-program",
                component: () => import ("../pages/web/edu-program/index.vue")
            },
        ]
    },
  
] 
export default web ;