<script setup lang="ts">
import { Menu, ShoppingCart, X, User } from "lucide-vue-next";
import { ref } from "vue";
import { useCartStore } from "../../stores/cart";
import { useUserStore } from "../../stores/user";
import { settings } from "../../config/settings";
import { RouterLink } from "vue-router";

const cart = useCartStore();
const userStore = useUserStore();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const openCart = () => {
  cart.openCart();
  closeMenu();
};

const openUserProfile = () => {
  userStore.openProfileModal();
  closeMenu();
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-2xl font-bold text-primary"
          @click="closeMenu"
        >
          🧁 {{ settings.shop.name }}
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8">
          <li>
            <RouterLink
              to="/"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/menu"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              >Menu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="text-gray-700 hover:text-primary font-medium transition-colors"
              >About</RouterLink
            >
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <!-- User Profile Button -->
          <button
            @click="openUserProfile"
            :class="[
              'relative p-3 rounded-full transition-colors',
              userStore.hasProfile
                ? 'bg-primary-light/10 hover:bg-primary-light/20'
                : 'bg-gray-100 hover:bg-gray-200',
            ]"
          >
            <User
              :size="24"
              :class="userStore.hasProfile ? 'text-primary' : 'text-gray-600'"
            />
            <span
              v-if="!userStore.hasProfile"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              !
            </span>
          </button>

          <!-- Cart Button -->
          <button
            @click="openCart"
            class="relative p-3 bg-primary-light/10 hover:bg-primary-light/20 rounded-full transition-colors"
          >
            <ShoppingCart :size="24" class="text-primary" />
            <span
              v-if="cart.itemCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce"
            >
              {{ cart.itemCount }}
            </span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden p-2">
          <Menu v-if="!isMenuOpen" :size="28" class="text-gray-700" />
          <X v-else :size="28" class="text-gray-700" />
        </button>
      </nav>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <ul
          v-if="isMenuOpen"
          class="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 space-y-3"
        >
          <li>
            <RouterLink
              to="/"
              @click="closeMenu"
              class="block text-gray-700 hover:text-primary font-medium py-2"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/menu"
              @click="closeMenu"
              class="block text-gray-700 hover:text-primary font-medium py-2"
              >Menu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="closeMenu"
              class="block text-gray-700 hover:text-primary font-medium py-2"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="closeMenu"
              class="block text-gray-700 hover:text-primary font-medium py-2"
              >About</RouterLink
            >
          </li>
        </ul>
      </transition>
    </div>
  </header>
</template>
