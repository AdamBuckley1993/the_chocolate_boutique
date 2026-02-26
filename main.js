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

function burgerTime() {
  var beef = document.getElementById("yumyum");
  if (beef.className === "burger") {
    beef.className += " responsive";
  } else {
    beef.className = "burger";
  }
}

/* Mostly AI crap
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

const checkBoxes = document.querySelectorAll(".choco-option");
const invoiceBody = document.getElementById("invoice-body");
const invoiceTotal = document.getElementById("invoice-total");

function updateInvoice() {
    invoiceBody.innerHTML = "";
    let total = 0;

    if (count > 0) {
        const row = invoiceBody.insertRow();
        row.insertCell(0).textContent = "Chocolate Box";
        row.insertCell(1).textContent = count;
        row.insertCell(2).textContent = "$10";
        row.insertCell(3).textContent = `$${count * 10}`;
        total += count * 10;
    }
    
    checkBoxes.forEach(box => {
        if (box.checked) {
            const name = box.dataset.name;
            const price = parseFloat(box.dataset.price);
            const row = invoiceBody.insertRow();
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = "1";
            row.insertCell(2).textContent = `$${price.toFixed(2)}`;
            row.insertCell(3).textContent = `$${price.toFixed(2)}`;
            total += price;
        }
    });

    invoiceTotal.textContent = `Total: $${total.toFixed(2)}`;
}

checkBoxes.forEach(box => {
    box.addEventListener("change", updateInvoice);
    clickSound.currentTime = 0;
    clickSound.play();
});

updateInvoice();

const originalProductCheck = checkBoxes[0].onclick;
checkBoxes.forEach(box => {
    const originalOnClick = box.onclick;
    box.onclick = function() {
        originalOnClick.call(this);
        clickSound.currentTime = 0;
        clickSound.play();
    };
    updateInvoice();
});

const printBtn = document.getElementById("print-invoice");
printBtn.onclick = function() {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    const header = document.createElement("h2");
    header.textContent = `Invoice - ${dateStr} ${timeStr}`;
    header.style.textAlign = "center";
    header.style.color = "#3d1c0c";
    header.style.fontFamily = "Georgia, serif";

    let dateEl = document.getElementById("invoice-date");
    if (!dateEl) {
        dateEl = document.createElement("div");
        dateEl.id = "invoice-date";
        dateEl.style.textAlign = "center";
        dateEl.style.marginBottom = "20px";
        dateEl.style.color = "#3d1c0c";
        dateEl.style.fontFamily = "Georgia, serif";
        invoiceBody.parentNode.insertBefore(dateEl, invoiceBody);
    }
    dateEl.textContent = `Date: ${dateStr} Time: ${timeStr}`;

    const originalContent = document.body.innerHTML;
    const invoiceContent = document.getElementById("invoice").outerHTML;
    document.body.innerHTML = invoiceContent;
    window.print();
    document.body.innerHTML = originalContent;

    document.getElementById("cart-count").textContent = count;
    dateEl.textContent = `Date: ${dateStr} Time: ${timeStr}`;
    dateEl.style.fontWeight = "bold";

    if(ticketSlideSound) {
        ticketSlideSound.currentTime = 0;
        ticketSlideSound.play();
    }

    setTimeout(() => {
        window.print();
    }, 1000);
};

const boutiqueProducts = [
    {
        id: "p1",
        name: "Artisan Truffle Assortment",
        description: "A luxurious selection of handcrafted truffles in a variety of flavors, including dark chocolate, sea salt caramel, and raspberry ganache.",
        price: 29.99,
        image: "https://example.com/images/truffle-assortment.jpg",
        stock: 50
    },
    {
        id: "p2",
        name: "Domori Pralines Selection",
        description: "An exquisite collection of Domori's finest pralines, featuring unique flavor combinations and high-quality cocoa.",
        price: 39.99,
        image: "https://example.com/images/domori-pralines.jpg",
        stock: 30
    },
    {
        id: "p3",
        name: "Single-Origin Chocolate Bar Set",
        description: "A set of single-origin chocolate bars from around the world, each with its own distinct flavor profile and cocoa percentage.",
        price: 24.99,
        image: "https://example.com/images/single-origin-bars.jpg",
        stock: 40
    }
];

function renderProducts() {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    boutiqueProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style = "border: 2px solid #3d1c0c; border-radius: 10px; padding: 15px; text-align: center; background-color: #f3e5ab; transition: transform 0.2s, box-shadow 0.2s;";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 10px;">
            <h3 style="color: #3d1c0c;">${product.name}</h3>
            <p style="color: #5d2e1a;">${product.description}</p>
            <p style="color: #3d1c0c; font-weight: bold;">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}" style="background-color: #3d1c0c; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Add to Cart</button>
            <p><strong>Price: $${product.price.toFixed(2)}</strong></p>
            <p id="stock-${product.id}" style="color: ${product.stock > 0 ? 'green' : 'red'};">${product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}</p>
            In Stock: ${product.stock}</p>
            <button onclick="addToCart('${product.id}')" style="background-color: #3d1c0c; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

window.purchaseProduct = function(productId) {
    const product = boutiqueProducts.find(p => p.id === productId);
    if (product && product.stock > 0) {
        product.stock -= 1;
        count += 1;
        localStorage.setItem("cartCount", count);
        document.getElementById(`stock-${product.id}`).textContent = product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock';
        cartCountElement.textContent = count;
        clickSound.currentTime = 0;
        if (clickSound) clickSound.play();
        renderCatalog();
        updateInvoice();
    }
};

window.onload = () => {
    renderCatalog();
    document.getElementById("cart-count").textContent = count;
};

/* GHIRARDELLI PRACTICE FOR WEB MODELING
 <!DOCTYPE html>
<html lang="en-us">
    <head>
        <script type="text/javascript">
            ;
            window.NREUM || (NREUM = {});
            NREUM.init = {
                distributed_tracing: {
                    enabled: true
                },
                privacy: {
                    cookies_enabled: true
                },
                ajax: {
                    deny_list: ["bam.nr-data.net"]
            }
        };

        ;
        NREUM.loader_config = {
            accountID: "3366902",
            trustKey: "1322840",
            agentID: "1120121849",
            licenseKey: "NRJS-14096ca56343b02121f",
            applicationID: "1120121849"
        }
        ;
        NREUM.info = {
            beacon: "bam.nr-data.net",
            errorBeacon: "bam.nr-data.net",
            licenseKey: "NRJS-14096ca56343b02121f",
            applicationID: "1120121849",
            sa: 1
        }
        window.NREUM || ((NREUM = {})),
        __nr_require = function(t, e, n) {
            function r(n) {
                if (!e[n]) {
                    var o = e[n] = {
                        exports: {}
                    };
                    t[n][0].call(o.exports, function(e) {
                        var o = t[n][1][e];
                        return r(o || e)
                    }, o, o.exports)
                }
                return e[n].exports
            }
            if ("function" === typeof __nr_require)
                return __nr_require;
            for (var o = 0; o < n.length; o++)
                r(n[o]);
            return r
        }({
            1: [function(t, e, n) {
                function r(t) {
                    try {
                        s.console && console.log(t)
                    } catch (e) {}
                }
                var o,
                    i = t("ee"),
                    a = t(31),
                    s = {};
                try {
                    o = localStorage.getItem("__nr_flags").split(",")
                    console && "function" === typeof console.log && (s.console = !0, o.indexOf("dev") !== -1 && (s.dev = !0), o.indexOf("nr_dev") !== -1 && (s.nrDev = !0))
            } catch (c) {}
            s.nrDev && i.on("internal-error"), function(t) {
                r(t.stack)
            }),
            s.dev && i.on("fn-err", function(t, e, n) {
                r(n.stack)
            }),
            s.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(s, function(t, e) {
                return t
            }).join(", ")))
        }, {}],
        2: [function(t, e, n) {
            function r(t, e, n, r, s) {
                try {
                    l ? l -= 1 : 0(s || new UncaughtException(t, e, n), !0)
                } catch (f) {
                    try {
                        i("ierr", [f, c.now(), !0])
                    } catch (d) {}
                } 
                return "function" === typeof u && u.apply(this, a(arguments))
                }
                function UncaughtException(t, e, n) {
                    this.message = t || "Uncaught error with no additional information", 
                    this.sourceURL = e, 
                    this.line = n
                }
                function o(t, e) {
                    var n = e ? null : c.now();
                    i("err", [t, n])
                }
                var i = t("handle"),
                    a = t(32),
                    s = t("ee"),
                    c = t("loader"),
                    f = t("gos"),
                    u = window.onerror,
                    d = !1,
                    p = "nr@seenError",
                if (!c.disabled) {
                    var l = 0;
                    c.features.err = !0,
                    t(1),
                    window.onerror = r;
                    try {
                        throw new Error
                    } catch (h) {
                        "stack" in h && (t(14), t(13), "addEventListener" in window && t(7), c.xhrWrappable && t(15), d = !.0)
                    }
                    s.on("fn-start", function(t, e, n) {
                        d && (l += 1)
                    }),
                    s.on("fn-err", function(t, e, n) {
                        d && !n[p] && (f(n, p, function() {
                            return !0
                        }), this.thrown = !0, o(n))
                    }),
                    s.on("fn-end", function() {
                        d && !this.thrown && l > 0 && (l -= 1)
                    }),
                    s.on("internal-error", function(t) {
                        i("ierr", [t, c.now(), !0])
                    })
                }
            }, {}],
            3: [function(t, e, n) {
                var r = t("loader");
                r.disabled || (r.features.ins = !0)
        }, {}],
        4: [function(t, e, n) {
            function r() {
                U++,
                L = g.hash,
                this[u] = y.now()
            }
            function o() {
                U--,
                g.has !== L && i(0, !0);
                var t = y.now();
                this[h] = ~~this[h] + t - this[u],
                this[d] = t
            }
            function i(t, e) {
                E.emit("newURL", ["" + g, e])
            }
            function a(t, e) {
                t.on(e, function() {
                    this[e] = y.now()
                })
            }
            var s = "-start",
                c = "-end",
                f = "-body",
                u = "fn" + s,
                d = "fn" + c,
                p = "cb" + s,
                l = "cb" + c,
                h = "jsTime",
                m = "fetch",
                v = "addEventListener",
                w = window,
                g = w.location,
                y = t("loader");
            if (w[v] && y.xhrWrappable && !y.disabled) {
                var x = t(11),
                    b = t(12),
                    E = t(9),
                    R = t(7),
                    O = t(14),
                    T = t(8),
                    S = t(15);
                    P = t(10),
                    M = t("ee"),
                    C = M.get("tracer"),
                    N = t(23);
                t(17),
                y.features.spa = !0,
                var L,
                    U = 0;
                M.on(u, r),
                b.on(p, r),
                P.on(p, r),
                M.on(d, o),
                b.on(l, o),
                P.on(l, o),
                M.buffer([u, d, "xhr-resolved"]),
                R.buffer([u]),
                O.buffer(["setTimeout" + c, "clearTimeout" + s, u]),
                S.buffer([u, "new-xhr", "send-xhr" + s]),
                T.buffer([m + s, m + "-done", m + f + s, m + f + c]),
                E.buffer(["newURL"]),
                x.buffer([u]),
                b.buffer(["propagate", p, l, "executor-err", "resolve" + s]),
                C.buffer([u, "no-" + u]),
                P.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"]),
                a(T, m + s),
                a(T, m + "-done"),
                a(P, "new-jsonp"),
                a(P, "jsonp-end"),
                a(P, "cb-start"),
                E.on("pushState-end", i),
                E.on("replaceState-end", i),
                w[v]("hashchange", i, N(!0)),
                w[v]("load", i, N(!0)),
                w[v]("popstate", function() {
                    i(0, U > 1)
                }, N(!0))
            }
        }, {}],
        5: [function(t, e, n) {
            function r() {
                var t = new PerformanceObserver(function(t, e) {
                    var n = t.getEntries();
                    s(v, [n])
                });
                try {
                    t.observe({
                        entryTypes: ["resource"]
                    })
                } catch (e) {}
            }
            function o(t) {
                if (s(v, [window.performance.getEntriesByType(w)]), window.performance["c" + p])
                    try {
                        window.performance[h](m, o, !1)
                } catch (t) {}
            }
            function i(t) {}
            if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
                var a = t("ee"),
                    s = t("handle"),
                    c = t(14),
                    f = t(13),
                    u = t(6),
                    d = t(23),
                    p = "learResourceTimings",
                    l = "addEventListener",
                    h = "removeEventListener",
                    m = "resourcetimingbufferfull",
                    v = "bstResource",
                    w = "resource",
                    g = "-start",
                    y = "-end",
                    x = "fn" + g,
                    b = "fn" + y,
                    E = "bstTimer",
                    R = "pushState",
                    O = t("loader");
                if (!O.disabled) {
                    O.features.stn = !0,
                    t(9),
                    "addEventListener" in window && t(7);
                    var T = NREUM.o.EV;
                    a.on(x, function(t, e) {
                        var n = t[0];
                        n instanceof T && (this.bstStart = O.now())
                }),
                a.on(b, function(t, e) {
                    var n = t[0];
                    n instanceof T && s("bst", [n, e, this.bstStart, O.now()])
                }),
                c.on(x, function(t, e, n) {
                    this.bstStart = O.now(),
                    this.bstType = n
                }),
                c.on(b, function(t, e) {
                    s(E, [e, this.bstStart, O.now(), this.bstType])
                }),
                f.on(x, function() {
                    this.bstStart = O.now()
                }),
                f.on(b, function(t, e) {
                    s(E, [e, this.bstStart, O.now(), "requestAnimationFrame"])
                }),
                a.on(R + g, function(t) {
                    this.time = O.now(),
                    this.startPath = location.pathname + location.hash
                }),
                a.on(R + y, function(t) {
                    s("bstHist", [location.pathname + location.hash, this.startPath, this.time])
                }),
                u() ? (s(v, [window.performance.getEntriesByType("resource")]), r()) : l in window.performance && (window.performance["c" + p] ? window.performance[l](m, o, d(!1)) : window.performance[l]("webkit" + m, o, d(!1))),
                document[l]("scroll", i, d(!1)),
                document[l]("keypress", i, d(!1)),
                document[l]("click", i, d(!1))
            }
        }
    }, {}],
        6: [function(t, e, n) {
            e.exports = function() {
                return "PerformanceObserver" in window && "function" == typeof window.PerformanceObserver
            }
        }, {}],
        7: [function(t, e, n) {
            function r(t) {
                for (var e = t; e && !e.hasOwnProperty(u);)
                    e = Object.getPrototypeOf(e);
                e && o(e)
            }
            function o(t) {
                s.inPlace(t, [u, d], "-", i)
            }
            function i(t, e) {
                return t[1]
            }
            var a = t("ee").get("events"),
                s = t("wrap-function")(a, !0),
                c = t("gos"),
                f = XMLHttpRequest,
                u = "addEventListener",
                d = "removeEventListener";
            e.exports = a,
            "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)): f.prototype.hasOwnProperty(u) && (o(window), o(f.prototype)),
            a.on(u + "-start", function(t, e) {
                var n = t[1];
                if (null !== n && ("function" == typeof n || "object" == typeof n)) {
                    var r = c(n, "nr@wrapped", function() {
                        function t() {
                            if ("function" == typeof n.handleEvent)
                                return n.handleEvent.apply(n, arguments)
                        }
                        var e = {
                            object: t,
                            "function": n
                        }[typeof n];
                        return e ? s(e, "fn-", null, e.name || "anonymous") : n
                    });
                    this.wrapped = t[1] = r
                }
            }),
            a.on(d + "-start", function(t) {
                t[1] = this.wrapped || t[1]
            })
        }, {}],
        8: [function(t, e, n) {
            function r(t, e, n) {
                var r = t[e];
                "function" == typeof r && (t[e] = function() {
                    var t = i(arguments),
                        e = {};
                    o.emit(n + "before-start", [t, e]);
                    var a;
                    e[m] && e[m].dt && (a = e[m].dt);
                    var s = r.apply(this, t);
                    ABOVE LINE IS NOT APPLICABLE
                    return o.emit(n + "start", [t, a], s), s.then(function(t) {
                        return o.emit(n + "end", [null, t], s), t
                    }, function(t) {
                        throw o.emit(n + "end", [t], s), t
                    })
                })
            }
            var o = t("ee").get("fetch"),
                i = t(32),
                a = t(31);
                LINE 365
        </script>
    </head>
 Line 16908
<div class="email_footer_pp">
    <form id="myformid" method="post" action="https://www.ghirardelli.com/newsletter/subscriber/new/" onsubmit="showMessage();">
        <input type="hidden" name="form-key" value="{{form-key}}"/>
        <input name="touch_point_source" type="hidden" value="footer">
        <label for="url2">
            <p class="email_footer_head_pp">15% Off Your Purchase</p>
        </label>

        <input type="email" name="email" id="url2" required placeholder="Sign up for emails" autocomplete="email"/>

        <input id="mysubmit" type="submit" value="Submit"/>

        <br>
        <p>Be the first to know about new chocolate launches, exclusive promotions, and get 15% off your first order.</p>
        <p style="font-size:10px; color:#808080;">
            Coupons cannot be stacked with other offers, exclusions apply.
        </p>
    </form>

    <script>
        function showMessage() {
            alert("Thank you for joining the Ghirardelli email list!");
        }
    </script>
</div> --></form> */
        