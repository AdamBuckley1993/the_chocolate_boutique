/*Success*/
function startTime() {
  const today = new Date(); 
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

startTime();
  
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
/*Function end*/

/*Success!*/
function showTheTime() {
  var timeSeen = document.getElementById("txt");
  if (timeSeen.style.display === "none") {
    timeSeen.style.display = "block";
  } else {
    timeSeen.style.display = "none";
  }
}
/*Function end*/

/*Success!*/
function burgerTime() {
  var beef = document.getElementById("yumyum");
  if (beef.className === "burger") {
    beef.className += " responsive";
  } else {
    beef.className = "burger";
  }
}
/*Function end*/

let totalAmount = 0;

function addToReceipt() {
    const select = document.getElementById("chocolate-select");
    const quantityInput = document.getElementById("quantity-input");

    const name = select.value;
    const price = parseFloat(select.options[select.selectedIndex].getAttribute("data-price"));
    const quantity = parseInt(quantityInput.value);

    const itemTotal = price * quantity;
    totalAmount += itemTotal;

    const receiptList = document.getElementById("receipt-list");
    const li = document.createElement("li");
    li.innerHTML = `<span>${quantity}x ${name}</span> <span style="float:right">$${itemTotal.toFixed(2)}</span>`;
    receiptList.appendChild(li);

    document.getElementById("grand-total").innerText = totalAmount.toFixed(2);

    quantityInput.value = 1;
}

function printReceipt() {
    window.print();
}

function subscribe() {
    const subscribeText = document.getElementById("subscribehere");
    if (subscribeText.innerHTML === "") {
        subscribeText.innerHTML = "Must fill out form to subscribe!";
        subscribeText.style.color = "red";
    } else {
        (subscribeText.innerHTML === "Hello")
        subscribeText.innerHTML = "Subscribed!";
        subscribeText.style.color = "green";
    }
}


const welcomeModal = document.getElementById("myWelcomeModal");
const welcomeButton = document.getElementById("myWelcomeBtn");
const welcomeSpan = document.getElementsByClassName("closeWelcome")[0];

welcomeButton.onclick = function() {
    welcomeModal.style.display = "block";
}

welcomeSpan.onclick = function() {
    welcomeModal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == welcomeModal) {
        welcomeModal.style.display = "none";
    } if (event.target == loginOrOut) {
        loginOrOut.style.display = "none";
    }
}

/*

function openChocolateModal(chocolateTitle, chocolateDescription, chocolateImageSrc) {
    document.getElementById("chocolate-modal-title").innerText = chocolateTitle;
    document.getElementById("chocolate-modal-description").innerText = chocolateDescription;
    document.getElementById("chocolate-modal-img").src = chocolateImageSrc;
    document.getElementById("chocolateModal").style.display = "block";
}

function closeChocolateModal() {
    document.getElementById("chocolateModal").style.display = "none";
}

window.onclick = function(event) {
    let chocolateModal = document.getElementById("chocolateModal");
    if (event.target == chocolateModal) {
        chocolateModal.style.display = "none";
    }
}

const users = {
    "admin": { password: "123", role: "admin" },
    "guest": { password: "456", role: "user" }
};

function login() {
    const userIn = document.getElementById("username").value;
    const passIn = document.getElementById("password").value;
    const msg = document.getElementById("login-msg");

    if (users[userIn] && users[userIn].password === passIn) {
        localStorage.setItem("currentUser", userIn);
        localStorage.setItem("userRole", users[userIn].role);
        msg.style.color = "green";

        showInterface(userIn, users[userIn].role);
        msg.innerText = `Welcome, ${userIn}! You are logged in as ${users[userIn].role}.`;
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid credentials!";
    }
}

function showInterface(username, role) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("user-header").style.display = "block";
    document.getElementById("welcome-text").innerText = "Welcome, " + username + "!";

    if (role === "admin") {
        document.getElementById("admin-btn").style.display = "inline-block";
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userRole");
    location.reload();
}

window.onload = function() {
    const savedUser = localStorage.getItem("currentUser");
    const savedRole = localStorage.getItem("userRole");
    if (savedUser) {
        showInterface(savedUser, savedRole);
    }
};

const adminData = {
    recent: "<h3>Pending:</h3><ul><li>Order #992 - 2x Dark Truffle</li><li>Order #993 - 5x Milk Sea Salt</li></ul>",
    history: "<h3>Completed Today:</h3><ul><li>Order #990 - $15.00</li><li>Order #991 - $22.50</li></ul>",
    locations: "<h3>Active Deliveries:</h3><p>📍 New York, NY</p><p>📍 London, UK</p>"
};

function toggleAdminSection(section) {
    const display = document.getElementById("admin-content");
    if (section === 'finances') {
        calculateFinances();
    }

    display.innerHTML = adminData[section];
}

function checkAdminAccess() {
    const role = localStorage.getItem("userRole");
    if (role === "admin") {
        document.getElementById("admin-dashboard").style.display = "block";
        toggleAdminSection('recent');
    }
}

function onLoginSuccess() {
    localStorage.setItem("currentUser", user);
    localStorage.setItem("userRole", role);

    updateUserInterface(user, role);
}

function updateUserInterface() {
    document.getElementById("user-header").style.display = "block";
    document.getElementById("welcome-text").innerText = "Welcome, " + username + "!";

    if (role === "admin") {
        const adminSection = document.getElementById("admin-dashboard");
        if (adminSection) {
            adminSection.style.display = "block";
            toggleAdminSection('recent');
        }
    }
}

const menu = {
    "Dark Truffle": { price: 2.50, cost: 1.00 },
    "Milk Sea Salt": { price: 2.25, cost: 0.90 },
    "White Raspberry": { price: 2.75, cost: 1.10 },
    "Caramel Praline": { price: 3.00, cost: 1.20 }
};

function calculateFinances() {
    let totalRevenue = 0;
    let totalCost = 0;

    orderHistory.forEach(order => {
        totalRevenue += order.total;

        order.items.forEach(item => {
            const itemData = menu[item.name];
            totalCost += (itemData.cost * item.quantity);
        });
    });

    const totalProfit = totalRevenue - totalCost;

    document.getElementById("total-revenue").innerText = "$" + totalRevenue.toFixed(2);
    document.getElementById("total-profit").innerText = "$" + totalProfit.toFixed(2);
}

function finalizeOrder() {
    const invoiceNumber = "INV-" + Date.now();

    const newOrder = {
        invoice: invoiceNumber,
        items: [...currentBasket],
        total: basketTotal,
        date: new Date().toLocaleString()
    };

    orderHistory.unshift(newOrder);

    saveOrderToAdmin(newOrder);

    currentBasket = [];
    showThankYouModal(invoiceNumber);
}

function showThankYouModal(inv) {
    document.getElementById("display-invoice").innerText = inv;
    document.getElementById("thankYouModal").style.display = "block";
}

function closeThankYouModal() {
    document.getElementById("thankYouModal").style.display = "none";
}

function saveOrderToAdmin(order) {
    const adminList = document.getElementById("admin-recent-orders");
    if (adminList) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${order.invoice}</strong> - $${order.total.toFixed(2)} (${order.items.length} items)`;
        adminList.prepend(li);
    }
}

function showRecentOrders() {
    let html = "<h3>Recent Orders</h3><ul id='admin-recent-orders'>";
    orderHistory.forEach(order => {
        html += `<li><strong>${order.invoice}</strong> - $${order.total.toFixed(2)}</li>`;
    });
    html += "</ul>";
    document.getElementById("admin-content").innerHTML = html;
}

function processCheckout() {
    if (currentBasket.length === 0) {
        alert("Your receipt is empty! Add some chocolate first.");
        return;
    }

    const timestamp = Date.now();
    const invoiceNumbers = "CHOC-" + timestamp;

    const finalOrder = {
        invoice: invoiceNumbers,
        items: [...currentBasket],
        total: basketTotal,
        date: new Date().toLocaleString()
    };

    orderHistory.unshift(finalOrder);

    if (typeof calculateFinances === "function") {
        calculateFinances();
    }

    document.getElementById("display-invoice").innerText = invoiceNumbers;
    document.getElementById("thankYouModal").style.display = "block";

    currentBasket = [];
    updateReceiptDisplay();
    totalAmount = 0;
    document.getElementById("grand-total").innerText = "0.00";
} 
    End of test
 */

// --- 1. GLOBAL STATE ---
let orderHistory = []; // Stores finalized orders
let currentBasket = []; // Items currently in the receipt
let totalAmounts = 0;   // Running total for the current session

const menu = {
    "Dark Truffle": { price: 2.50, cost: 1.00 },
    "Milk Sea Salt": { price: 2.25, cost: 0.90 },
    "White Raspberry": { price: 2.75, cost: 1.10 },
    "Caramel Praline": { price: 3.00, cost: 1.20 }
};

const users = {
    "admin": { password: "123", role: "admin" },
    "guest": { password: "456", role: "user" }
};

// --- 2. MODAL LOGIC ---
function openChocolateModal(title, desc, img) {
    document.getElementById("chocolate-modal-title").innerText = title;
    document.getElementById("chocolate-modal-description").innerText = desc;
    document.getElementById("chocolate-modal-img").src = img;
    document.getElementById("chocolateModal").style.display = "block";
}

function closeChocolateModal() {
    document.getElementById("chocolateModal").style.display = "none";
}

function closeThankYouModal() {
    document.getElementById("thankYouModal").style.display = "none";
}

window.onclick = function(event) {
    let chocModal = document.getElementById("chocolateModal");
    let thanksModal = document.getElementById("thankYouModal");
    if (event.target == chocModal) chocModal.style.display = "none";
    if (event.target == thanksModal) thanksModal.style.display = "none";
}

// --- 3. ORDERING & RECEIPT LOGIC ---
function addToReceipt() {
    const select = document.getElementById("chocolate-select");
    const qtyInput = document.getElementById("quantity-input");
    const name = select.value;
    const qty = parseInt(qtyInput.value);
    const price = menu[name].price;

    const itemTotal = price * qty;
    
    // Add to basket array
    currentBasket.push({ name: name, quantity: qty, price: price, total: itemTotal });
    
    updateReceiptDisplay();
}

function updateReceiptDisplay() {
    const list = document.getElementById("receipt-list");
    const totalLabel = document.getElementById("grand-total");
    
    list.innerHTML = "";
    let runningTotal = 0;

    currentBasket.forEach((item, index) => {
        runningTotal += item.total;
        const li = document.createElement("li");
        li.innerHTML = `${item.quantity}x ${item.name} - $${item.total.toFixed(2)}`;
        list.appendChild(li);
    });

    totalAmount = runningTotal;
    totalLabel.innerText = totalAmount.toFixed(2);
}

function processCheckout() {
    if (currentBasket.length === 0) {
        alert("Your receipt is empty!");
        return;
    }

    const invoiceNumbers = "CHOC-" + Date.now();

    const finalOrder = {
        invoice: invoiceNumbers,
        items: [...currentBasket],
        total: totalAmount,
        date: new Date().toLocaleString()
    };

    orderHistory.unshift(finalOrder);

    // Show Success Modal
    document.getElementById("display-invoice").innerText = invoiceNumbers;
    document.getElementById("thankYouModal").style.display = "block";

    // Reset Receipt
    currentBasket = [];
    updateReceiptDisplay();
}

// --- 4. AUTHENTICATION LOGIC ---
function login() {
    const userIn = document.getElementById("username").value;
    const passIn = document.getElementById("password").value;
    const msg = document.getElementById("login-msg");

    if (users[userIn] && users[userIn].password === passIn) {
        localStorage.setItem("currentUser", userIn);
        localStorage.setItem("userRole", users[userIn].role);
        showInterface(userIn, users[userIn].role);
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid credentials!";
    }
}

function showInterface(username, role) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("user-header").style.display = "block";
    document.getElementById("welcome-text").innerText = "Welcome, " + username + "!";

    if (role === "admin") {
        document.getElementById("admin-btn").style.display = "inline-block";
        document.getElementById("admin-dashboard").style.display = "block";
        toggleAdminSection('recent');
    }
}

function logout() {
    localStorage.clear();
    location.reload();
}

/* Moved window.onload function */

// --- 5. ADMIN DASHBOARD LOGIC ---
function toggleAdminSection(section) {
    const display = document.getElementById("admin-content");
    
    if (section === 'recent') {
        let html = "<h3>Recent Orders</h3><ul>";
        orderHistory.forEach(order => {
            html += `<li><strong>${order.invoice}</strong> - $${order.total.toFixed(2)}</li>`;
        });
        html += "</ul>";
        display.innerHTML = html;
    } else if (section === 'history') {
        display.innerHTML = "<h3>Order History</h3><p>Total Orders Processed: " + orderHistory.length + "</p>";
    } else if (section === 'locations') {
        display.innerHTML = "<h3>User Locations</h3><p>📍 New York, NY</p><p>📍 London, UK</p>";
    }
}

const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerText = "☀️ Light Mode";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }

    localStorage.setItem("theme", theme);
});

function closeNewsletter() {
    const modal = document.getElementById("newsletterModal");
    if (modal) modal.style.display = "none";
}

function handleModalSubscribe() {
    const emailInput = document.getElementById("modal-email-input");
    const title = document.getElementById("news-title");
    const msg = document.getElementById("news-msg");
    const subscribeBtn = document.getElementById("modalSubscribeBtn");
    
    // Safety check: make sure elements exist before accessing .value
    if (!emailInput || !title || !msg) return;

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        // --- ERROR STATE ---
        title.innerText = "Error!";
        msg.innerText = "Email cannot be blank!";
        title.style.color = "red";
        msg.style.color = "red";
        emailInput.classList.add("sub-error"); 
    } else {
        // --- SUCCESS STATE ---
        title.innerText = "Welcome to the Club!";
        msg.innerText = `Thank you for subscribing, ${emailValue}!`;
        title.style.color = "green";
        msg.style.color = "green";
        
        // Cleanup UI
        emailInput.classList.remove("sub-error");
        emailInput.style.display = "none"; 
        if (subscribeBtn) subscribeBtn.style.display = "none";
        
        // Auto-close
        setTimeout(closeNewsletter, 2000);
    }
}

// Better practice: Use DOMContentLoaded so it triggers as soon as HTML is ready
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const modal = document.getElementById("newsletterModal");
        if (modal) modal.style.display = "block";
    }, 1000);
});

let slideIndex = 0; // Start at 0 for proper incrementing
let isPaused = false;
let slideTimer;

window.onload = function() {
    // Start clock and slideshow immediately
    if (typeof startTime === "function") startTime();
    showSlides(); 

    // Handle User sessions
    const savedUser = localStorage.getItem("currentUser");
    const savedRole = localStorage.getItem("userRole");
    if (savedUser && typeof showInterface === "function") {
        showInterface(savedUser, savedRole);
    }
    
    // Newsletter Modal
    setTimeout(() => {
        const modal = document.getElementById("newsletterModal");
        if (modal) {
            modal.style.display = "block";
        }
    }, 1000);
};

// Logic to handle Dot clicks
function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1; // Set to the specific slide (adjusting for increment)
    isPaused = false;   // Unpause on manual selection
    document.getElementById("pauseBtn").innerText = "Pause";
    document.getElementById("pauseBtn").style.backgroundColor = "darkgreen";
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Deactivate dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display current slide
    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }

    // Automatic Loop - Only if NOT paused
    if (!isPaused) {
        // IMPORTANT: Save the timer to the variable so we can stop it!
        slideTimer = setTimeout(showSlides, 4000);
    }
}

function togglePause() {
    const slideshowButton = document.getElementById("pauseBtn");
    isPaused = !isPaused;

    if (isPaused) {
        clearTimeout(slideTimer); // Stop the loop
        slideshowButton.innerText = "Play";
        slideshowButton.style.backgroundColor = "maroon";
        slideshowButton.style.color = "lightyellow";
    } else {
        slideshowButton.innerText = "Pause";
        slideshowButton.style.backgroundColor = "darkgreen";
        slideshowButton.style.color = "cyan";
        showSlides(); // Restart the loop
    }
}

/* Standard practice */

function enterYourName() {
    const enterName = document.getElementById("enterName");
    let personName = prompt("Please enter your name:", "Guest");
}