
// This file MUST be loaded before api.js and script.js

window.CONFIG = {
    // Site Information
    site: {
        name: "FlashCart Kenyas",
        currency: "KSh",
        currencySymbol: "KSh",
        exchangeRate: 120,
        taxRate: 0.16,
        shippingCost: 200
    },

    // API Configuration
    api: {
        baseUrl: "https://fakestoreapi.com",
        timeout: 10000,
        retryAttempts: 3,
        cacheDuration: 300000
    },

    // Feature Flags
    features: {
        enableAPI: true,
        enableCache: true,
        enableSearch: true,
        enableFilters: true,
        enableWishlist: false
    },

    // UI Settings
    ui: {
        productsPerPage: 10,
        slidesInterval: 5000,
        toastDuration: 3000,
        cartSidebarWidth: 400
    },

    // Categories
    categories: {
        "electronics": {
            name: "Electronics",
            icon: "fa-solid fa-plug"
        },
        "jewelery": {
            name: "Jewelry",
            icon: "fa-solid fa-gem"
        },
        "men's clothing": {
            name: "Men's Fashion",
            icon: "fa-solid fa-shirt"
        },
        "women's clothing": {
            name: "Women's Fashion",
            icon: "fa-solid fa-person-dress"
        }
    },

    // Colors
    colors: {
        primary: "#f68b1e",
        secondary: "#282c3f",
        accent: "#e0f2f1",
        success: "#00a650",
        danger: "#db3d44",
        warning: "#ffc107"
    }
};

// Log to confirm config loaded
console.log('✅ CONFIG loaded successfully:', window.CONFIG.site.name);
