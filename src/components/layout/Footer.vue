<script setup lang="ts">
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-vue-next";
import { settings } from "../../config/settings";
</script>

<template>
  <footer class="bg-neutral-950 pt-20 pb-10 border-t border-white/10 font-sans">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
        <!-- Business Info -->
        <div>
          <h3
            class="text-2xl lg:text-3xl font-light text-white tracking-widest uppercase mb-6"
            style="font-family: 'Playfair Display', 'Cormorant Garamond', serif;"
          >
            {{ settings.shop.name }}
          </h3>
          <p class="text-neutral-400 leading-relaxed font-light">{{ settings.shop.description }}</p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-medium text-white mb-6 text-sm tracking-widest uppercase">Get In Touch</h4>
          <div class="space-y-4 text-neutral-400 font-light">
            <p>{{ settings.shop.address }}</p>
            <p>{{ settings.shop.phone }}</p>
            <p>{{ settings.shop.email }}</p>
            <p class="text-sm text-neutral-500 pt-2">{{ settings.shop.operationalHours }}</p>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="font-medium text-white mb-6 text-sm tracking-widest uppercase">Follow Us</h4>
          <div class="flex gap-4">
            <a
              :href="settings.social.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white/5 border border-white/10 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 rounded-sm transition-all duration-300"
            >
              <Facebook :size="20" stroke-width="1.5" />
            </a>
            <a
              :href="settings.social.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white/5 border border-white/10 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 rounded-sm transition-all duration-300"
            >
              <Instagram :size="20" stroke-width="1.5" />
            </a>
            <a
              :href="settings.social.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white/5 border border-white/10 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 rounded-sm transition-all duration-300"
            >
              <MessageCircle :size="20" stroke-width="1.5" />
            </a>
            <a
              :href="settings.social.youtube"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-white/5 border border-white/10 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 rounded-sm transition-all duration-300"
            >
              <Youtube :size="20" stroke-width="1.5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-light tracking-wide"
      >
        <p>© {{ new Date().getFullYear() }} {{ settings.shop.name }}. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-emerald-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
