<template>
  <div class="text-center py-12">
    <h2 class="text-xl font-bold text-gray-800 mb-6">欢迎使用 Pony Playground</h2>
    <div class="space-x-4">
      <button
        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        @click="loginAsUser"
      >
        以用户身份登录
      </button>
      <button
        class="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        @click="loginAsAdmin"
      >
        以管理员身份登录
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginUser } from '../utils/auth'

const loginAsUser = () => {
  loginUser({
    id: 'user1',
    name: '小明',
    role: 'user',
    mobile: '13800138000'
  })
}

const loginAsAdmin = () => {
  loginUser({
    id: 'admin1',
    name: '管理员',
    role: 'admin'
  })
}
</script>
