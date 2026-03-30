const CONFIG = {
    siteName: "FlashCart",
    currency: "KSh",
    colors: {
        primary: "#f68b1e", // Jumia Orange
        secondary: "#282c3f", // Dark Header
        accent: "#e0f2f1", // Light background from image
        text: "#282c3f"
    },
    categories: [
        "Phones & Tablets", "TV & Audio", "Appliances", "Health & Beauty", 
        "Home & Office", "Computing", "Gaming", "Supermarket"
    ],
    // Mock Data for Products
    products: {
        flashSales: [
            { id: 1, name: "28-in-1 multi-function...", price: 399, oldPrice: 1500, discount: 73, img: "https://placehold.co/150x150?text=Tool+Set" },
            { id: 2, name: "TOUPHY Rechargeable...", price: 999, oldPrice: 2500, discount: 60, img: "https://placehold.co/150x150?text=Trimmer" },
            { id: 3, name: "72Pcs Safety Pins S...", price: 201, oldPrice: 600, discount: 66, img: "https://placehold.co/150x150?text=Pins" },
            { id: 4, name: "TMF Casual Pants Ic...", price: 523, oldPrice: 1200, discount: 56, img: "https://placehold.co/150x150?text=Pants" },
            { id: 5, name: "TMF New Sports Q...", price: 469, oldPrice: 1100, discount: 57, img: "https://placehold.co/150x150?text=Shorts" },
            { id: 6, name: "Talking Flash Cards...", price: 853, oldPrice: 1800, discount: 52, img: "https://placehold.co/150x150?text=Cards" },
        ],
        topSelling: [
            { id: 101, name: "5-piece Men's Watc...", price: 535, oldPrice: 1200, discount: 55, img: "https://placehold.co/200x200?text=Watch+Set" },
            { id: 102, name: "MacBook Pro 13' C...", price: 22500, oldPrice: 35000, discount: 35, img: "https://placehold.co/200x200?text=MacBook" },
            { id: 103, name: "ASHANCY 5 in 1...", price: 299, oldPrice: 800, discount: 62, img: "https://placehold.co/200x200?text=Jewelry" },
            { id: 104, name: "Underwear Bra Set...", price: 399, oldPrice: 900, discount: 55, img: "https://placehold.co/200x200?text=Lingerie" },
            { id: 105, name: "56 Coffee-colored...", price: 1742, oldPrice: 3000, discount: 41, img: "https://placehold.co/200x200?text=Coffee+Set" },
            { id: 106, name: "4-piece Men's Watc...", price: 505, oldPrice: 1100, discount: 54, img: "https://placehold.co/200x200?text=Watch" },
        ],
        phones: [
            { id: 201, name: "Redmi 15C by Xiao...", price: 13180, oldPrice: 15000, discount: 12, img: "https://placehold.co/150x200?text=Redmi+15C" },
            { id: 202, name: "Redmi 15C by Xiao...", price: 14450, oldPrice: 16000, discount: 10, img: "https://placehold.co/150x200?text=Redmi+15C" },
            { id: 203, name: "XIAOMI Redmi 15...", price: 17670, oldPrice: 20000, discount: 11, img: "https://placehold.co/150x200?text=Redmi+15" },
            { id: 204, name: "Infinix Hot 60 4G...", price: 18699, oldPrice: 22000, discount: 14, img: "https://placehold.co/150x200?text=Infinix" },
            { id: 205, name: "Infinix Smart 10...", price: 9730, oldPrice: 11000, discount: 11, img: "https://placehold.co/150x200?text=Smart+10" },
            { id: 206, name: "Samsung S26 Ultra", price: 161300, oldPrice: 180000, discount: 10, img: "https://placehold.co/150x200?text=S26+Ultra" },
        ]
    }
};
