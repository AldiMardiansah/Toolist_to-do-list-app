<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 order-md-2">
        <div class="form-wrapper">
          <form @submit.prevent="handleSubmit" class="user-data-form mt-30">
            <h2>Toolist Register</h2>
            <p class="header-info pt-30 pb-50">Already have an account? <router-link to="/login">Login</router-link></p>

            <div class="input-group-meta mb-50">
              <label for="fullName">Full Name</label>
              <input v-model="fullName" type="text" placeholder="Melvin Carlson" id="fullName">
            </div>

            <div class="input-group-meta mb-50">
              <label for="email">Email</label>
              <input v-model="email" type="email" placeholder="bolcovfed@ce.edu" id="email">
            </div>

            <div class="input-group-meta mb-50">
              <label for="password">Password</label>
              <input v-model="password" type="password" placeholder="Enter Password" class="pass_log_id" id="password">
              <span class="placeholder_icon"><span class="passVicon"></span></span>
            </div>

            <div class="input-group-meta mb-15">
              <label for="confirmPassword">Re-type Password</label>
              <input v-model="confirmPassword" type="password" placeholder="Enter Password" class="pass_log_id" id="confirmPassword">
              <span class="placeholder_icon"><span class="passVicon"></span></span>
            </div>

            <button type="submit" class="theme-btn-one mt-30 mb-50">Sign Up</button>
          </form>
        </div>
      </div>
      <div class="col-md-6 order-md-1">
        <div class="logo">
          <a><img src="../src/assets/toolist.png" alt="Toolist Logo"></a>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSubmit() {
      // Validate form fields
      if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields');
        return;
      }

      // Check if passwords match
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Call your signup API or service
      // Replace the following code with your actual signup logic
      console.log('Form submitted:', this.fullName, this.email, this.password, this.confirmPassword);
      // You can redirect to another route or perform other actions after successful signup
      this.$router.push('/login');
    },
  },
};
</script>
  
  <style scoped>
        body, h1, h2, h3, h4, p, label {
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 50px auto;
}

.logo img {
    max-width: 100%;    
    height: auto;
}

.form-wrapper {
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-wrapper h2 {
    font-size: 28px;
    margin-bottom: 20px;
}

.input-group-meta {
    margin-bottom: 20px;
}

.input-group-meta label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.input-group-meta input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.agreement-checkbox {
    margin-top: 10px;
}

.agreement-checkbox label {
    font-size: 14px;
}

.theme-btn-one {
    background-color: #007bff;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.theme-btn-one:hover {
    background-color: #0056b3;
}

.copyright-text {
    margin-top: 20px;
    font-size: 12px;
    color: #777;
}

@media (max-width: 576px) {
    .form-wrapper {
        max-width: 100%;
    }
}
  </style>
  