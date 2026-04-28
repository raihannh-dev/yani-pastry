<script setup lang="ts">
import { settings } from "../config/settings";
import { CheckCircle } from "lucide-vue-next";
</script>

<template>
  <div class="about">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-primary-light/20 via-primary-light/5 to-white py-20"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-800 mb-6">
            Tentang
            <span
              class="text-primary"
            >
              {{ settings.shop.name }}
            </span>
          </h1>
          <p class="text-xl text-gray-600">
            {{ settings.shop.tagline }}
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Cerita Kami</h2>
          <div class="prose prose-lg">
            <p class="text-gray-700 mb-6">
              Yani Pastry adalah usaha kue kering yang berdedikasi untuk
              menghadirkan cita rasa tradisional Indonesia dengan sentuhan
              modern. Didirikan dengan passion untuk membuat kue berkualitas
              tinggi, kami menggunakan bahan-bahan pilihan dan resep yang telah
              diwariskan turun-temurun.
            </p>
            <p class="text-gray-700 mb-6">
              Setiap kue dibuat dengan penuh perhatian dan kasih sayang, memastikan
              bahwa setiap gigitan memberikan pengalaman yang tak terlupakan.
              Dari Kastengel yang gurih hingga Nastar yang manis, kami bangga
              menyajikan berbagai pilihan kue kering untuk setiap momen spesial
              Anda.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">
            Mengapa Memilih Kami?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <CheckCircle :size="32" class="text-primary" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800 mb-2">
                  Bahan Berkualitas Premium
                </h3>
                <p class="text-gray-600">
                  Kami hanya menggunakan bahan-bahan pilihan terbaik untuk
                  menghasilkan kue dengan rasa yang sempurna.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <CheckCircle :size="32" class="text-primary" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800 mb-2">
                  Resep Tradisional
                </h3>
                <p class="text-gray-600">
                  Resep yang telah diwariskan turun-temurun, mempertahankan
                  autentisitas rasa Indonesia.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <CheckCircle :size="32" class="text-primary" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800 mb-2">
                  Selalu Fresh
                </h3>
                <p class="text-gray-600">
                  Setiap kue dibuat fresh setiap hari untuk menjaga kesegaran
                  dan kualitas rasa.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <CheckCircle :size="32" class="text-primary" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800 mb-2">
                  Kemasan Menarik
                </h3>
                <p class="text-gray-600">
                  Dikemas dengan cantik dan aman, cocok untuk hadiah atau
                  disimpan di rumah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
