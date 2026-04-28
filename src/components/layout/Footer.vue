<script setup lang="ts">
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-vue-next";
import { settings } from "../../config/settings";
</script>

<template>
  <footer class="bg-gradient-to-br from-primary-light/10 to-white pt-16 pb-8 mt-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <!-- Business Info -->
        <div>
          <h3
            class="text-2xl font-bold text-primary mb-4"
          >
            🧁 {{ settings.shop.name }}
          </h3>
          <p class="text-gray-600 mb-4">{{ settings.shop.description }}</p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold text-gray-800 mb-4 text-lg">Get In Touch</h4>
          <div class="space-y-2 text-gray-600">
            <p>{{ settings.shop.address }}</p>
            <p>{{ settings.shop.phone }}</p>
            <p>{{ settings.shop.email }}</p>
            <p class="text-sm">{{ settings.shop.operationalHours }}</p>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="font-bold text-gray-800 mb-4 text-lg">Follow Us</h4>
          <div class="flex gap-3">
            <a
              :href="settings.social.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Facebook :size="20" class="text-blue-600" />
            </a>
            <a
              :href="settings.social.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Instagram :size="20" class="text-primary" />
            </a>
            <a
              :href="settings.social.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <MessageCircle :size="20" class="text-green-600" />
            </a>
            <a
              :href="settings.social.youtube"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Youtube :size="20" class="text-red-600" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm"
      >
        <p>© {{ new Date().getFullYear() }} {{ settings.shop.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
