let quantity = 3;

function changeQuantity(amt) {
    quantity = Math.max(3, Math.min(20, quantity + amt));
    document.getElementById('quantity-label').innerText = quantity;
}

function toggleSpecial() {
    const isEnabled = document.getElementById('specialRequest').checked;
    const options = document.getElementById('special-options');
    options.classList.toggle('hidden', !isEnabled);
}

function updateUI() {
    const type = parseInt(document.getElementById('type').value);
    const body = document.getElementById('main-body');
    
    // Your exact switch logic from SwiftUI
    const colors = [
        'rgba(165, 42, 42, 0.3)', // 0: Brown
        'rgba(255, 0, 0, 0.3)',   // 1: Red
        'rgba(152, 255, 152, 0.3)', // 2: Mint
        'rgba(255, 192, 203, 0.3)', // 3: Pink
        'rgba(128, 128, 128, 0.3)', // 4: Gray
        'rgba(0, 0, 255, 0.3)',     // 5: Blue
        'rgba(255, 255, 0, 0.3)',   // 6: Yellow
        'rgba(255, 165, 0, 0.3)'    // 7: Orange
    ];

    body.style.backgroundColor = colors[type] || 'orange';
}
