<script setup lang="ts">
import { ref } from "vue";

const email = ref(""); 

const handleSubscribe = () => {
  if (!email.value || !email.value.includes("@")) {
    alert("Mohon masukkan email yang valid");
    return;
  }

  // For MVP, just show success message
  alert(`Terima kasih! Email ${email.value} telah berhasil didaftarkan.`);
  email.value = "";
};
</script>

<template>
  <section class="relative bg-neutral-950 py-24 border-t border-white/5 overflow-hidden font-sans">
    <!-- Spotlight Effect -->
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div class="w-[500px] h-[500px] bg-emerald-900/15 rounded-full blur-[120px] mix-blend-screen"></div>
    </div>

    <div class="container relative z-10 mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-sm p-12 lg:p-16 rounded-sm">
        <h2 
          class="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight"
          style="font-family: 'Playfair Display', 'Cormorant Garamond', serif;"
        >
          Join Our <span class="italic text-emerald-400">Exclusive</span> Circle
        </h2>
        <p class="text-neutral-400 mb-10 text-lg font-light leading-relaxed">
          Daftarkan email Anda dan dapatkan diskon 15% untuk pembelian pertama.
          Jadilah yang pertama menikmati koleksi premium kami.
        </p>

        <!-- Email Form -->
        <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            class="flex-1 px-6 py-4 bg-neutral-900/50 border border-white/20 text-white placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all rounded-sm font-light tracking-wide"
            required
          />
          <button
            type="submit"
            class="bg-white hover:bg-neutral-200 text-neutral-950 font-medium py-4 px-10 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
