<script setup lang="ts">
import { X, User } from "lucide-vue-next";
import { ref, watch } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const formData = ref({
  name: userStore.profile?.name || "",
  address: userStore.profile?.address || "",
});

// Watch for store changes to update form
watch(
  () => userStore.profile,
  (newProfile) => {
    if (newProfile) {
      formData.value.name = newProfile.name;
      formData.value.address = newProfile.address;
    }
  }
);

const closeModal = () => {
  userStore.closeProfileModal();
};

const handleSubmit = () => {
  if (!formData.value.name.trim() || !formData.value.address.trim()) {
    alert("Mohon lengkapi nama dan alamat Anda");
    return;
  }

  userStore.setProfile(formData.value.name.trim(), formData.value.address.trim());
  closeModal();
};

const handleClearProfile = () => {
  if (confirm("Yakin ingin menghapus data profil?")) {
    userStore.clearProfile();
    formData.value = { name: "", address: "" };
  }
};
</script>

<template>
  <!-- Overlay -->
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="userStore.isProfileModalOpen"
      @click="closeModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    ></div>
  </transition>

  <!-- Modal -->
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="userStore.isProfileModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto"
        @click.stop
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-6 border-b border-gray-200 bg-primary rounded-t-2xl"
        >
          <h2 class="text-2xl font-bold text-white flex items-center gap-2">
            <User :size="28" />
            <span>Data Pribadi</span>
          </h2>
          <button
            @click="closeModal"
            class="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X :size="24" class="text-white" />
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
          <div>
            <label for="name" class="block text-gray-700 font-semibold mb-2">
              Nama Lengkap <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label for="address" class="block text-gray-700 font-semibold mb-2">
              Alamat Lengkap <span class="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              v-model="formData.address"
              rows="3"
              placeholder="Masukkan alamat lengkap Anda (jalan, kecamatan, kota)"
              class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
              required
            ></textarea>
          </div>

          <p class="text-sm text-gray-600">
            <span class="text-red-500">*</span> Data ini akan digunakan untuk
            pemesanan via WhatsApp
          </p>

          <!-- Buttons -->
          <div class="flex gap-3">
            <button
              type="submit"
              class="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Simpan Data
            </button>
            <button
              v-if="userStore.hasProfile"
              type="button"
              @click="handleClearProfile"
              class="px-6 py-3 bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 font-semibold rounded-xl transition-colors"
            >
              Hapus
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
