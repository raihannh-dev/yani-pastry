import { defineStore } from "pinia";
import { products } from "../data/products";

interface CartItem {
  productId: number;
  qty: number;
}

interface DetailedCartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  qty: number;
  subtotal: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
    isCartOpen: false,
  }),

  getters: {
    detailedItems(state): DetailedCartItem[] {
      return state.items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return {
            ...product,
            qty: item.qty,
            subtotal: product.price * item.qty,
          };
        })
        .filter((item): item is DetailedCartItem => item !== null);
    },

    totalPrice(): number {
      return this.detailedItems.reduce((sum, item) => sum + item.subtotal, 0);
    },

    itemCount(): number {
      return this.items.reduce((sum, item) => sum + item.qty, 0);
    },
  },

  actions: {
    addToCart(productId: number) {
      const item = this.items.find((i) => i.productId === productId);
      if (item) {
        item.qty++;
      } else {
        this.items.push({ productId, qty: 1 });
      }
      this.sync();
    },

    updateQty(productId: number, qty: number) {
      const item = this.items.find((i) => i.productId === productId);
      if (item) {
        if (qty <= 0) {
          this.removeItem(productId);
        } else {
          item.qty = qty;
          this.sync();
        }
      }
    },

    removeItem(productId: number) {
      this.items = this.items.filter((i) => i.productId !== productId);
      this.sync();
    },

    clearCart() {
      this.items = [];
      this.sync();
    },

    sync() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    validateCart() {
      this.items = this.items.filter((item) =>
        products.some((p) => p.id === item.productId)
      );
      this.sync();
    },

    openCart() {
      this.isCartOpen = true;
    },

    closeCart() {
      this.isCartOpen = false;
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
});
