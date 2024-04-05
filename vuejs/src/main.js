import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import App from './App.vue'

import axios from 'axios'
window.axios = axios;

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import {
    Menu,
    List,
    Drawer, 
    Button,
    message,
    Table, 
    Card,
    Descriptions,
    Popover,
    LayoutSider,
    Alert,
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    Dropdown,
} from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css';
import './static/fontawesome/css/all.min.css';
import '../public/templates/css/style.css'

// import '../public/templates/css/bootstrap-datetimepicker.min.css'
// import '../public/templates/css/flaticon.css'
// import '../public/templates/css/font-awesome.min.css'
// import '../public/templates/css/kstyle.css'
// import '../public/templates/css/material-design-iconic-font.min.css'
// import '../public/templates/css/perfect-scrollbar.min.css'
// import '../public/templates/css/select2.min.css'
// import '../public/templates/js/bootstrap.min.js'
// import '../public/templates/js/bootstrap-datetimepicker.min.js'
// import '../public/templates/js/jquery.gritter.js'
// import '../public/templates/js/jquery.min.js'
// import '../public/templates/js/kadmin.2.0.js'
// import '../public/templates/js/kWeb.Register-2.1.js'
//import '../public/templates/js/main.js'
//import '../public/templates/js/moment.min.js'
//import '../public/templates/js/perfect-scrollbar.jquery.min.js'
//import '../public/templates/js/select2.min.js'
//import '../public/templates/js/snowfall.jquery.min.js'

const app=createApp(App);
app.use(createPinia());
app.use(router);
app.use(Menu);
app.use(List);
app.use(Table);
app.use(Button);

app.use(Drawer);
app.use(Descriptions);
app.use(Popover);
app.use(Card);
app.use(Alert);

app.use(LayoutHeader);
app.use(LayoutContent);
app.use(LayoutSider);
app.use(LayoutFooter);
app.use(Dropdown)





app.mount('#app');
app.config.globalProperties.$message = message;
