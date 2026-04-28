export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Putri Salju",
    description:
      "Kue kering berbentuk bulat yang di atasnya diselimuti dengan gula halus seperti salju.",
    price: 60000,
    image: "/images/products/putri salju.png",
    weight: "500g",
  },
  {
    id: 2,
    name: "Fruit Cookies",
    description:
      "Kue kering yang diperkaya dengan potongan buah kering berwarna-warni.",
    price: 70000,
    image: "/images/products/fruit cookies.png",
    weight: "500g",
  },
  {
    id: 3,
    name: "Choco Stick",
    description:
      "Kue kering berbentuk stik yang dilapisi cokelat lezat diatasnya.",
    price: 65000,
    image: "/images/products/choco stick.png",
    weight: "500g",
  },
  {
    id: 4,
    name: "Cornflakes Choco",
    description:
      "Kue kering yang terbuat dari cornflakes yang diselimuti cokelat.",
    price: 60000,
    image: "/images/products/cornflakes choco.png",
    weight: "500g",
  },
  {
    id: 5,
    name: "Kastengel",
    description:
      "Kue kering berbentuk stik dengan tekstur renyah dan rasa gurih dari keju yang melimpah.",
    price: 95000,
    image: "/images/products/kastengel.png",
    weight: "500g",
  },
  {
    id: 6,
    name: "Nastar",
    description:
      "Kue kering berisi selai nanas dengan tekstur lembut dan lumer di mulut.",
    price: 75000,
    image: "/images/products/nastar.png",
    weight: "500g",
  },
];
