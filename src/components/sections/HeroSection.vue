<script setup lang="ts">
import { Phone } from "lucide-vue-next";
import { settings } from "../../config/settings";
</script>

<template>
  <section
    class="relative bg-gradient-to-br from-primary-light/20 via-primary-light/5 to-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center"
  >
    <div class="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-6 lg:space-y-8">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight"
          >
            Selamat Datang di
            <span
              class="block text-primary mt-2"
            >
              {{ settings.shop.name }}
            </span>
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium">
            {{ settings.shop.tagline }}
          </p>
          <p class="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            Nikmati berbagai macam kue kering premium dengan kualitas terbaik
            dan cita rasa yang lezat. Sempurna untuk acara spesial atau sekadar
            cemilan keluarga.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#products"
              class="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 text-lg"
            >
              Lihat Menu
            </a>
            <a
              :href="`tel:${settings.shop.phone}`"
              class="bg-white border-2 border-primary text-primary hover:bg-primary-light/10 font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 text-lg"
            >
              <Phone :size="22" />
              <span>{{ settings.shop.phone }}</span>
            </a>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative order-first lg:order-last">
          <div class="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img
              src="/images/hero-cake.png"
              alt="Yani Pastry Featured Cake"
              class="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute -top-4 -right-4 w-64 h-64 lg:w-72 lg:h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          ></div>
          <div
            class="absolute -bottom-8 left-10 lg:left-20 w-64 h-64 lg:w-72 lg:h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          ></div>
        </div>
      </div>
    </div>

    <!-- Wave Divider -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="w-full h-auto"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
