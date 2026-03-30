// Configuration File for Jumia Clone

const CONFIG = {
    // Site Information
    site: {
        name: "FlashCart-KE",
        currency: "KSh",
        currencySymbol: "KSh",
        exchangeRate: 120, // USD to KSh conversion
        taxRate: 0.16, // 16% VAT
        shippingCost: 200
    },

    // API Configuration
    api: {
        baseUrl: "https://fakestoreapi.com",
        timeout: 10000, // 10 seconds timeout
        retryAttempts: 3,
        cacheDuration: 300000 // 5 minutes cache
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
        productsPerPage: 6,
        slidesInterval: 5000, // 5 seconds
        toastDuration: 3000,
        cartSidebarWidth: 400
    },

    // Categories Mapping
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

    // Color Scheme
    colors: {
        primary: "#f68b1e",
        secondary: "#282c3f",
        accent: "#e0f2f1",
        success: "#00a650",
        danger: "#db3d44",
        warning: "#ffc107"
    }
};

// Export for module systems (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
