let timerId = null;
const btn = document.getElementById("time");
const nav = document.getElementById("main-nav");
const hamburger = document.getElementById("hamburger");

hamburger.onclick = function() {
    nav.classList.toggle("active");
};

function applyButtonStyle(isHovering) {
    if (timerId === null) {
        btn.style.backgroundColor = isHovering ? "indigo" : "green";
        btn.style.color = isHovering ? "chartreuse" : "cyan";
        btn.style.border = isHovering ? "8px solid black" : "4px solid red";
    } else {
        btn.style.backgroundColor = isHovering ? "darkorange" : "yellow";
        btn.style.color = isHovering ? "white" : "purple";
        btn.style.border = isHovering ? "8px solid red" : "8px solid magenta";
    }
}

const activeShadow = "0 8px 16px rgba(0,0,0,0.3)";
const inactiveShadow = "0 4px 8px rgba(0,0,0,0.2)";

const themeBtn = document.getElementById("theme-toggle");
const body = document.body;
const headerH1 = document.querySelector("h1");

themeBtn.onclick = function() {
    if (body.style.backgroundColor === "rgb(61, 28, 12)" || body.style.backgroundColor === "#3d1c0c") {
        body.style.backgroundColor = "#ffa500";
        body.style.color = "#1a0a53";
        headerH1.style.color = "pink";
        themeBtn.textContent = "Switch to Dark Mode";
    } else {
        body.style.backgroundColor = "#3d1c0c";
        body.style.color = "#f3e5ab";
        headerH1.style.backgroundColor = "#5d2e1a";
        headerH1.style.color = "#ffd700";
        themeBtn.textContent = "Switch to Light Mode";
    }
};

function toggleClock() {
  if (timerId === null) {
    timerId = setInterval(updateTime, 1000);
    updateTime();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y : 0.6 },
        colors: ['#ff8c00', '#ff00ff', '#00ffff', '#ffff00']
    });

    btn.style.fontFamily = "Arial, sans-serif";
    btn.style.border = "8px solid magenta";
    btn.style.backgroundColor = "yellow";
    btn.style.color = "purple";
    btn.style.fontSize = "30px";
    btn.style.boxShadow = activeShadow;
  } else {
    clearInterval(timerId);
    timerId = null;

    btn.innerHTML= "Show Time";
    btn.style.backgroundColor = "green";
    btn.style.color = "cyan";
    btn.style.fontSize = "20px";
    btn.style.border = "4px solid red";
    btn.style.boxShadow = activeShadow;
  }
  applyButtonStyle(false);
}

function updateTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, "0");;
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    btn.innerHTML = `${hours}:${minutes}:${seconds}`;
    }


btn.onmouseenter = function() {
    btn.dataset.oldBg = btn.style.backgroundColor;
    btn.dataset.oldCol = btn.style.color;
    btn.dataset.oldBord = btn.style.border;

    if (timerId === null) {
        btn.style.backgroundColor = "indigo";
        btn.style.color = "chartreuse";
        btn.style.border = "8px solid black";
    } else {
        btn.style.backgroundColor = "darkorange";
        btn.style.color = "white";
        btn.style.border = "8px solid red";
    }
};

btn.onmouseleave = function() {
    btn.style.backgroundColor = btn.dataset.oldBg;
    btn.style.color = btn.dataset.oldCol;
    btn.style.border = btn.dataset.oldBord;
};

btn.onmousedown = function() {
    btn.style.boxShadow = inactiveShadow;
    btn.style.transform = "translateY(4px)";
};

btn.onmouseup = function() {
    btn.style.boxShadow = activeShadow;
    btn.style.transform = "translateY(0)";
};

btn.onclick = toggleClock;

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.dataset.originalColor = link.style.color;

    link.onmouseenter = function() {
        link.style.color = "#ffd700";
        link.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)";
        link.style.transition = "all 0.3s ease";
        link.style.fontWeight = "bold";
    };

    link.onmouseleave = function() {
        link.style.color = " ";
        link.style.textShadow = "none";
        link.style.fontWeight = "normal";
    };
});

let count = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;;
const cartCountElement = document.getElementById("cart-count");
const cartLink = document.getElementById("cart-link");
const productListItems = document.querySelectorAll("#products li");

productListItems.forEach((product) => {
    const starContainer = document.createElement("div");
    starContainer.style.marginTop = "5px";
    starContainer.style.fontSize = "1.5em";
    starContainer.style.color = "#ccc";
    starContainer.style.cursor = "pointer";
    starContainer.style.transition = "all 0.3s ease";

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.innerHTML = "&#9733;";
        star.dataset.value = i;

        star.onmouseenter = function() {
            const allStars = starContainer.querySelectorAll("span");
            allStars.forEach(s => {
                if (s.dataset.value <= i) {
                    s.style.color = "#ffd700";
                    s.style.textShadow = "0 0 10px #ffff00, 0 0 20px #ffa500";
                    s.style.transform = "scale(1.2)";
                }
            });
};

        star.onmouseleave = function() {
            const allStars = starContainer.querySelectorAll("span");
            allStars.forEach(s => {
                s.style.color = "#ccc";
                s.style.textShadow = "none";
                s.style.transform = "scale(1)";
            });
        };

        star.onclick = function(e) {
            e.stopPropagation();
            confetti({
                particleCount: 30,
                spread: 50,
                origin: { x : 0.5, y : 0.5 },
                colors: ['#ffd700', '#ff69b4', '#00ffff']
            });
            alert(`You rated this product ${parseInt(star.dataset.value) + 1} stars!`);
        };

        starContainer.appendChild(star);
    }

    product.appendChild(starContainer);
});

productListItems.forEach(item => {
    item.style.cursor = "pointer";
    item.title = "Click to add to bag!";

    item.onclick = function() {
        count++;
        cartCountElement.textContent = count;

        localStorage.setItem("cartCount", count);

        clickSound.currentTime = 0;
        clickSound.play();

        cartLink.style.display = "inline-block";
        cartLink.style.transform = "scale(1.3)";
        cartLink.style.color = "#ffd700";

        setTimeout(() => { 
            cartLink.style.transform = "scale(1)";
            cartLink.style.color = " ";
        }, 200);

            confetti({
                particleCount: 20,
                spread: 30,
                origin: { x : 0.5, y : 0.8 },
                colors: ['#3d1c0c', '#f3e5ab']
            });
        };
});

const modal = document.getElementById("checkout-modal");
const closeModal = document.getElementById("close-modal");
const modalCount = document.getElementById("modal-count");
const modalMsg = document.getElementById("modal-msg");
const goldenTicket = document.getElementById("golden-ticket");

const originalCartLinkOnClick = cartLink.onclick;
cartLink.onclick = function(e) {
    e.preventDefault();

    modalCount.textContent = count;

    if (count === 0) {
        modalMsg.textContent = "Your bag is empty! Add some delicious chocolates before checking out.";
        goldenTicket.style.transform = "translateY(0)";
    } else if (count > 10) {
        modalMsg.textContent = "Wow, that's a lot of chocolates! You must have a sweet tooth!";
        startTicketCountdown();

        ticketSlideSound.play();

        setTimeout(() => {
            goldenTicket.style.transform = "translateY(-140px)";
        }, 300);

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y : 0.3 },
            colors: ['#ffd700', '#ffffff']
        });
    } else {
        modalMsg.textContent = "Thank you for your purchase! Your chocolates will be delivered soon.";
        goldenTicket.style.transform = "translateY(0)";

        modal.style.display = "flex";
    }

    modal.style.display = "flex";
};

closeModal.onclick = function() {
    modal.style.display = "none";
    goldenTicket.style.transform = "translateY(0)";

    function clearBag() {
        count = 0;

        localStorage.removeItem("cartCount");
        cartCountElement.textContent = count;
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

goldenTicket.style.cursor = "pointer";
goldenTicket.title = "Click for a surprise!";

goldenTicket.onclick = function() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y : 0.5 },
        colors: ['#ffd700', '#ffffff', '#ff69b4']
    });

    setTimeout(() => {
        window.print();
    }, 1000);
};

window.onload = function() {
    cartCountElement.textContent = count;
    console.log("Page loaded. Cart count: " + count);
};

const clickSound = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
const fanfareSound = new Audio("https://actions.google.com/sounds/v1/celebration/celebration_horn_short.ogg");
const ticketSlideSound = new Audio("https://actions.google.com/sounds/v1/foley/paper_shuffle.ogg");

clickSound.volume = 0.4;
fanfareSound.volume = 0.5;
ticketSlideSound.volume = 0.3;

const chatBubble = document.getElementById("chat-bubble");

function triggerWiggle() {
    chatBubble.style.transform = "rotate(15deg) scale(1.1)";

    setTimeout(() => {
        chatBubble.style.transform = "rotate(-15deg) scale(1.1)";
    }, 100);

    setTimeout(() => {
        chatBubble.style.transform = "rotate(0deg) scale(1)";
    }, 200);
}

setInterval(triggerWiggle, 5000);

chatBubble.onmouseenter = () => {
    chatBubble.style.backgroundColor = "5d2e1a";
    chatBubble.style.transform = "scale(1.2)";
};

chatBubble.onmouseleave = () => {
    chatBubble.style.backgroundColor = "#3d1c0c";
    chatBubble.style.transform = "scale(1)";
};

chatBubble.onclick = () => {
    const ding = new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg");
    ding.volume = 0.3;
    ding.play();
    const chatMsg = document.getElementById("chat-msg");
    chatMsg.style.opacity = "1";
    setTimeout(() => {
        chatMsg.style.opacity = "0";
    }, 4000);
    chatMsg.style.display = chatMsg.style.display === "flex" ? "none" : "flex";

    alert("Hello! How can we assist you today? Our customer service team is here to help with any questions or concerns you may have about our chocolates!");
};

window.onscroll = function() {
    updateScrollProgress();
};

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
    const bar = document.getElementById("scroll-progress");
    if (scrolled > 50) {
        bar.style.backgroundColor = "#ff69b4";
    } else {
        bar.style.backgroundColor = "#00ffff";
    }
}

const chatHeader = document.getElementById("chat-header");

let touchStartX = 0;
let touchStartY = 0;

chatHeader.addEventListener("touchstart", function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, false);

chatHeader.addEventListener("touchend", function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 30) {
        if (deltaX > 0) {
            chatBubble.style.transform = "translateX(100px)";
        } else {
            chatBubble.style.transform = "translateX(-100px)";
        }
        setTimeout(() => {
            chatBubble.style.transform = "translateX(0)";
        }, 300);
    }
}, false);

goldenTicket.style.cursor = "pointer";
goldenTicket.title = "Click for a surprise!";

goldenTicket.onclick = function() {
    const codeToCopy = "CHOCOLATELOVER2024";
    navigator.clipboard.writeText(codeToCopy).then(() => {
        alert("Golden Ticket code copied to clipboard! Use it at checkout for a special discount!");
    }).catch(err => {
        alert("Failed to copy code: " + err);
    const originalText = goldenTicket.textContent;
    goldenTicket.textContent = "Code Copied!";
    setTimeout(() => {
        goldenTicket.textContent = originalText;
    }, 2000);
    goldenTicket.innerHTML = "&#127873;"; // Change to gift emoji

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y : 0.5 },
        colors: ['#ffd700', '#ffffff', '#ff69b4']
    });

    setTimeout(() => {
        goldenTicket.innerHTML = "&#127873;"; // Change to gift emoji
    }, 2000);
}).catch(err => {
    alert("Failed to copy code: " + err);
});
};

let countdownInterval = null;

function startTicketCountdown() {
    if (countdownInterval) return;

    let timeLeft = 600;
    const timerDisplay = document.getElementById("golden-ticket-timer");

    countdownInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `Offer expires in ${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Offer expired!";
            timerDisplay.style.color = "gray";
            goldenTicket.style.backgroundColor = "gray";
            goldenTicket.style.cursor = "not-allowed";
            goldenTicket.onclick = null;
        }

        timeLeft--;
    }, 1000);
}

