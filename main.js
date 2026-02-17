let timerId = null;
const btn = document.getElementById("time");

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

let count = 0;
const cartCountElement = document.getElementById("cart-count");
const cartLink = document.getElementById("cart-link");
const productListItems = document.querySelectorAll("#products li");

productListItems.forEach(item => {
    item.style.cursor = "pointer";
    item.title = "Click to add to bag!";

    item.onclick = function() {
        count++;
        cartCountElement.textContent = count;

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

cartLink.onclick = function(e) {
    e.preventDefault();

    modalCount.textContent = count;

    if (count === 0) {
        modalMsg.textContent = "Your bag is empty! Add some delicious chocolates before checking out.";
        goldenTicket.style.transform = "translateY(0)";
    } else if (count > 10) {
        modalMsg.textContent = "Wow, that's a lot of chocolates! You must have a sweet tooth!";

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
