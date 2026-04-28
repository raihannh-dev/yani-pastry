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
    class="product-card group relative bg-white/5 border border-neutral-200/50 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-all duration-500 font-sans"
  >
    <div class="relative overflow-hidden aspect-[4/5] bg-neutral-100">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
      
      <!-- Quick Add Button Overlay -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10 w-3/4">
        <button
          @click="addToCart"
          class="w-full bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-medium py-3 px-4 flex items-center justify-center gap-2 transition-colors duration-300 uppercase tracking-widest shadow-xl"
        >
          <ShoppingCart :size="14" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>

    <div class="p-6 text-center">
      <h3 
        class="text-xl font-light text-neutral-900 mb-2 truncate"
        style="font-family: 'Playfair Display', 'Cormorant Garamond', serif;"
      >{{ product.name }}</h3>
      
      <p class="text-sm text-neutral-500 mb-4 line-clamp-2 font-light">
        {{ product.description }}
      </p>

      <div class="flex flex-col items-center justify-center gap-1">
        <p class="text-emerald-800 font-medium tracking-wide">
          Rp {{ formatPrice(product.price) }}
        </p>
        <p class="text-xs text-neutral-400 uppercase tracking-widest">{{ product.weight }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
