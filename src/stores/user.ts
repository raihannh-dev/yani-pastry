import { defineStore } from "pinia";

interface UserProfile {
  name: string;
  address: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    profile: JSON.parse(
      localStorage.getItem("userProfile") || "null"
    ) as UserProfile | null,
    isProfileModalOpen: false,
  }),

  getters: {
    hasProfile(state): boolean {
      return !!(state.profile && state.profile.name && state.profile.address);
    },
  },

  actions: {
    setProfile(name: string, address: string) {
      this.profile = { name, address };
      this.sync();
    },

    clearProfile() {
      this.profile = null;
      this.sync();
    },

    sync() {
      localStorage.setItem("userProfile", JSON.stringify(this.profile));
    },

    openProfileModal() {
      this.isProfileModalOpen = true;
    },

    closeProfileModal() {
      this.isProfileModalOpen = false;
    },
  },
});
