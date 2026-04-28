<script setup lang="ts">
import { settings } from "../config/settings";
import { MapPin, Phone, Mail, Clock } from "lucide-vue-next";
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert("Mohon lengkapi semua field");
    return;
  }

  // Send message via WhatsApp
  const message = `Halo, saya ${formData.value.name}%0A%0AEmail: ${formData.value.email}%0A%0APesan: ${formData.value.message}`;
  const whatsappUrl = `https://wa.me/${settings.whatsapp.phone}?text=${message}`;
  
  window.open(whatsappUrl, "_blank");
  
  // Reset form
  formData.value = { name: "", email: "", message: "" };
};
</script>

<template>
  <div class="contact">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-primary-light/20 via-primary-light/5 to-white py-20"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
          <p class="text-xl text-gray-600">
            Punya pertanyaan? Kami siap membantu Anda!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Kirim Pesan
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Nama
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Informasi Kontak
            </h2>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-full flex items-center justify-center"
                >
                  <MapPin :size="24" class="text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Alamat</h3>
                  <p class="text-gray-600">{{ settings.shop.address }}</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-full flex items-center justify-center"
                >
                  <Phone :size="24" class="text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Telepon</h3>
                  <a
                    :href="`tel:${settings.shop.phone}`"
                    class="text-primary hover:underline"
                  >
                    {{ settings.shop.phone }}
                  </a>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-full flex items-center justify-center"
                >
                  <Mail :size="24" class="text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                  <a
                    :href="`mailto:${settings.shop.email}`"
                    class="text-primary hover:underline"
                  >
                    {{ settings.shop.email }}
                  </a>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-full flex items-center justify-center"
                >
                  <Clock :size="24" class="text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Jam Operasional</h3>
                  <p class="text-gray-600">
                    {{ settings.shop.operationalHours }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
