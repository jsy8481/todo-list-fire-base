<template>
  <div>
    <h1>Login</h1>
    <div>
      <div class="login_input">
        <form @submit.prevent="submitForm">
          <label for="id">이메일</label>
          <input id="id" type="text" v-model="email" />
          <label for="password">비밀번호</label>
          <input id="password" type="password" v-model="password" />
          <input
            type="submit"
            value="로그인"
            @click="setLogin"
            :disabled="isProcessed"
          />
          <input
            type="submit"
            value="회원가입"
            @click="setRegister"
            :disabled="isProcessed"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/firebase/login.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLogin: true,
      isProcessed: false,
    };
  },
  methods: {
    async submitForm() {
      const loginInfo = {
        email: this.email,
        password: this.password,
      };

      this.isLogin ? this.login(loginInfo) : this.register(loginInfo);
    },
    async login(loginInfo) {
      const result = await login.login(loginInfo);

      if (!result.error) {
        console.log(result);
      } else {
        if (result.alert) {
          alert(result.message);
        }
      }
    },
    async register(loginInfo) {
      const result = await login.register(loginInfo);

      if (!result.error) {
        console.log(result);
      } else {
        if (result.alert) {
          alert(result.message);
        }
      }
    },
    setLogin() {
      this.isLogin = true;
    },
    setRegister() {
      this.isLogin = false;
    },
    resetLoginInfo() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
