// Product Data with Real Images
const products = {
    flashSales: [
        { id: 1, name: "28-in-1 Multi-function Tool Set", price: 399, oldPrice: 1500, discount: 73, img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=300&h=300&fit=crop", category: "tools" },
        { id: 2, name: "Rechargeable Hair Trimmer", price: 999, oldPrice: 2500, discount: 60, img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=300&fit=crop", category: "beauty" },
        { id: 3, name: "72Pcs Safety Pins Set", price: 201, oldPrice: 600, discount: 66, img: "https://images.unsplash.com/photo-1606850969191-d37135400f54?w=300&h=300&fit=crop", category: "home" },
        { id: 4, name: "Casual Pants Ice Blue", price: 523, oldPrice: 1200, discount: 56, img: "https://images.unsplash.com/photo-1473966968600-fa99592143ef?w=300&h=300&fit=crop", category: "fashion" },
        { id: 5, name: "Sports Shorts Quick Dry", price: 469, oldPrice: 1100, discount: 57, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop", category: "fashion" },
        { id: 6, name: "Talking Flash Cards Kids", price: 853, oldPrice: 1800, discount: 52, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop", category: "kids" }
    ],
    topSelling: [
        { id: 101, name: "5-piece Men's Watch Set", price: 535, oldPrice: 1200, discount: 55, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop", category: "fashion" },
        { id: 102, name: "MacBook Pro 13' Core i5", price: 22500, oldPrice: 35000, discount: 35, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop", category: "computing" },
        { id: 103, name: "5 in 1 Jewelry Set Gold", price: 299, oldPrice: 800, discount: 62, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop", category: "fashion" },
        { id: 104, name: "Underwear Bra Set Lace", price: 399, oldPrice: 900, discount: 55, img: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?w=300&h=300&fit=crop", category: "fashion" },
        { id: 105, name: "56 Coffee-colored Set", price: 1742, oldPrice: 3000, discount: 41, img: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop", category: "home" },
        { id: 106, name: "4-piece Men's Watch", price: 505, oldPrice: 1100, discount: 54, img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&h=300&fit=crop", category: "fashion" }
    ],
    easterSale: [
        { id: 201, name: "QUBI CBT45 43 Inch TV", price: 17810, oldPrice: 21999, discount: 19, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", category: "tv" },
        { id: 202, name: "LESAI Dual SIM Feature Phone", price: 740, oldPrice: 876, discount: 16, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 203, name: "Vision VTE4002 Smartphone", price: 17099, oldPrice: 26999, discount: 37, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 204, name: "Redmi 15C by Xiaomi", price: 13180, oldPrice: 15000, discount: 12, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 205, name: "Oraimo SpaceBuds Pro", price: 1398, oldPrice: 2394, discount: 42, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop", category: "audio" },
        { id: 206, name: "Hisense 32 inch A4 TV", price: 13187, oldPrice: 24999, discount: 47, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", category: "tv" }
    ],
    buyTwo: [
        { id: 301, name: "AILYONS Electric Kettle", price: 750, oldPrice: 840, discount: 12, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop", category: "appliances" },
        { id: 302, name: "AILIPU SPEAKER KL-88", price: 3589, oldPrice: 4759, discount: 25, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop", category: "audio" },
        { id: 303, name: "GUDEON 128GB Memory", price: 592, oldPrice: 792, discount: 29, img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "computing" },
        { id: 304, name: "Bumbkey Men's Cotton Jacket", price: 1119, oldPrice: 2265, discount: 51, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop", category: "fashion" },
        { id: 305, name: "Mythico USB Power Tripod", price: 610, oldPrice: 1020, discount: 40, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop", category: "photography" },
        { id: 306, name: "Wireless Bluetooth Headphones", price: 1608, oldPrice: 3826, discount: 59, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", category: "audio" }
    ],
    phones: [
        { id: 401, name: "Redmi 15C by Xiaomi", price: 13180, oldPrice: 15000, discount: 12, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 402, name: "Redmi 15C by Xiaomi Pro", price: 14450, oldPrice: 16000, discount: 10, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 403, name: "XIAOMI Redmi 15 Note", price: 17670, oldPrice: 20000, discount: 11, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 404, name: "Infinix Hot 60 4G", price: 18699, oldPrice: 22000, discount: 14, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 405, name: "Infinix Smart 10", price: 9730, oldPrice: 11000, discount: 11, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", category: "phones" },
        { id: 406, name: "Samsung S26 Ultra", price: 161300, oldPrice: 180000, discount: 10, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop", category: "phones" }
    ]
};

// Cart State
let cart = [];
const TAX_RATE = 0.16;
const SHIPPING_COST = 200;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    startCountdown();
    loadCart();
});

// Render Products
function renderProducts() {
    renderGrid('flash-sales-grid', products.flashSales);
    renderGrid('top-selling-grid', products.topSelling);
    renderGrid('easter-sale-grid', products.easterSale);
    renderGrid('buy-two-grid', products.buyTwo);
    renderGrid('phones-grid', products.phones);
}

function renderGrid(elementId, productList) {
    const grid = document.getElementById(elementId);
    grid.innerHTML = productList.map(product => `
        <div class="product-card" data-category="${product.category}">
            <span class="discount ${product.discount > 50 ? 'new' : ''}">-${product.discount}%</span>
            <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${product.name}</h3>
            <div class="price-box">
                KSh ${product.price.toLocaleString()}
                <span class="old-price">KSh ${product.oldPrice.toLocaleString()}</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const allProducts = [
        ...products.flashSales,
        ...products.topSelling,
        ...products.easterSale,
        ...products.buyTwo,
        ...products.phones
    ];
    
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
        showToast(`${product.name} added to cart!`);
        
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
        cartTotal.textContent = 'KSh 0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="price">KSh ${item.price.toLocaleString()}</div>
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
        cartTotal.textContent = `KSh ${subtotal.toLocaleString()}`;
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
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_COST;
    
    document.getElementById('checkoutSubtotal').textContent = `KSh ${subtotal.toLocaleString()}`;
    document.getElementById('checkoutTax').textContent = `KSh ${Math.round(tax).toLocaleString()}`;
    document.getElementById('checkoutTotal').textContent = `KSh ${Math.round(total).toLocaleString()}`;
}

function processOrder(event) {
    event.preventDefault();
    
    const total = document.getElementById('checkoutTotal').textContent;
    
    // Simulate order processing
    showToast('Processing your order...');
    
    setTimeout(() => {
        alert(`Order Placed Successfully!\n\nTotal: ${total}\n\nThank you for shopping with Jumia!`);
        cart = [];
        saveCart();
        updateCartUI();
        closeCheckout();
        document.getElementById('checkoutForm').reset();
    }, 2000);
}

// Countdown Timer
function startCountdown() {
    let timeLeft = 2 * 60 * 60 + 30; // 2 hours 30 seconds
    
    setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('countdown').textContent = 
            `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
        
        if (timeLeft > 0) timeLeft--;
    }, 1000);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Filter Category
function filterCategory(category) {
    showToast(`Showing ${category} products`);
    // In a real app, this would filter the products
}

// Show All Products
function showAllProducts() {
    showToast('Showing all products');
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        showToast(`Searching for: ${searchTerm}`);
    }
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
