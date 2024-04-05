<template>
     <a-layout>
    
        <TheHeader/> 
            <div class="col-sm-2 d-none d-sm-flex" style="padding-left: 0px;height: 100%;">
              
              <a-layout-sider v-model:collapsed="collapsed" collapsible style="background: #fff;height: 100vh;" >     
                  <a-list style="width: 100%">   
                          <template #header>
                            <div style="text-align: center;">Tài khoản sinh viên</div>
                          </template>
                <TheMenu/>
                </a-list>
            
                </a-layout-sider> 
          
          
            </div>
        <a-layout >
              
        <a-layout-content style="width: 100%; height: 100%; background: #fff;"> 
         
            <div class="container-fluid" >
           
             <div class="row" style="padding:10px 0px 0px 0px">
           
                <div class="col-12 col-sm-12" >
                <router-view></router-view>
                <div v-if="loading" class="loading-indicator">Loading...</div>
                </div>
            </div>
            </div>
        </a-layout-content>
           
        </a-layout> 
        <TheFooter/>  
     
     </a-layout>
     </template>
  <script>
  import { ref } from "vue";
  import TheHeader from "../components/TheHeader.vue";
  import TheMenu from "../components/TheMenu.vue";
  import TheFooter from "../components/TheFooter.vue";
  import { useMenu } from "../stores/use-menu";
  import { LayoutSider,List } from 'ant-design-vue';
  
  export default {
    components: {
      TheHeader,
      TheMenu,
      TheFooter,
      'a-layout-sider': LayoutSider,
      'a-list' : List,
    },
    setup() {  
    const collapsed = ref(false);
    return {
      collapsed,
     
    };
  },
    data() {
    return {
      loading: false,
    };
  },
 
  watch: {
    $route(to, from) {
      if (to.meta.reload) {
        // Kiểm tra xem có cần reload không
        this.reloadPage();
      }
    },
  },
  methods: {
    reloadPage() {
      // Reload trang
      this.loading = true; // Hiển thị hiệu ứng loading (nếu cần)
      location.reload();
    },
  },
  };
  </script>
  <style scoped>
   
  .loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  </style> 