<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import CartDrawer from "./components/CartDrawer.vue";
import UserProfileModal from "./components/UserProfileModal.vue";
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
    <CartDrawer />
    <UserProfileModal />
  </div>
</template>
