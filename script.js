const WHATSAPP_NUMBER = "2349067666140";

// Replace the sample products and prices with your real items.
const products = [
  {
    name: "Luxury Silk Hijab",
    category: "Hijabs & Accessories",
    price: 8500,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    description: "An elegant accessory for your everyday look."
  },
  {
    name: "Elegant Gold Jewellery",
    category: "Jewellery",
    price: 12000,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700",
    description: "A beautiful touch of everyday luxury."
  },
  {
    name: "Signature Beauty Set",
    category: "Beauty",
    price: 15000,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
    description: "A lovely addition to your beauty routine."
  },
  {
    name: "Luxury Gift Box",
    category: "Gifts & More",
    price: 18000,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700",
    description: "A thoughtful gift for someone special."
  },
  {
    name: "Classic Ladies Handbag",
    category: "Accessories",
    price: 22000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    description: "A timeless piece for your collection."
  },
  {
    name: "Beauty Essentials",
    category: "Beauty",
    price: 9500,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    description: "Everyday essentials, beautifully selected."
  }
];

const productGrid = document.getElementById("product-grid");

const formatPrice = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(price);

function createProductCard(product) {
  const message = [
    "Hello Zarah's Corner!",
    "I would like to order:",
    product.name,
    "Price: " + formatPrice(product.price)
  ].join("\n");

  const orderLink =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  return `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="product-price">${formatPrice(product.price)}</p>
        <a
          class="order-btn"
          href="${orderLink}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp ↗️
        </a>
      </div>
    </article>
  `;
}

if (productGrid) {
  productGrid.innerHTML = products.map(createProductCard).join("");
}

document.getElementById("year").textContent =
  new Date().getFullYear();

// Set the general contact button to WhatsApp too.
const contactButton = document.getElementById("contact-whatsapp");

if (contactButton) {
  contactButton.href =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent("Hello Zarah's Corner! I'd like to make an enquiry.");
  contactButton.target = "_blank";
  contactButton.rel = "noopener noreferrer";
}