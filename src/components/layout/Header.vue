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
  <header class="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 transition-colors duration-300 font-sans">
    <div class="container mx-auto px-6">
      <nav class="flex items-center justify-between h-24">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-2xl lg:text-3xl font-light text-white tracking-widest uppercase"
          style="font-family: 'Playfair Display', 'Cormorant Garamond', serif;"
          @click="closeMenu"
        >
          {{ settings.shop.name }}
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-10">
          <li>
            <RouterLink
              to="/"
              class="text-neutral-300 hover:text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase transition-colors"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/menu"
              class="text-neutral-300 hover:text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase transition-colors"
              >Menu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="text-neutral-300 hover:text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase transition-colors"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="text-neutral-300 hover:text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase transition-colors"
              >About</RouterLink
            >
          </li>
        </ul>

        <div class="flex items-center gap-4">
          <!-- User Profile Button -->
          <button
            @click="openUserProfile"
            :class="[
              'relative p-2 rounded-full transition-colors',
              userStore.hasProfile
                ? 'text-emerald-400 hover:bg-emerald-400/10'
                : 'text-neutral-400 hover:text-white hover:bg-white/10',
            ]"
          >
            <User :size="22" stroke-width="1.5" />
            <span
              v-if="!userStore.hasProfile"
              class="absolute top-0 right-0 bg-emerald-500 text-neutral-950 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-neutral-950"
            >
              !
            </span>
          </button>

          <!-- Cart Button -->
          <button
            @click="openCart"
            class="relative p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <ShoppingCart :size="22" stroke-width="1.5" />
            <span
              v-if="cart.itemCount > 0"
              class="absolute top-0 right-0 bg-emerald-500 text-neutral-950 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-bounce border border-neutral-950"
            >
              {{ cart.itemCount }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="md:hidden p-2 text-neutral-400 hover:text-white">
            <Menu v-if="!isMenuOpen" :size="26" stroke-width="1.5" />
            <X v-else :size="26" stroke-width="1.5" />
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden pb-6 border-t border-white/10 bg-neutral-950 absolute left-0 w-full px-6 shadow-2xl"
        >
          <ul class="mt-4 space-y-4">
            <li>
              <RouterLink
                to="/"
                @click="closeMenu"
                class="block text-neutral-300 hover:text-emerald-400 text-sm font-medium tracking-widest uppercase py-2"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/menu"
                @click="closeMenu"
                class="block text-neutral-300 hover:text-emerald-400 text-sm font-medium tracking-widest uppercase py-2"
                >Menu</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                @click="closeMenu"
                class="block text-neutral-300 hover:text-emerald-400 text-sm font-medium tracking-widest uppercase py-2"
                >Contact</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                @click="closeMenu"
                class="block text-neutral-300 hover:text-emerald-400 text-sm font-medium tracking-widest uppercase py-2"
                >About</RouterLink
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>
