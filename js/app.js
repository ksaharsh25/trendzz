// ============================
// PRODUCTS DATA — 20 ITEMS
// Using reliable Unsplash URLs
// ============================
const products = [
  {
    id: 1,
    brand: "H&M",
    name: "Men's Regular Fit Shirt",
    cat: "Men",
    tag: "Shirt",
    price: 899,
    mrp: 1799,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80",
    rating: 4.3,
    reviews: 2841,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    brand: "Zara",
    name: "Women's Floral Midi Dress",
    cat: "Women",
    tag: "Dress",
    price: 1799,
    mrp: 3999,
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80",
    rating: 4.5,
    reviews: 1532,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    brand: "Levi's",
    name: "Men's 511 Slim Fit Jeans",
    cat: "Men",
    tag: "Jeans",
    price: 2499,
    mrp: 4999,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    rating: 4.6,
    reviews: 5234,
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 4,
    brand: "Nike",
    name: "Air Max Running Sneakers",
    cat: "Men",
    tag: "Sneakers",
    price: 4999,
    mrp: 8999,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    rating: 4.7,
    reviews: 8921,
    sizes: ["6", "7", "8", "9", "10"]
  },
  {
    id: 5,
    brand: "Fabindia",
    name: "Women's Cotton Kurta",
    cat: "Women",
    tag: "Kurta",
    price: 1199,
    mrp: 2499,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    rating: 4.4,
    reviews: 3102,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    brand: "The North Face",
    name: "Men's Winter Jacket",
    cat: "Men",
    tag: "Jacket",
    price: 5999,
    mrp: 12999,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    rating: 4.5,
    reviews: 2198,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    brand: "Adidas",
    name: "Women's Track Pants",
    cat: "Women",
    tag: "Pants",
    price: 1499,
    mrp: 2999,
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",
    rating: 4.2,
    reviews: 1876,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 8,
    brand: "MANGO",
    name: "Women's Elegant Blazer",
    cat: "Women",
    tag: "Blazer",
    price: 2999,
    mrp: 5999,
    img: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&q=80",
    rating: 4.3,
    reviews: 987,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 9,
    brand: "Puma",
    name: "Kids' Sports T-Shirt",
    cat: "Kids",
    tag: "T-Shirt",
    price: 599,
    mrp: 1199,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
    rating: 4.1,
    reviews: 762,
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"]
  },
  {
    id: 10,
    brand: "Fossil",
    name: "Men's Analog Watch",
    cat: "Men",
    tag: "Watch",
    price: 7999,
    mrp: 14999,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    rating: 4.6,
    reviews: 3417,
    sizes: ["One Size"]
  },
  {
    id: 11,
    brand: "Allen Solly",
    name: "Men's Polo T-Shirt",
    cat: "Men",
    tag: "T-Shirt",
    price: 799,
    mrp: 1599,
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
    rating: 4.0,
    reviews: 4521,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 12,
    brand: "W",
    name: "Women's Anarkali Kurta Set",
    cat: "Women",
    tag: "Kurta",
    price: 1899,
    mrp: 3799,
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
    rating: 4.4,
    reviews: 2234,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 13,
    brand: "Reebok",
    name: "Kids' Classic Sneakers",
    cat: "Kids",
    tag: "Sneakers",
    price: 1299,
    mrp: 2599,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
    rating: 4.2,
    reviews: 1089,
    sizes: ["1", "2", "3", "4", "5"]
  },
  {
    id: 14,
    brand: "Sabyasachi",
    name: "Women's Silk Saree",
    cat: "Women",
    tag: "Saree",
    price: 8999,
    mrp: 17999,
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
    rating: 4.8,
    reviews: 612,
    sizes: ["Free Size"]
  },
  {
    id: 15,
    brand: "GAP",
    name: "Kids' Hoodie Sweatshirt",
    cat: "Kids",
    tag: "Jacket",
    price: 999,
    mrp: 1999,
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80",
    rating: 4.3,
    reviews: 832,
    sizes: ["4Y", "6Y", "8Y", "10Y"]
  },
  {
    id: 16,
    brand: "Tommy Hilfiger",
    name: "Men's Chino Trousers",
    cat: "Men",
    tag: "Pants",
    price: 3499,
    mrp: 6999,
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
    rating: 4.5,
    reviews: 1743,
    sizes: ["28", "30", "32", "34"]
  },
  {
    id: 17,
    brand: "Steve Madden",
    name: "Women's Block Heel Sandals",
    cat: "Women",
    tag: "Footwear",
    price: 2199,
    mrp: 4399,
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
    rating: 4.1,
    reviews: 2908,
    sizes: ["5", "6", "7", "8", "9"]
  },
  {
    id: 18,
    brand: "Raymond",
    name: "Men's Formal Blazer",
    cat: "Men",
    tag: "Blazer",
    price: 4499,
    mrp: 8999,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    rating: 4.6,
    reviews: 1256,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 19,
    brand: "Max Fashion",
    name: "Kids' Casual Dungaree",
    cat: "Kids",
    tag: "Jeans",
    price: 699,
    mrp: 1399,
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
    rating: 4.0,
    reviews: 543,
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: 20,
    brand: "Lakme",
    name: "Women's Perfume Gift Set",
    cat: "Beauty",
    tag: "Beauty",
    price: 1499,
    mrp: 2999,
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80",
    rating: 4.4,
    reviews: 3210,
    sizes: ["One Size"]
  }
];

// ============================
// STATE
// ============================
let currentCat = "All";
let currentTag = "";
let wishlist = new Set();
let cart = 0;

// ============================
// RENDER
// ============================
function renderProducts() {
  const q = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;

  let list = products.filter(p => {
    const matchCat = currentCat === "All" || p.cat === currentCat;
    const matchTag = !currentTag || p.tag === currentTag || p.name.includes(currentTag);
    const matchQ = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
    return matchCat && matchTag && matchQ;
  });

  if (sort === "low") list.sort((a, b) => a.price - b.price);
  else if (sort === "high") list.sort((a, b) => b.price - a.price);
  else if (sort === "discount") list.sort((a, b) => discount(b) - discount(a));

  document.getElementById("filter-title").textContent =
    `${currentTag || currentCat} — ${list.length} item${list.length !== 1 ? "s" : ""}`;

  document.getElementById("products").innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94969f;font-size:16px;">
        😕 No products found. <a href="#" onclick="resetFilters()" style="color:#ff3f6c;font-weight:700;">Clear filters</a>
      </div>`;
}

function discount(p) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

function cardHTML(p) {
  const off = discount(p);
  const isWished = wishlist.has(p.id);
  const sizeDots = p.sizes.slice(0, 4).map(s => `<span class="size-dot">${s}</span>`).join("");
  return `
  <div class="card">
    <div class="card-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80'" />
      <button class="wishlist-btn ${isWished ? "active" : ""}" onclick="toggleWish(event,${p.id})">${isWished ? "❤️" : "🤍"}</button>
      <span class="discount-tag">${off}% OFF</span>
    </div>
    <div class="card-info">
      <div class="card-brand">${p.brand}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-rating"><span class="star">★</span>${p.rating} <span style="opacity:.7;font-weight:400">(${p.reviews.toLocaleString()})</span></div>
      <div class="card-pricing">
        <span class="card-price">₹${p.price.toLocaleString()}</span>
        <span class="card-mrp">₹${p.mrp.toLocaleString()}</span>
        <span class="card-off">(${off}% OFF)</span>
      </div>
      <div class="card-sizes">${sizeDots}</div>
      <button class="add-bag-btn" onclick="addToBag(${p.id})">ADD TO BAG</button>
    </div>
  </div>`;
}

// ============================
// FILTERS
// ============================
function filterCat(cat, el) {
  currentCat = cat === "MEN" ? "Men" : cat;
  currentTag = "";
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  if (el) el.classList.add("active");
  renderProducts();
  scrollToProducts();
}

function filterCatBtn(cat) {
  currentCat = cat;
  currentTag = "";
  renderProducts();
  scrollToProducts();
}

function filterTag(tag) {
  currentTag = tag;
  currentCat = "All";
  renderProducts();
  scrollToProducts();
}

function resetFilters() {
  currentCat = "All";
  currentTag = "";
  document.getElementById("search").value = "";
  document.getElementById("sort").value = "";
  document.querySelectorAll(".nav-btn").forEach((b, i) => b.classList.toggle("active", i === 0));
  renderProducts();
}

function scrollToProducts() {
  document.querySelector(".products-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================
// WISHLIST
// ============================
function toggleWish(e, id) {
  e.stopPropagation();
  if (wishlist.has(id)) wishlist.delete(id);
  else wishlist.add(id);
  updateBadge("wishlist-count", wishlist.size);
  renderProducts();
}

function showWishlist() {
  if (wishlist.size === 0) {
    alert("Your wishlist is empty! ❤️ Start adding items.");
    return;
  }
  currentCat = "All";
  currentTag = "";
  const list = products.filter(p => wishlist.has(p.id));
  document.getElementById("filter-title").textContent = `My Wishlist — ${list.length} items`;
  document.getElementById("products").innerHTML = list.map(cardHTML).join("");
  scrollToProducts();
}

// ============================
// CART / WHATSAPP
// ============================
function addToBag(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  cart++;
  updateBadge("cart-count", cart);

  const msg = encodeURIComponent(
    `Hi! I'd like to order:\n\n*${p.brand} - ${p.name}*\nPrice: ₹${p.price.toLocaleString()}\n\nPlease help me complete my order. 🛍️`
  );
  document.getElementById("modal-product-name").textContent = `${p.brand} — ${p.name} (₹${p.price.toLocaleString()})`;
  document.getElementById("whatsapp-link").href = `https://wa.me/919772292121?text=${msg}`;
  document.getElementById("modal").classList.add("open");
}

function goToCart() {
  if (cart === 0) {
    alert("Your bag is empty! Start shopping 🛒");
    return;
  }
  window.open("https://wa.me/919772292121?text=" + encodeURIComponent("Hi! I'd like to complete my order. Can you help me?"), "_blank");
}

function closeModal(e) {
  if (!e || e.target === document.getElementById("modal") || !e.target) {
    document.getElementById("modal").classList.remove("open");
  }
}

function updateBadge(id, count) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = count;
  el.style.display = count > 0 ? "flex" : "none";
}

// ============================
// INIT
// ============================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateBadge("wishlist-count", 0);
  updateBadge("cart-count", 0);
});
