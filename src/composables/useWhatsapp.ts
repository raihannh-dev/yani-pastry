import { useCartStore } from "../stores/cart";
import { useUserStore } from "../stores/user";
import { settings } from "../config/settings";

export function useWhatsapp() {
  const cart = useCartStore();
  const userStore = useUserStore();
  const phone = settings.whatsapp.phone;

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  const checkout = () => {
    if (cart.itemCount === 0) {
      alert("Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.");
      return;
    }

    if (!userStore.hasProfile) {
      alert("Silakan lengkapi data pribadi Anda terlebih dahulu.");
      userStore.openProfileModal();
      return;
    }

    // Start message with greeting
    let message = `Halo kak 👋%0A%0A`;
    message += `Saya ingin memesan:%0A`;

    // Add cart items
    cart.detailedItems.forEach((item) => {
      message += `- ${item.name} (${item.qty} pcs)%0A`;
    });

    // Add total
    message += `%0A*Total: Rp ${formatPrice(cart.totalPrice)}*%0A%0A`;

    // Add user details
    message += `*Nama:* ${userStore.profile!.name}%0A`;
    message += `*Alamat:* ${userStore.profile!.address}%0A%0A`;

    // Add closing
    message += `Mohon info ketersediaan & ongkir ya kak.%0A`;
    message += `Terima kasih 🙏`;

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return { checkout, formatPrice };
}
