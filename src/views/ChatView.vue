<template>
  <div class="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
    <div class="bg-white w-full max-w-md rounded-t-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div class="bg-purple-600 text-white p-4 flex justify-between items-center">
        <h3 class="font-semibold">
          {{ props.customerMobile ? `与 ${props.customerMobile} 聊天` : '客服中心' }}
        </h3>
        <button @click="$emit('close')" class="text-white hover:text-gray-200">
          ✕
        </button>
      </div>
      <!-- Messages -->
      <div class="h-64 p-4 overflow-y-auto bg-gray-50">
        <div class="text-sm text-gray-600">系统：您好！请问有什么可以帮您？</div>
      </div>
      <!-- Input -->
      <div class="p-3 border-t flex">
        <input
          v-model="message"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="输入消息..."
          class="flex-1 border rounded-l-lg px-3 py-2 text-sm focus:outline-none"
        />
        <button
          @click="sendMessage"
          class="bg-purple-600 text-white px-4 rounded-r-lg hover:bg-purple-700"
        >
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  customerMobile?: string
}>()

defineEmits(['close'])

const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    alert(`发送消息: ${message.value}`)
    message.value = ''
  }
}
</script>
