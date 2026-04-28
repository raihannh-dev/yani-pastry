<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section
    class="relative bg-neutral-950 overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center font-sans"
  >
    <!-- Soft spotlight lighting effects -->
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div class="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-neutral-800/40 rounded-full blur-[100px] md:blur-[140px] mix-blend-screen"></div>
    </div>

    <!-- Additional subtle warm spotlight -->
    <div class="absolute top-0 right-0 w-full max-w-[800px] h-[600px] bg-emerald-900/20 rounded-[100%] blur-[120px] mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

    <div class="container relative z-10 mx-auto px-6 py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div class="space-y-4">
            <span class="inline-block text-emerald-500/90 tracking-[0.25em] uppercase text-xs font-semibold pb-2 border-b border-emerald-500/30">Premium Quality</span>
            <h1
              class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.1] font-light"
              style="font-family: 'Playfair Display', 'Cormorant Garamond', serif;"
            >
              Indulgence in <br />
              <span class="italic text-neutral-300">Every Bite</span>
            </h1>
          </div>
          
          <p class="text-lg sm:text-xl text-neutral-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the pinnacle of culinary artistry. Our handcrafted cookies are baked to perfection, offering a symphony of rich textures and exclusive flavors.
          </p>

          <!-- CTA Button -->
          <div class="pt-8 flex justify-center lg:justify-start">
            <a
              href="#products"
              class="group inline-flex items-center gap-4 bg-white hover:bg-neutral-200 text-neutral-950 font-medium py-4 px-10 transition-all duration-500 uppercase tracking-[0.15em] text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <span>Shop Collection</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative order-1 lg:order-2 flex justify-center">
          <div class="relative z-10 w-full max-w-md lg:max-w-lg aspect-[4/5] bg-neutral-900 p-2 shadow-2xl">
            <div class="w-full h-full relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>
              <img
                src="/images/premium-cookies-hero.png"
                alt="Luxurious Premium Cookies"
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s] ease-out"
              />
            </div>
            <!-- Corner Accents -->
            <div class="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50"></div>
            <div class="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-500/50"></div>
            <div class="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-500/50"></div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-500/50"></div>
          </div>
          
          <!-- Decorative abstract frame -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 z-0 hidden lg:block pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: Import Playfair Display if not globally available, to ensure the elegant serif look works */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
</style>
