## 🧱 Tech Stack (Vue Version)

**Recommended**

```
Framework : Vue 3
Build     : Vite
State     : Pinia
Styling   : Shadcn Vue
Storage   : localStorage
Checkout  : WhatsApp Click to Chat
```

---

## 📁 Struktur Folder

```
src/
 ├─ stores/
 │   └─ cart.js
 ├─ data/
 │   └─ products.js
 ├─ composables/
 │   └─ useWhatsapp.js
 ├─ views/
 │   └─ Home.vue
 └─ main.js
```

---

## 🧁 Data Produk (SOURCE OF TRUTH)

```js
// src/data/products.js
export const products = [
  {
    id: 1,
    name: "Putri Salju",
    description:
      "Kue kering berbentuk bulat yang di atasnya diselimuti dengan gula halus seperti salju.",
    price: 60000,
  },
  {
    id: 2,
    name: "Fruit Cookies",
    description:
      "Kue kering yang diperkaya dengan potongan buah kering berwarna-warni.",
    price: 70000,
  },
  {
    id: 3,
    name: "Choco Stick",
    description:
      "Kue kering berbentuk stik yang dilapisi cokelat lezat diatasnya.",
    price: 65000,
  },
  {
    id: 4,
    name: "Cornflakes Choco",
    description: "Kue kering yang terbuat dari cornflakes yang diselimuti cokelat.",
    price: 60000,
  },
  {
    id: 5,
    name: "Kastengel",
    description: "Kue kering berbentuk stik dengan tekstur renyah dan rasa gurih dari keju yang melimpah."
    price: 95000,
  },
  {
    id: 6,
    name: "Nastar",
    description: "Kue kering berisi selai nanas dengan tekstur lembut dan lumer di mulut.",
    price: 75000,
  },
];
```

---

## 🛒 Cart Store (Pinia + localStorage)

```js
// src/stores/cart.js
import { defineStore } from "pinia";
import { products } from "../data/products";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart")) || [],
  }),

  getters: {
    detailedItems(state) {
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
        .filter(Boolean);
    },

    totalPrice() {
      return this.detailedItems.reduce((sum, item) => sum + item.subtotal, 0);
    },
  },

  actions: {
    addToCart(productId) {
      const item = this.items.find((i) => i.productId === productId);
      if (item) {
        item.qty++;
      } else {
        this.items.push({ productId, qty: 1 });
      }
      this.sync();
    },

    remove(productId) {
      this.items = this.items.filter((i) => i.productId !== productId);
      this.sync();
    },

    sync() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    validateCart() {
      this.items = this.items.filter((item) =>
        products.some((p) => p.id === item.productId),
      );
      this.sync();
    },
  },
});
```

📌 **Catatan penting**

- Cart **hanya simpan ID + qty**
- Harga selalu diambil dari `products` terbaru
- Kalau produk dihapus → cart otomatis bersih

---

## 🔄 Validasi Cart Saat App Load

```js
// main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useCartStore } from "./stores/cart";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");

const cart = useCartStore();
cart.validateCart();
```

---

## 📲 WhatsApp Checkout

```js
// src/composables/useWhatsapp.js
import { useCartStore } from "../stores/cart";

export function useWhatsapp() {
  const cart = useCartStore();
  const phone = "6281234567890";

  const checkout = () => {
    let message = "Halo kak, saya ingin pesan:%0A";

    cart.detailedItems.forEach((item) => {
      message += `- ${item.name} (${item.qty}x) = Rp ${item.subtotal}%0A`;
    });

    message += `%0ATotal: Rp ${cart.totalPrice}`;

    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  return { checkout };
}
```

---

## 🧠 UX Tambahan (Disarankan)

- Badge kecil:

  > “Harga mengikuti update terbaru”

- Notifikasi kalau cart berubah otomatis
- Disable checkout kalau cart kosong

---

## 🏆 Best Practice Summary

✔ Simpan **ID + qty**
✔ Produk = **single source of truth**
✔ Validasi cart setiap load
✔ Hitung ulang saat checkout
✔ No backend needed (awal)

---

Kalau kamu mau, saya bisa:

- Buatin **versi lebih advanced (diskon, varian rasa)**
- Contoh **UI Home.vue**
- Versi **TypeScript**
- Versi **tanpa Pinia (pure Composition API)**

Tinggal bilang mau lanjut yang mana 🚀
