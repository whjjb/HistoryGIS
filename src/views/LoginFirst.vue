<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="header">登陆</div>
      <div class="form-wrapper">
        <input
          type="text"
          placeholder="账户"
          class="input-item"
          v-model="username"
        />
        <input
          type="password"
          placeholder="密码"
          class="input-item"
          v-model="password"
        />
        <button class="btn" @click="submitForm">登陆</button>
      </div>
      <div class="msg">
        没有账号？==》》
        <RouterLink to="/register">点击进行注册</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup name="Login">
import axios from "axios";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();

const username = ref("");
const password = ref("");
const router = useRouter();
const canSubmit = computed(() => {
  return !!(username.value && password.value) && password.value.length >= 6;
});
const submitForm = async () => {
  if (canSubmit.value) {
    const data = {
      username: username.value,
      password: password.value,
    };
    fetch(`${store.state.serverURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        alert("登陆成功!");
      })
      .catch((error) => {
        console.error(error);
        alert("登陆失败!");
      });
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/history.jpg") no-repeat center;
  background-size: cover;
}
.login-wrapper {
  width: 400px;
  height: 500px;
  border-radius: 15px;
  padding: 0 50px;
  background: url("@/assets/images/history.jpg") no-repeat center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;

  border-bottom: 1px solid #ebebeb;
}

.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 4px solid rgba(128, 125, 125, 0);
  font-size: 15px;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    text-transform: uppercase;
  }

  &:focus {
    border-bottom-color: #a6c1ee;
  }
}

.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-color: #a6c1ee;
  color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #8ac1ee;
  }
}

.msg {
  text-align: center;
  line-height: 88px;
  color: black;
}

a {
  text-decoration-line: none;
  color: black;
  transition: color 0.3s ease;

  &:hover {
    color: #8ac1ee;
  }
}
</style>
