<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">📅 预订服务</h2>
    <p class="mb-6">你好，{{ currentUser?.name }}！请选择你要预订的项目。</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="border rounded-lg p-4 hover:shadow-md cursor-pointer">
        <h3 class="font-semibold">小马骑行体验</h3>
        <p class="text-sm text-gray-600">适合 5-12 岁儿童</p>
      </div>
      <div class="border rounded-lg p-4 hover:shadow-md cursor-pointer">
        <h3 class="font-semibold">亲子互动课程</h3>
        <p class="text-sm text-gray-600">家长可陪同参与</p>
      </div>
    </div>
    <button
      class="flex items-center space-x-2 text-purple-600 hover:text-purple-800"
      @click="$emit('openChat')"
    >
      <MessageSquare class="w-5 h-5" />
      <span>联系客服</span>
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
