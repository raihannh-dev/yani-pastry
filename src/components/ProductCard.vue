<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import type { Product } from "../data/products";
import { useCartStore } from "../stores/cart";
import { useUserStore } from "../stores/user";
import { useWhatsapp } from "../composables/useWhatsapp";

const props = defineProps<{
  product: Product;
}>();

const cart = useCartStore();
const userStore = useUserStore();
const { formatPrice } = useWhatsapp();

const addToCart = () => {
  // Validate user profile before adding to cart
  if (!userStore.hasProfile) {
    alert(
      "Silakan lengkapi data pribadi Anda terlebih dahulu (Nama dan Alamat) dengan klik icon profil di header."
    );
    userStore.openProfileModal();
    return;
  }

  cart.addToCart(props.product.id);
};
</script>

<template>
  <div
    class="product-card group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
    <div class="relative overflow-hidden aspect-square">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>

    <div class="p-5">
      <h3 class="text-lg font-bold text-gray-800 mb-2">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mb-3 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-primary font-bold text-xl">
            Rp {{ formatPrice(product.price) }}
          </p>
          <p class="text-xs text-gray-500">{{ product.weight }}</p>
        </div>
      </div>

      <button
        @click="addToCart"
        class="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-95"
      >
        <ShoppingCart :size="18" />
        <span>Tambah ke Keranjang</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
