<script setup lang="ts">
import { ref } from "vue";

const email = ref(""); 

const handleSubscribe = () => {
  if (!email.value || !email.value.includes("@")) {
    alert("Mohon masukkan email yang valid");
    return;
  }

  // For MVP, just show success message
  // In production, this would integrate with email service like Mailchimp
  alert(`Terima kasih! Email ${email.value} telah berhasil didaftarkan.`);
  email.value = "";
};
</script>

<template>
  <section class="bg-gradient-to-br from-primary-light/20 to-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Our Newsletter
        </h2>
        <p class="text-gray-600 mb-8">
          Daftarkan email Anda dan dapatkan diskon 15% untuk pembelian pertama.
          Jangan khawatir, kami tidak akan spam!
        </p>

        <!-- Email Form -->
        <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4">
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan email Anda"
            class="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            class="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
