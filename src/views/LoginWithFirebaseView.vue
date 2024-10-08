<template>
    <h1>Login via Firebase</h1>
    <p><input type="text" placeholder="E-mail" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="pwd" /></p>
    <p><button @click="login">Login</button></p>
</template>
  
<script setup>
//将从表单里获取的用户名密码信息发送到firebase并进行比对，
//将比对信息反馈到页面提示用户登录是否成功
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const email = ref('')
const pwd = ref('')
const auth = getAuth();
const login = () => {
    const userEmail = email.value
    const userPassword = pwd.value
    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((data) => {
            console.log(auth.currentUser)
        })
        .catch((error) => {
            console.log(error.code)
        })
}
</script>
  
<style></style>
  