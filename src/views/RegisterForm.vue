<template>
  <div class="register-container">
    <div class="wrapper">
      <div class="header">注册账户</div>
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
        <input
          type="password"
          placeholder="确认密码"
          class="input-item"
          v-model="confirmPassword"
        />
        <button class="btn" @click="submitForm">注册</button>
      </div>
      <div class="msg">
        已经有账号了？==》》
        <RouterLink to="/">点击进行登陆</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup name="Register">
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const canSubmit = computed(() => {
  return (
    !!(username.value && password.value) &&
    password.value.length >= 6 &&
    password.value === confirmPassword.value
  );
});
const submitForm = async () => {
  if (canSubmit.value) {
    const data = {
      username: username.value,
      password: password.value,
    };
    fetch(`${store.state.serverURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        alert("注册成功!");
        username.value = "";
        password.value = "";
        confirmPassword.value = "";
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  }
};
</script>
<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/history.jpg") no-repeat center;
  background-size: cover;
}
.wrapper {
  width: 400px;
  height: 500px;
  border-radius: 15px;

  padding: 0 50px;
  position: absolute;
  background: url("@/assets/images/history.jpg") no-repeat center;
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
  background-color: #a6c1ee;
  color: #fff;
  border-radius: 4px;
  transition: background 0.3s ease;

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
