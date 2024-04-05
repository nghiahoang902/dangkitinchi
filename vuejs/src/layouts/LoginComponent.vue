<template>
  
  <div>
    
    <div class="panel panel-default panel-border-color panel-border-color-primary">
        <div class="panel-heading panel-heading-divider">
            <img src="../../public/templates/image/logo.jpg" alt="logo" width="75" height="75" class="logo-img">
            <span class="splash-description">
              <h4 style="font-weight:bold;">Trường Đại học NEWWAYTECH Hà Nội</h4>
              <h5 style="font-weight:bold;">Cổng thông tin Sinh viên</h5>
            </span>
            
        </div>
        <div class="panel-body">
                <div class="form-group">
                    <input name="username" v-model="username" type="text"  class="form-control" placeholder="Tên đăng nhập">
                </div>
                <div class="form-group">
                    <input name="password" v-model="password" type="password"  class="form-control" placeholder="Mật khẩu">
                </div>
		<!-- <div class="form-group">
				<div class="g-recaptcha" data-sitekey="6LdPnAUaAAAAABC-5dwvcjM0_RPdC9s3ldQlHmd8"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-7epvvn59t5pu" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdPnAUaAAAAABC-5dwvcjM0_RPdC9s3ldQlHmd8&amp;co=aHR0cHM6Ly9zdi5oYXVpLmVkdS52bjo0NDM.&amp;hl=en&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;size=normal&amp;cb=bxueiwkq9zox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
			</div> -->
			<div class="splash-footer"><span style="font-weight:bold;color:red;">Bạn quên mật khẩu? <a href="/help?repass=1">Quên mật khẩu</a></span></div>  
                
				
				
				<div class="form-group login-submit">
                    <!-- <input type="submit"  value="Đăng nhập"  class="btn btn-primary btn-xl" data-dismiss="modal"> -->
                    <button class="btn btn-primary btn-xl" v-on:click="login">Đăng nhập</button>
        </div> 
        <div v-if="errorMessage" class="alert">{{ errorMessage }}</div>          		
        </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import '../style.css';
import API from '../router/apis';

export default {
  name: "Login",
  data()
  {
    return {
      username:'',
      password:'',
      errorMessage:'',
      userId:''
    }
  },
  methods: {
    async login() {
      let result = await axios.post(API.login,{
          username: this.username,
          password: this.password,
          user_type: 'S'
        }
      )
      .then(response => {
        //this.$store.commit('setUserId', response.data.userId);
        this.$router.push('/web/web-home');
        if (this.$route.meta.reload) {
        this.reloadPage();
        }
        localStorage.setItem('accessToken', response.data.user.accessToken);
        //this.userId = response.data.userId;
        localStorage.setItem('user', response.data.user);
        // console.log(response.data.user.user);
        console.log(response.data.user);
      })
      .catch(error => {
        console.error('Failed to login:', error);
        alert('Đăng nhập thất bại. Vui lòng đăng nhập lại.');
        window.location.reload();
      });
    },
    reloadPage() {
      // Reload trang
      location.reload();
    },
  },
  mounted(){
     let user= localStorage.getItem('user');
     if(user) {
       this.$router.push('/web/web-home')
     }
  }
  
};
</script>
<style>
.alert {
  color: red;
}
</style>
