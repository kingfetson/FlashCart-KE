document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Countdown Timer
    const countdownElement = document.getElementById('countdown');
    let timeLeft = 2 * 60 * 60 + 30; // 2 hours 30 seconds in seconds

    const timerInterval = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        countdownElement.textContent = 
            `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = "00h : 00m : 00s";
        } else {
            timeLeft--;
        }
    }, 1000);

    // 2. Helper function to create Product HTML
    function createProductCard(product) {
        return `
            <div class="product-card">
                <span class="discount">-${product.discount}%</span>
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price-box">
                    ${CONFIG.currency} ${product.price.toLocaleString()} 
                    <span class="old-price">${CONFIG.currency} ${product.oldPrice.toLocaleString()}</span>
                </div>
            </div>
        `;
    }

    // 3. Render Flash Sales
    const flashSalesGrid = document.getElementById('flash-sales-grid');
    if (flashSalesGrid && CONFIG.products.flashSales) {
        flashSalesGrid.innerHTML = CONFIG.products.flashSales.map(createProductCard).join('');
    }

    // 4. Render Top Selling
    const topSellingGrid = document.getElementById('top-selling-grid');
    if (topSellingGrid && CONFIG.products.topSelling) {
        topSellingGrid.innerHTML = CONFIG.products.topSelling.map(createProductCard).join('');
    }

    // 5. Render Phones
    const phonesGrid = document.getElementById('phones-grid');
    if (phonesGrid && CONFIG.products.phones) {
        phonesGrid.innerHTML = CONFIG.products.phones.map(createProductCard).join('');
    }

    // 6. Simple Console Log to show Config is loaded
    console.log(`Welcome to ${CONFIG.siteName} Clone. Currency: ${CONFIG.currency}`);
});
