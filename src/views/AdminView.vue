<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">👨‍💼 管理员后台</h2>
    <p class="mb-6">你好，{{ currentUser?.name }}！你可以管理预订和客户。</p>
    <div class="mb-6">
      <button
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        @click="() => $emit('openChat', '13800138000')"
      >
        与客户 138****8000 聊天
      </button>
    </div>
    <button
      class="flex items-center space-x-2 text-purple-600 hover:text-purple-800"
      @click="$emit('openChat')"
    >
      <MessageSquare class="w-5 h-5" />
      <span>打开客服窗口</span>
    </button>
    <button
      class="ml-4 text-red-600 hover:text-red-800"
      @click="$emit('logout')"
    >
      <LogOut class="w-5 h-5 inline mr-1" />登出
    </button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentUser } from '../utils/auth'
import { MessageSquare, LogOut } from 'lucide-vue-next'

defineEmits(['openChat', 'logout'])

const currentUser = getCurrentUser()
</script>
