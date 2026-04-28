<script setup lang="ts">
import HeroSection from "../components/sections/HeroSection.vue";
import NewsletterSection from "../components/sections/NewsletterSection.vue";
import ProductCard from "../components/ProductCard.vue";
import { products } from "../data/products";
</script>

<template>
  <div class="home overflow-x-hidden">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Best Sales / Products Section -->
    <section id="products" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Best Sales
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Koleksi kue kering pilihan terbaik kami dengan kualitas premium dan
            rasa yang lezat
          </p>
        </div>

        <!-- Products Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <NewsletterSection />
  </div>
</template>
