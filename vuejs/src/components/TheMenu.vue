<template>            
    <a-menu
     :key="`menu-${collapsed ? 'collapsed' : 'expanded'}`"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      class="full-height-menu"
    >  
    <a-menu-item key="web-home">
        <router-link :to="{ name: 'Web-home' }">
          <span>
            <HomeOutlined class="me-1" /> Trang chủ
          </span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="account">
        <router-link :to="{ name: 'account' }">
          <span>
            <UserOutlined class="me-1" /> Tài khoản
          </span>
        </router-link>
      </a-menu-item>
  
      <a-menu-item key="edu-program">
        <router-link :to="{ name: 'edu-program' }">
          <span>
            <AuditOutlined class="me-1" /> Khung chương trình
          </span>
        </router-link>
      </a-menu-item>

      <a-sub-menu key="sub1">
          <template #title>
            <span>
              <TagOutlined class="me-1"/>
              <span>Theo dõi kết quả học tập</span>
            </span>
          </template>
          <a-menu-item key="result">
            <router-link :to="{ name: 'result' }">
              <span>
                   Kết quả học tập 
              </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4"> 
            <span>
                   Kết quả thi 
             </span>
           </a-menu-item>
        </a-sub-menu>

      <a-sub-menu key="sub2">
          <template #title>
            <span>
              <KeyOutlined class="me-1"/>
              <span>Đăng ký tín chỉ</span>
            </span>
          </template>
          <a-menu-item key="module-registration">
            <router-link :to="{ name: 'module-registration' }">
             <span>
                Đăng ký học phần
              </span>
           </router-link>
          </a-menu-item>
          <a-menu-item key="5"> 
            <span>
                Hủy học phần
             </span>
           </a-menu-item>
        </a-sub-menu>

    </a-menu>
 
  </template>
  
  <script>
  import { UserOutlined, TagOutlined, KeyOutlined, HomeOutlined, AuditOutlined } from "@ant-design/icons-vue";
  import { defineComponent, ref, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useMenu } from "../stores/use-menu.js";
    export default defineComponent({
    components: {
      UserOutlined,
      TagOutlined,
      KeyOutlined,
      HomeOutlined,
      AuditOutlined
  },
    setup() {
      const store = useMenu();
      const collapsed = ref(false);
      return {
        ...storeToRefs(store),
        collapsed,
      };
    },
  });
  </script>
  <style>
.full-height-menu {
    height: 100%;
    overflow-y: auto;
     /* Cho phép cuộn nếu nó quá dài */
}
</style>