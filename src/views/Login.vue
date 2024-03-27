<template>
    <div>
      <section class="login d-flex">
        <div class="login-left w-50 h-100" style="background-color: rgb(86, 78, 234);">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-6">
              <div class="header">
                <h1>Welcome Back</h1>
                <p>Welcome back! Please enter your details.</p>
              </div>
  
              <div class="login-form">
                <label for="email" class="form-label" style="color: #ffffff;">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter your email">
  
                <label for="password" class="form-label" style="color: #ffffff;">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter your password">
                <a href="#" class="text-decoration-none text-center">Forgot password</a>
                <button class="signin" @click="login">Submit</button>
                <button class="signin-google">
                  <img src="../assets/gugel.png" alt="" style="width: 20px; height: 20px;">
                  Sign in With Google
                </button>
                <div class="text-center"></div>
                <span class="d-inline" style="color: #ffffff;">Don't have an account?
                  <router-link to="/signup" class="d-inline text-decoration-none">Sign up for free</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="login-right w-50 h-100" style="background-color: rgb(255, 255, 255);">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/toolist.png" class="d-block w-100" alt="..." style="width: 700px; height: 700px; margin-left: 20px;">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (!this.email || !this.password) {
          alert('Please enter both email and password');
          return;
        }

        if (this.email === 'user@example.com' && this.password === 'password') {
          this.redirectToContent();
        } else {
          alert('Invalid email or password');
        }
      },
      redirectToContent() {
        this.$router.push('/content');
      }
    }
  };

  console.log('hirerewrwerrre')
  </script>
  
  <style>
    *{
    font-family: 'Poppins', sans-serif;
}
.login{
    height: 100vh;
}
.header h1{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;

    color: #ffffff;
}
.header p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 20px;
}
.login-form label{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    color: #000000;
}
.login-form input{
    background: #FFFFFF;
    border: 1px solid #bcbcbc;
    box-sizing: border-box;
    border-radius: 8px;
}
.login-form a{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    margin-top: 20px !important;
    display: block;
    margin-bottom: 10px;
}

.login-form .signin {
    background: #000000;
    border-radius: 8px;
    width: 100%;
    height: 42px;
    color: #FFFFFF;
    border: none;
}

.login-form .signin-google{
    background: #ffffff;
    border-radius: 8px;
    width: 100%;
    height: 42px;
    color: #000000;
    box-sizing: border-box;
    border: 1px solid #bcbcbc;
    margin: 10px 0 20px 0;
}

.login-form span{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #737373;
}

.login-form span a{
    font-weight: 600;
}
  </style>
  