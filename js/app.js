// ============================
// PRODUCTS DATA — 7 GRAPHIC TEES
// Local product photos (img/ folder)
// ============================
const products = (typeof PRODUCTS !== 'undefined' ? PRODUCTS.map((p,i)=>({id:i+1,brand:'Trendzz',name:p.title,cat:/(women|woman|ladies|kurti|kurta sets|saree|dress|gown|lehenga|blouse|palazzo|dupatta|ethnic)/i.test(p.title)?'Women':/(shirt|tshirt|t-shirt|hoodie|jacket|jeans|track|pant|trouser|rain|cargo|mens|men)/i.test(p.title)?'Men':'Women',tag:'Fashion',price:Math.round((parseInt((p.price||'').replace(/[^\d]/g,''))||0)*1.5),mrp:Math.round(((parseInt((p.original_price||p.price||'').replace(/[^\d]/g,''))||parseInt((p.price||'').replace(/[^\d]/g,''))||0)*1.5)),imgs:[p.image],rating:parseFloat(p.rating)||4,reviews:parseInt((p.reviews||'').replace(/[^\d]/g,''))||0,sizes:['S','M','L','XL','XXL'],url:p.url})) : []);

// ============================
// STATE
// ============================
let currentCat = "Women";
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
  const dots = p.imgs.length > 1
    ? `<div class="img-dots">${p.imgs.map((im, i) => `<span class="img-dot ${i === 0 ? "active" : ""}" onclick="switchImg(event,${p.id},${i})"></span>`).join("")}</div>`
    : "";
  return `
  <div class="card">
    <div class="card-img-wrap" onmouseleave="resetImg(${p.id})">
      <img id="card-img-${p.id}" src="${p.imgs[0]}" alt="${p.name}" loading="lazy"
        onmouseover="hoverNext(${p.id})" />
      <button class="wishlist-btn ${isWished ? "active" : ""}" onclick="toggleWish(event,${p.id})">${isWished ? "❤️" : "🤍"}</button>
      <span class="discount-tag">${off}% OFF</span>
      ${dots}
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
// IMAGE GALLERY (hover to preview 2nd image, dots to jump)
// ============================
function switchImg(e, id, idx) {
  e.stopPropagation();
  const p = products.find(x => x.id === id);
  if (!p) return;
  const img = document.getElementById(`card-img-${id}`);
  if (img) img.src = p.imgs[idx];
  const wrap = img.closest(".card-img-wrap");
  wrap.querySelectorAll(".img-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
}

function hoverNext(id) {
  const p = products.find(x => x.id === id);
  if (!p || p.imgs.length < 2) return;
  const img = document.getElementById(`card-img-${id}`);
  if (img) img.src = p.imgs[1];
  const wrap = img.closest(".card-img-wrap");
  wrap.querySelectorAll(".img-dot").forEach((d, i) => d.classList.toggle("active", i === 1));
}

function resetImg(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const img = document.getElementById(`card-img-${id}`);
  if (img) img.src = p.imgs[0];
  const wrap = img.closest(".card-img-wrap");
  wrap.querySelectorAll(".img-dot").forEach((d, i) => d.classList.toggle("active", i === 0));
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
