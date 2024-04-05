  <template>
    
    <a-layout-header style="background: #fff; padding: 0">
      <div class="container-fluid" >
        <div class="row text-white" style="background-color: #0c713d; padding: 1rem">
          
          <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
            <span @click="showDrawer()">
              <!-- <font-awesome-icon icon="align-justify" />  --> <MenuOutlined/>
            </span>
          </div>

          <div class="
            col-10 col-sm-9
            d-flex
            align-items-center
            justify-content-center justify-content-sm-start
          ">
            <img src="/templates/image/logo.jpg" alt="Logo" height="32" width="34" class="ms-3 me-3" />
            <span class="d-none d-sm-flex">CỔNG THÔNG TIN SINH VIÊN</span>
          </div>
          
          <div class="
            col-sm-3
            d-none d-sm-flex
            align-items-center
            justify-content-sm-end
          "> 
            <div class="demo-dropdown-wrap">
              <a style="cursor:pointer;" @click="showDrawerUser">
                {{ fullname }}
              </a>
              <a-drawer :open.sync="visible_user"  
              placement="right"  
              
              :footer-style="{ textAlign: 'right' }"
              @close="closeDrawerUser"
              @after-open-change="afterOpenChange">
              
              <template #default>
              <img src="/templates/image/logo.jpg" alt="Logo"  width="100%" class="ms-3 me-3" />
                <a-menu>
                  <a-menu-item key="account">
                    <router-link :to="{ name: 'account' }">
                      <span >
                        <UserOutlined/>
                        Tài khoản cá nhân
                      </span>
                    </router-link>
                  </a-menu-item>
                  <a-menu-item key="result">
                    <router-link :to="{ name: 'result' }">
                      <span >
                        <AuditOutlined/>
                        Kết quả học tập
                      </span>
                    </router-link>
                  </a-menu-item>
                  <a-menu-item key="logout" @click="logout">
                    <LogoutOutlined /> 
                      Đăng xuất
                    </a-menu-item>          
                </a-menu> 
              </template>
              

              </a-drawer>
            </div>
          </div>

          <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
            <span @click="showDrawerUser()">
              <!-- <font-awesome-icon icon="user" /> --> <LogoutOutlined />
            </span>
          </div>
        </div>
      </div>
      <a-drawer :open.sync="visible" title="DANH MỤC" placement="left"  @close="closeDrawer">
        <template #default>
          <TheMenu/>
        </template>
      </a-drawer>
    </a-layout-header>
     
    
    
   
    
  </template>

  <script>
  import axios from 'axios';
  import TheMenu from '../components/TheMenu.vue';
  import { defineComponent, ref, onMounted } from "vue";
  import { Layout, Drawer, Button, Dropdown, Menu, MenuDivider, MenuItem, Image, LayoutSider,List, LayoutHeader } from 'ant-design-vue';
  import { message } from 'ant-design-vue';
  import { UserOutlined, LogoutOutlined,AuditOutlined,MenuOutlined,AppstoreAddOutlined} from '@ant-design/icons-vue';
  import API from '../router/apis';
  import { storeToRefs } from "pinia";
  import { useMenu } from "../stores/use-menu.js";

  export default defineComponent({
    components: {
      TheMenu,
      'a-layout': Layout,
      'a-layout-header': LayoutHeader,
      'a-layout-sider': LayoutSider,
      'a-drawer': Drawer,
      'a-button': Button,
      'a-dropdown': Dropdown,
      'a-menu': Menu,
      'a-menu-divider': MenuDivider,
      'a-menu-item': MenuItem,
      'a-list' : List,
      UserOutlined,
      LogoutOutlined,
      AuditOutlined,
      MenuOutlined,
      AppstoreAddOutlined,
      Image,
  },
    setup() {
      const store = useMenu();
      const visible = ref(false);
      const visible_user = ref(false);
      const collapsed = ref(false);

      const showDrawer = () => {
        visible.value = true;
      };

      const closeDrawer = () => {
        visible.value = false;
      };
      
      const handleMenuClick = e => {
        // debugger
        console.log('click', e);
      };

      const showDrawerUser = () => {
        visible_user.value = true;
      };
      const closeDrawerUser = () => {
        visible_user.value = false;
      };
      const afterOpenChange = bool => {
        console.log('visible_user', bool);
      };

      const users = ref([]);
      const fullname = ref([]);

      onMounted(async () => {
        
        const token = localStorage.getItem('accessToken');
        if (token) {
          axios.defaults.headers.common['Authorization'] = token;
        }

        try {
          const response = await axios.get(API.user);
          users.value = response.data;
          fullname.value = users.value.first_name + " " + users.value.last_name;
        } catch (error) {
          console.error(error);
        }
      });
      const logout = () => {
        localStorage.removeItem("accessToken");
        message.success("Đăng xuất thành công");
        // Chuyển hướng đến trang đăng nhập hoặc trang chính của ứng dụng
        setTimeout(() => {
      // Chuyển hướng đến trang đăng nhập
        window.location.href = "/";
          }, 1000);
      };
      
      return {
        visible,
        visible_user,
        collapsed,
        showDrawer,
        closeDrawer,
        showDrawerUser,
        closeDrawerUser,
        fullname,
        afterOpenChange,
        handleMenuClick,
        logout,
        ...storeToRefs(store),

      };
    },
    mounted() {
      // Ẩn trigger khi component được mount
      document.querySelector('.ant-layout-sider-trigger').style.display = 'none';
    },
  });
  </script>

  <style scoped>
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  </style>
