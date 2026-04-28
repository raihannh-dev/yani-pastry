<script setup lang="ts">
import { products } from "../data/products";
import ProductCard from "../components/ProductCard.vue";
</script>

<template>
  <div class="menu-page">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-primary-light/20 via-primary-light/5 to-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-800 mb-6">
            Menu
            <span class="text-primary">Kami</span>
          </h1>
          <p class="text-xl text-gray-600">
            Pilih kue kering favorit Anda dan pesan sekarang!
          </p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-page {
  min-height: calc(100vh - 80px);
}
</style>
