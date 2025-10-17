// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle?.addEventListener("click", () => {
  navbar?.classList.toggle("show");
  document.body.classList.toggle("menu-open");
});

// ===== HANDLE PRE-ORDER CLICK =====
document.querySelectorAll(".preorder-btn").forEach(button => {
  button.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;

    const size = card.querySelector("select")?.value || "Not selected";
    const shoeName = button.dataset.name || "Unknown Shoe";
    const shoePrice = button.dataset.price || "N/A";
    const shoeImage = card.querySelector("img")?.src || "image/default.png";

    localStorage.setItem("shoeName", shoeName);
    localStorage.setItem("shoePrice", shoePrice);
    localStorage.setItem("shoeSize", size);
    localStorage.setItem("shoeImage", shoeImage);

    window.location.href = "order.html";
  });
});

// ===== DISPLAY ORDER INFORMATION =====
if (location.pathname.includes("order.html")) {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("order-name").textContent =
      localStorage.getItem("shoeName") || "No shoe selected";
    document.getElementById("order-price").textContent =
      localStorage.getItem("shoePrice") || "No price available";
    document.getElementById("order-size").textContent =
      localStorage.getItem("shoeSize") || "No size chosen";
    document.querySelector(".product-image").src =
      localStorage.getItem("shoeImage") || "image/default.png";
  });
}

// ===== CLEAR ORDER STORAGE =====
document.getElementById("clear-order")?.addEventListener("click", () => {
  ["shoeName", "shoePrice", "shoeSize", "shoeImage"].forEach(key =>
    localStorage.removeItem(key)
  );
  location.href = "index.html";
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target)
      target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== SIMPLE LOGIN FUNCTION =====
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // simple validation (no storage)
  if (email === "" || password === "") {
    alert("Please enter both email and password!");
  } else {
    alert("Login successful!");
    window.location.href = "index.html"; // redirect to home
  }
});

// ===== SIMPLE REGISTER FUNCTION =====
document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields!");
  } else {
    alert("Registration successful!");
    window.location.href = "login.html"; // redirect to login
  }
});

// ===== END OF SCRIPT =====
