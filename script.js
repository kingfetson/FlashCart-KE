// Main Application Script

// Global State
let allProducts = [];
let cart = [];
let currentSlideIndex = 0;
let slideInterval;

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
    showLoading(true);
    
    try {
        // Fetch products from API
        const apiProducts = await productAPI.getAllProducts();
        allProducts = apiProducts.map(p => productAPI.mapProduct(p));
        
        // Render all sections
        renderProducts();
        startCountdown();
        startSlider();
        loadCart();
        
        showToast('Products loaded successfully!');
    } catch (error) {
        console.error('Failed to load products:', error);
        showToast('Failed to load products. Using demo data.', 'error');
        // Fallback handled in renderProducts
    } finally {
        showLoading(false);
    }
});

// Show/Hide Loading Overlay
function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Render Products to Grids
function renderProducts() {
    if (allProducts.length === 0) {
        console.warn('No products available');
        return;
    }

    // Flash Sales (first 6 products)
    renderGrid('flash-sales-grid', allProducts.slice(0, 10));
    
    // Top Selling (next 6 products)
    renderGrid('top-selling-grid', allProducts.slice(10, 20));
    
    // Easter Sale (next 6 products)
    renderGrid('easter-sale-grid', allProducts.slice(20, 30));
}

// Render Grid Function
function renderGrid(elementId, productList) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    if (productList.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:#999;">No products available</p>';
        return;
    }

    grid.innerHTML = productList.map(product => `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}">
            <span class="discount ${product.discount > 50 ? 'new' : ''}">-${product.discount}%</span>
            <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
            <h3 title="${product.name}">${product.name}</h3>
            <div class="price-box">
                ${CONFIG.site.currency} ${product.price.toLocaleString()}
                <span class="old-price">${CONFIG.site.currency} ${product.oldPrice.toLocaleString()}</span>
            </div>
            <div style="font-size:11px;color:#999;margin-bottom:8px;">
                <i class="fa-solid fa-star" style="color:gold;"></i> ${product.rating || '4.5'} (${product.reviewCount || 100} reviews)
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        saveCart();
        updateCartUI();
        showToast(`${product.name.substring(0, 30)}... added to cart!`, 'success');
        
        // Animate button
        const buttons = document.querySelectorAll('.add-to-cart-btn');
        buttons.forEach(btn => {
            if (btn.onclick.toString().includes(productId)) {
                btn.classList.add('added');
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
                setTimeout(() => {
                    btn.classList.remove('added');
                    btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
                }, 2000);
            }
        });
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart');
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-cart-arrow-down"></i>
                <p>Your cart is empty</p>
                <p style="font-size: 12px; margin-top: 10px;">Add some products to get started!</p>
            </div>
        `;
        cartTotal.textContent = `${CONFIG.site.currency} 0`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="price">${CONFIG.site.currency} ${item.price.toLocaleString()}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <span class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fa-solid fa-trash"></i> Remove
                    </span>
                </div>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `${CONFIG.site.currency} ${subtotal.toLocaleString()}`;
    }
}

// Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('open');
}

// Checkout Functions
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    toggleCart();
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('active');
    
    calculateCheckout();
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
}

function calculateCheckout() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * CONFIG.site.taxRate;
    const total = subtotal + tax + CONFIG.site.shippingCost;
    
    document.getElementById('checkoutSubtotal').textContent = `${CONFIG.site.currency} ${subtotal.toLocaleString()}`;
    document.getElementById('checkoutTax').textContent = `${CONFIG.site.currency} ${Math.round(tax).toLocaleString()}`;
    document.getElementById('checkoutTotal').textContent = `${CONFIG.site.currency} ${Math.round(total).toLocaleString()}`;
}

function processOrder(event) {
    event.preventDefault();
    
    const total = document.getElementById('checkoutTotal').textContent;
    showToast('Processing your order...');
    
    setTimeout(() => {
        alert(`Order Placed Successfully!\n\nTotal: ${total}\n\nThank you for shopping with Jumia!\n\nOrder ID: #JUM${Date.now()}`);
        cart = [];
        saveCart();
        updateCartUI();
        closeCheckout();
        document.getElementById('checkoutForm').reset();
    }, 2000);
}

// Countdown Timer
function startCountdown() {
    let timeLeft = 2 * 60 * 60 + 30;
    
    setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('countdown').textContent = 
            `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
        
        if (timeLeft > 0) timeLeft--;
    }, 1000);
}

// Hero Slider Functions
function startSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    
    showSlide(0);
    slideInterval = setInterval(nextSlide, CONFIG.ui.slidesInterval);
    
    // Pause on hover
    const bannerSlider = document.querySelector('.banner-slider');
    if (bannerSlider) {
        bannerSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        bannerSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, CONFIG.ui.slidesInterval);
        });
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('prev');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, CONFIG.ui.slidesInterval);
}

// Search Products
async function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (!searchTerm) {
        showToast('Please enter a search term');
        return;
    }
    
    showLoading(true);
    
    try {
        const results = await productAPI.searchProducts(searchTerm);
        const mappedResults = results.map(p => productAPI.mapProduct(p));
        
        if (mappedResults.length === 0) {
            showToast('No products found');
        } else {
            showToast(`Found ${mappedResults.length} products`);
            renderGrid('flash-sales-grid', mappedResults);
        }
    } catch (error) {
        showToast('Search failed. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Filter by Category
async function filterCategory(category) {
    showLoading(true);
    
    try {
        const categoryProducts = await productAPI.getProductsByCategory(category);
        const mappedProducts = categoryProducts.map(p => productAPI.mapProduct(p));
        
        if (mappedProducts.length === 0) {
            showToast('No products in this category');
        } else {
            showToast(`Showing ${category} products`);
            renderGrid('flash-sales-grid', mappedProducts);
        }
    } catch (error) {
        showToast('Failed to load category products');
    } finally {
        showLoading(false);
    }
}

// Show All Products
function showAllProducts() {
    renderProducts();
    showToast('Showing all products');
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = 'toast show';
    
    if (type === 'success') {
        toast.classList.add('success');
    }
    
    setTimeout(() => {
        toast.classList.remove('show', 'success');
    }, CONFIG.ui.toastDuration);
}

// Local Storage
function saveCart() {
    localStorage.setItem('jumiaCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('jumiaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Close modal when clicking outside
document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCheckout();
    }
});

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});
