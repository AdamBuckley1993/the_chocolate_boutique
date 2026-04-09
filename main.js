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
function showTheTime() {
  var timeSeen = document.getElementById("txt");
  if (timeSeen.style.display === "none") {
    timeSeen.style.display = "block";
  } else {
    timeSeen.style.display = "none";
  }
}
function burgerTime() {
  var beef = document.getElementById("yumyum");
  if (beef.className === "burger") {
    beef.className += " responsive";
  } else {
    beef.className = "burger";
  }
}
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
let orderHistory = [];
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
function addToReceipt() {
    const select = document.getElementById("chocolate-select");
    const qtyInput = document.getElementById("quantity-input");
    const name = select.value;
    const qty = parseInt(qtyInput.value);
    const price = menu[name].price;
    const itemTotal = price * qty;
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
    document.getElementById("display-invoice").innerText = invoiceNumbers;
    document.getElementById("thankYouModal").style.display = "block";
    currentBasket = [];
    updateReceiptDisplay();
}
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
    if (!emailInput || !title || !msg) return;
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        title.innerText = "Error!";
        msg.innerText = "Email cannot be blank!";
        title.style.color = "red";
        msg.style.color = "red";
        emailInput.classList.add("sub-error"); 
    } else {
        title.innerText = "Welcome to the Club!";
        msg.innerText = `Thank you for subscribing, ${emailValue}!`;
        title.style.color = "green";
        msg.style.color = "green";
        emailInput.classList.remove("sub-error");
        emailInput.style.display = "none"; 
        if (subscribeBtn) subscribeBtn.style.display = "none";
        setTimeout(closeNewsletter, 2000);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const modal = document.getElementById("newsletterModal");
        if (modal) modal.style.display = "block";
    }, 1000);
});

let slideIndex = 0; 
let isPaused = false;
let slideTimer;

function initializeApp() {
    if (typeof startTime === "function") startTime(); 
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides.length > 0) {
        slides[0].style.display = "block";
        if (dots.length > 0) dots[0].className += " active";
        startAutoSlide();
    }

    const savedUser = localStorage.getItem("currentUser");
    const savedRole = localStorage.getItem("userRole");
    if (savedUser && typeof showInterface === "function") {
        showInterface(savedUser, savedRole);
    }

    setTimeout(() => {
        const modal = document.getElementById("newsletterModal");
        if (modal) { modal.style.display = "block"; }
    }, 1000);
}

window.addEventListener('load', initializeApp);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n >= slides.length) { slideIndex = 0; }
    else if (n < 0) { slideIndex = slides.length - 1; } 
    else { slideIndex = n; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex].className += " active";
    }
}

function startAutoSlide() {
    clearTimeout(slideTimer);
    if (!isPaused) {
        slideTimer = setTimeout(() => {
            slideIndex++;
            showSlides(slideIndex);
            startAutoSlide();
        }, 4000);
    }
}

function togglePause() {
    const slideshowButton = document.getElementById("pauseBtn");
    if (!slideshowButton) return;

    isPaused = !isPaused;
    if (isPaused) {
        clearTimeout(slideTimer);
        slideshowButton.innerText = "Play";
        slideshowButton.style.backgroundColor = "maroon";
        slideshowButton.style.color = "lightyellow";
    } else {
        slideshowButton.innerText = "Pause";
        slideshowButton.style.backgroundColor = "darkgreen";
        slideshowButton.style.color = "cyan";
        startAutoSlide();
    }
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1; 
    showSlides(slideIndex);
    if (!isPaused) startAutoSlide();
}

const searchData = [ 
    { label: "Home", url: "/home" }, 
    { label: "About Us", url: "/about"}, 
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
    { label: "FAQ", url: "/faq" },
    { label: "Blog", url: "/blog" },
    { label: "Portfolio", url: "/portfolio" }
];

const searchBox = document.getElementById('searchBox');
const resultsList = document.getElementById('resultsList');
const toggleBtn = document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');

let isLive = true;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isLive = !isLive;
        toggleBtn.textContent = isLive ? "Mode: Live" : "Mode: Enter";
        toggleBtn.className = isLive ? "mode-live" : "mode-enter";
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        searchBox.value = '';
        performSearch();
    });
}

function performSearch() {
    const query = searchBox.value.toLowerCase().trim();

    if (query === '') {
        resultsList.innerHTML = '<span class="no-results">Type to see results...</span>';
        return;
    }

    const matches = searchData.filter(item => item.label.toLowerCase().includes(query));

    if (matches.length > 0) {
        const linkHTML = matches.map(item => `<a href="${item.url}">${item.label}</a>`);

        resultsList.innerHTML = linkHTML.length > 1 ? linkHTML.join(', ') : linkHTML[0];
    } else {
        resultsList.innerHTML = '<span class="no-results">No matches found.</span>';
    }
}

searchBox.addEventListener('input', () => {
    if (isLive) performSearch();
});

searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
});

performSearch();

const colorPicker = document.getElementById('colorPicker');

const sitePicker = document.getElementById('colorPicker');
const contactSection = document.getElementById('contact-section');
const resetColorButton = document.getElementById('resetColors');
const accessBtn = document.getElementById('accessBtn');
const recBox = document.getElementById('recommendationBox');
const recText = document.getElementById('suggestedPairing');
const root = document.documentElement;

if (sitePicker) {
    sitePicker.addEventListener('input', (e) => {
        const newColor = e.target.value;
        root.style.setProperty('--main-theme', newColor);
        contactSection.style.backgroundColor = newColor;
    });
}

function sendEmail() {
    const email = "hello@thechocolateboutique.com";
    const subject = "Inquiry from Website";
    const body = "Hi, there, I was browsing your all's chocolate collection...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        const defaultColor = '#1e90ff';
        root.style.setProperty('--main-theme', defaultColor);
        contactSection.style.backgroundColor = defaultColor;
        sitePicker.value = defaultColor;
        recBox.classList.add('hidden');
    });
}

if (accessBtn) {
    accessBtn.addEventListener('click', () => {
    const currentColor = sitePicker.value.toUpperCase();
    recBox.classList.remove('hidden');

        if (isColorDark(currentColor)) {
            recText.innerText = `Current Theme (${currentColor}) is DARK. Pair with: White (#FFFFFF) or Cream (#FFFDD0) for 7:1 contrast.`;
        } else {
            recText.innerText = `Current Theme (${currentColor}) is LIGHT. Pair with: Black (#000000) or Charcoal (#333333) for 7:1 contrast.`;
        }
    });
}


function isColorDark(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq < 128;
}

/* Standard practice */

function enterYourName() {
    const enterName = document.getElementById("enterName");
    let personName = prompt("Please enter your name:", "Guest");
}