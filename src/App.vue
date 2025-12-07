<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
    <!-- Sticky Header -->
    <header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <h1 class="text-center text-purple-600 text-lg font-semibold">
          🐴 Pony Playground Booking System
        </h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <!-- 已登录：根据角色渲染视图 -->
        <AdminView
          v-if="currentUser?.role === 'admin'"
          @open-chat="handleOpenChat"
          @logout="handleLogout"
        />
        <BookingView
          v-else-if="currentUser"
          @open-chat="() => handleOpenChat()"
          @logout="handleLogout"
        />
        <!-- 未登录：显示登录入口 -->
        <AuthView v-else />
      </div>
    </main>

    <!-- 聊天浮层 -->
    <Teleport to="body">
      <ChatView
        v-if="showChat"
        :customer-mobile="chatWithCustomer"
        @close="showChat = false"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthView from './views/AuthView.vue'
import BookingView from './views/BookingView.vue'
import AdminView from './views/AdminView.vue'
import ChatView from './views/ChatView.vue'
import { getCurrentUser, logoutUser } from './utils/auth'

const currentUser = ref(getCurrentUser())
const showChat = ref(false)
const chatWithCustomer = ref<string | null>(null)

const handleOpenChat = (customerMobile?: string) => {
  if (customerMobile) {
    chatWithCustomer.value = customerMobile
  }
  showChat.value = true
}

const handleLogout = () => {
  logoutUser()
  currentUser.value = null
}
</script>
