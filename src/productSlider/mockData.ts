const mockImgUrl = `${import.meta.env.BASE_URL}/products/mockItem.webp`
const externalImgUrl =
  "https://img.magnific.com/premium-photo/stationery-objects-mini-supermarket-cart-background_488220-3565.jpg"

export const products = [
  {
    id: 1,
    title: "Блокнот A5",
    image: externalImgUrl,
  },
  { id: 2, title: "Ручка гелевая", image: mockImgUrl },
  {
    id: 4,
    title: "Линейка 15 см",
    image: externalImgUrl,
  },
  { id: 5, title: "Маркеры", image: mockImgUrl },
  { id: 6, title: "Степлер", image: externalImgUrl },
  {
    id: 7,
    title: "Линейка 15 см",
    image: mockImgUrl,
  },
  { id: 8, title: "Маркеры", image: externalImgUrl },
  { id: 9, title: "Степлер", image: mockImgUrl },
  { id: 10, title: "Ластик", image: externalImgUrl },
]
