/*document.addEventListener("DOMContentLoaded", () => {
    const itemsBox = document.querySelector(".items-box");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        itemsBox.innerHTML = "<p>No items in cart</p>";
        return;
    }

    itemsBox.innerHTML = ""; // Clear initial message
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <div><strong>${item.name}</strong></div>
            <div>Price: ₹${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
            <div>Total: ₹${item.price * item.quantity}</div>
            <button class="remove-item" data-id="${item.id}">Remove</button>
            <hr>
        `;
        itemsBox.appendChild(itemDiv);
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", () => {
            const id = parseInt(button.getAttribute("data-id"));
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // refresh to reflect changes
        });
    });
}); 
*/
document.addEventListener("DOMContentLoaded", () => {
    const itemsBox = document.querySelector(".items-box");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Filter out any invalid/undefined items
    cart = cart.filter(item => item && item.name && item.price != null && item.quantity != null);

    if (cart.length === 0) {
        itemsBox.innerHTML = "<p>No items in cart</p>";
        localStorage.setItem("cart", JSON.stringify(cart)); // Update cleaned cart
        return;
    }

    itemsBox.innerHTML = ""; // Clear the container
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <div><strong>${item.name}</strong></div>
            <div>Price: ₹${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
            <div>Total: ₹${item.price * item.quantity}</div>
            <button class="remove-item" data-id="${item.id}">Remove</button>
            <hr>
        `;
        itemsBox.appendChild(itemDiv);
    });

    // 🧹 Remove item on button click
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", () => {
            const id = parseInt(button.getAttribute("data-id"));
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Refresh to update UI
        });
    });
});
