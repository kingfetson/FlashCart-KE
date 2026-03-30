// API Handler for FakeStoreAPI

class ProductAPI {
    constructor() {
        this.baseUrl = CONFIG.api.baseUrl;
        this.timeout = CONFIG.api.timeout;
        this.cache = new Map();
        this.cacheDuration = CONFIG.api.cacheDuration;
    }

    // Fetch with timeout
    async fetchWithTimeout(url, options = {}) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            });
            clearTimeout(id);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            clearTimeout(id);
            throw error;
        }
    }

    // Get from cache
    getFromCache(key) {
        if (!CONFIG.features.enableCache) return null;

        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
            console.log('📦 Loaded from cache:', key);
            return cached.data;
        }
        this.cache.delete(key);
        return null;
    }

    // Save to cache
    saveToCache(key, data) {
        if (!CONFIG.features.enableCache) return;

        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
        console.log('💾 Saved to cache:', key);
    }

    // Get all products
    async getAllProducts() {
        const cacheKey = 'all_products';
        const cached = this.getFromCache(cacheKey);

        if (cached) {
            return cached;
        }

        try {
            const products = await this.fetchWithTimeout(`${this.baseUrl}/products`);
            this.saveToCache(cacheKey, products);
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    // Get products by category
    async getProductsByCategory(category) {
        const cacheKey = `category_${category}`;
        const cached = this.getFromCache(cacheKey);

        if (cached) {
            return cached;
        }

        try {
            const products = await this.fetchWithTimeout(
                `${this.baseUrl}/products/category/${category}`
            );
            this.saveToCache(cacheKey, products);
            return products;
        } catch (error) {
            console.error(`Error fetching ${category} products:`, error);
            throw error;
        }
    }

    // Get single product
    async getProductById(id) {
        const cacheKey = `product_${id}`;
        const cached = this.getFromCache(cacheKey);

        if (cached) {
            return cached;
        }

        try {
            const product = await this.fetchWithTimeout(`${this.baseUrl}/products/${id}`);
            this.saveToCache(cacheKey, product);
            return product;
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    }

    // Search products
    async searchProducts(query) {
        try {
            const allProducts = await this.getAllProducts();
            const queryLower = query.toLowerCase();
            
            return allProducts.filter(product => 
                product.title.toLowerCase().includes(queryLower) ||
                product.description.toLowerCase().includes(queryLower) ||
                product.category.toLowerCase().includes(queryLower)
            );
        } catch (error) {
            console.error('Error searching products:', error);
            throw error;
        }
    }

    // Get all categories
    async getCategories() {
        const cacheKey = 'categories';
        const cached = this.getFromCache(cacheKey);

        if (cached) {
            return cached;
        }

        try {
            const categories = await this.fetchWithTimeout(`${this.baseUrl}/products/categories`);
            this.saveToCache(cacheKey, categories);
            return categories;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }

    // Map API product to our format
    mapProduct(apiProduct, sectionMultiplier = 1) {
        const basePrice = apiProduct.price * CONFIG.site.exchangeRate;
        const discount = Math.floor(Math.random() * 30) + 10;

        return {
            id: apiProduct.id * sectionMultiplier,
            name: apiProduct.title,
            description: apiProduct.description,
            price: Math.round(basePrice),
            oldPrice: Math.round(basePrice * 1.3),
            discount: discount,
            img: apiProduct.image,
            category: apiProduct.category,
            rating: apiProduct.rating.rate,
            reviewCount: apiProduct.rating.count
        };
    }

    // Clear cache
    clearCache() {
        this.cache.clear();
        localStorage.removeItem('jumiaCache');
        console.log('🗑️ Cache cleared');
    }

    // Save cache to localStorage
    persistCache() {
        if (!CONFIG.features.enableCache) return;

        const cacheData = Array.from(this.cache.entries());
        localStorage.setItem('jumiaCache', JSON.stringify(cacheData));
    }

    // Load cache from localStorage
    loadCache() {
        if (!CONFIG.features.enableCache) return;

        const cached = localStorage.getItem('jumiaCache');
        if (cached) {
            const cacheData = JSON.parse(cached);
            cacheData.forEach(([key, value]) => {
                this.cache.set(key, value);
            });
            console.log('📥 Loaded cache from localStorage');
        }
    }
}

// Create global API instance
const productAPI = new ProductAPI();

// Auto-load cache on page load
productAPI.loadCache();

// Save cache before page unload
window.addEventListener('beforeunload', () => {
    productAPI.persistCache();
});
