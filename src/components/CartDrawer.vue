<script setup lang="ts">
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-vue-next";
import { useCartStore } from "../stores/cart";
import { useWhatsapp } from "../composables/useWhatsapp";

const cart = useCartStore();
const { checkout, formatPrice } = useWhatsapp();

const closeCart = () => {
  cart.closeCart();
};

const incrementQty = (productId: number, currentQty: number) => {
  cart.updateQty(productId, currentQty + 1);
};

const decrementQty = (productId: number, currentQty: number) => {
  if (currentQty > 1) {
    cart.updateQty(productId, currentQty - 1);
  }
};

const removeItem = (productId: number) => {
  cart.removeItem(productId);
};

const clearCart = () => {
  if (confirm("Yakin ingin mengosongkan keranjang?")) {
    cart.clearCart();
  }
};

const handleCheckout = () => {
  checkout();
};
</script>

<template>
  <!-- Overlay -->
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="cart.isCartOpen"
      @click="closeCart"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    ></div>
  </transition>

  <!-- Drawer -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="cart.isCartOpen"
      class="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between p-6 border-b border-gray-200 bg-primary"
      >
        <h2 class="text-2xl font-bold text-white flex items-center gap-2">
          <ShoppingBag :size="28" />
          <span>Keranjang</span>
        </h2>
        <button
          @click="closeCart"
          class="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X :size="24" class="text-white" />
        </button>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto p-6">
        <!-- Empty State -->
        <div
          v-if="cart.itemCount === 0"
          class="flex flex-col items-center justify-center h-full text-center"
        >
          <div class="mb-6">
            <ShoppingBag :size="80" class="text-gray-300 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Keranjang Kosong
            </h3>
            <p class="text-gray-600">
              Belum ada produk di keranjang Anda. Yuk, mulai belanja!
            </p>
          </div>
          <button
            @click="closeCart"
            class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all"
          >
            Lihat Menu
          </button>
        </div>

        <!-- Cart Items List -->
        <div v-else class="space-y-4">
          <div
            v-for="item in cart.detailedItems"
            :key="item.id"
            class="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div class="flex gap-4">
              <!-- Image -->
              <img
                :src="item.image"
                :alt="item.name"
                class="w-20 h-20 rounded-lg object-cover"
              />

              <!-- Details -->
              <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">{{ item.name }}</h4>
                <p class="text-sm text-gray-600 mb-2">{{ item.weight }}</p>
                <p class="text-primary font-bold">
                  Rp {{ formatPrice(item.price) }}
                </p>
              </div>

              <!-- Remove Button -->
              <button
                @click="removeItem(item.id)"
                class="self-start p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 :size="18" />
              </button>
            </div>

            <!-- Quantity Controls -->
            <div
              class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100"
            >
              <div class="flex items-center gap-3">
                <button
                  @click="decrementQty(item.id, item.qty)"
                  class="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Minus :size="16" class="text-gray-700" />
                </button>
                <span class="text-lg font-bold w-8 text-center">{{
                  item.qty
                }}</span>
                <button
                  @click="incrementQty(item.id, item.qty)"
                  class="p-2 bg-primary-light/10 hover:bg-primary-light/20 rounded-lg transition-colors"
                >
                  <Plus :size="16" class="text-primary" />
                </button>
              </div>

              <!-- Subtotal -->
              <div class="text-right">
                <p class="text-xs text-gray-500 mb-1">Subtotal</p>
                <p class="text-lg font-bold text-gray-800">
                  Rp {{ formatPrice(item.subtotal) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        v-if="cart.itemCount > 0"
        class="border-t border-gray-200 p-6 bg-gray-50"
      >
        <!-- Total -->
        <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <span class="text-lg font-bold text-gray-800">Total</span>
          <span class="text-2xl font-bold text-primary">
            Rp {{ formatPrice(cart.totalPrice) }}
          </span>
        </div>

        <!-- Clear Cart Button -->
        <button
          @click="clearCart"
          class="w-full mb-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Kosongkan Keranjang
        </button>

        <!-- Checkout Button -->
        <button
          @click="handleCheckout"
          class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
            />
          </svg>
          <span>Checkout via WhatsApp</span>
        </button>
      </div>
    </div>
  </transition>
</template>
