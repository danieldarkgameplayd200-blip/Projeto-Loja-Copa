const products = [
  {
    id: 1,
    name: "Brazil 2026 Stadium Home Nike Dri-FIT",
    category: "Camisas",
    brand: "Nike",
    source: "Nike.com",
    description: "A camisa amarela do Brasil para 2026 e aquele item que ja chega com cara de dia grande: leve, marcante e facil de usar tanto no jogo quanto no encontro com a turma.",
    price: 699.9,
    size: "P, M, G, GG, XGG",
    color: "Canario, verde menta e azul petroleo",
    image: "img/produtos/camisa-brasil-2026-home-nike.png",
    stock: 14
  },
  {
    id: 2,
    name: "Brazil 2026 Stadium Away Jordan Dri-FIT",
    category: "Camisas",
    brand: "Nike Jordan",
    source: "Nike.com",
    description: "Modelo azul da selecao brasileira para quem gosta de fugir do obvio sem perder identidade. Combina bem com jeans, bermuda ou kit completo de torcida.",
    price: 699.9,
    size: "PP, P, M, G, GG",
    color: "Azul royal e preto",
    image: "img/produtos/camisa-brasil-2026-away-jordan.png",
    stock: 10
  },
  {
    id: 3,
    name: "Mexico 26 Home Raul Jersey",
    category: "Camisas",
    brand: "adidas",
    source: "adidas.com",
    description: "Camisa verde do Mexico com desenho forte e cheio de presenca. E uma peca que parece feita para arquibancada cheia, churrasco de jogo e foto de familia na Copa.",
    price: 749.9,
    size: "PP, P, M, G, GG, 3GG",
    color: "Verde, branco e vermelho",
    image: "img/produtos/camisa-mexico-2026-home-adidas.jpg",
    stock: 12
  },
  {
    id: 4,
    name: "Argentina 26 Home Martinez Jersey",
    category: "Camisas",
    brand: "adidas",
    source: "adidas.com",
    description: "A camisa da Argentina vem com as listras tradicionais e um visual limpo. Boa para quem gosta de camisa historica, mas quer algo atual para 2026.",
    price: 749.9,
    size: "P, M, G, GG",
    color: "Branco, azul claro e preto",
    image: "img/produtos/camisa-argentina-2026-home-adidas.jpg",
    stock: 9
  },
  {
    id: 5,
    name: "Germany 26 Home Authentic Jersey",
    category: "Camisas",
    brand: "adidas",
    source: "adidas.com",
    description: "Camisa da Alemanha com corte de jogo e visual classico. E a escolha de quem prefere uma peca mais discreta, mas com bastante historia no peito.",
    price: 899.9,
    size: "P, M, G, GG",
    color: "Branco com detalhes em preto, vermelho e dourado",
    image: "img/produtos/camisa-alemanha-2026-home-adidas.jpg",
    stock: 7
  },
  {
    id: 6,
    name: "FIFA World Cup 26 Trionda Pro Ball",
    category: "Acessórios",
    brand: "adidas",
    source: "adidas News / adidas.com",
    description: "A Trionda e a bola oficial da Copa de 2026. No catalogo, ela entra como item principal para treino, colecao e decoracao do cantinho dos jogos.",
    price: 999.9,
    size: "5",
    color: "Branco, azul, verde, vermelho e dourado",
    image: "img/produtos/bola-trionda-pro-2026-adidas.png",
    stock: 8
  },
  {
    id: 7,
    name: "Brazil Nike Soccer Scarf",
    category: "Acessórios",
    brand: "Nike",
    source: "Nike.com",
    description: "Cachecol do Brasil para completar o visual nos dias de jogo. Funciona na arquibancada, na sala de casa e ate pendurado como decoracao.",
    price: 259.9,
    size: "Tamanho unico",
    color: "Azul, amarelo e verde",
    image: "img/produtos/cachecol-brasil-nike.png",
    stock: 18
  },
  {
    id: 8,
    name: "Brazil Academy Soccer Ball Size 5",
    category: "Acessórios",
    brand: "Nike",
    source: "Nike.com",
    description: "Bola tamanho 5 do Brasil para jogar sem medo de usar. E a opcao do catalogo para quem quer sair da torcida e ir para o campo.",
    price: 229.9,
    size: "5",
    color: "Amarelo, verde e azul",
    image: "img/produtos/bola-brasil-academy-nike.png",
    stock: 16
  },
  {
    id: 9,
    name: "Brazil Pro Nike Soccer Cap",
    category: "Bonés",
    brand: "Nike",
    source: "Nike.com",
    description: "Bone azul do Brasil com aba reta e ajuste traseiro. E aquele detalhe que fecha o look sem precisar pensar demais.",
    price: 219.9,
    size: "Ajustavel",
    color: "Azul royal com detalhes amarelos",
    image: "img/produtos/bone-brasil-pro-nike.png",
    stock: 20
  },
  {
    id: 10,
    name: "FIFA World Cup 26 Host Nation Mexico Snapback",
    category: "Bonés",
    brand: "adidas",
    source: "adidas.com",
    description: "Snapback verde da cidade-sede mexicana. Tem visual mais casual e funciona muito bem para montar um kit de torcedor anfitriao.",
    price: 219.9,
    size: "Ajustavel",
    color: "Verde e branco",
    image: "img/produtos/bone-mexico-world-cup-2026-adidas.jpg",
    stock: 15
  },
  {
    id: 11,
    name: "Nike Mercurial Vapor 16 Elite FG",
    category: "Chuteiras",
    brand: "Nike",
    source: "Nike.com",
    description: "Chuteira de campo para velocidade, com perfil baixo e travas para gramado natural. Boa para quem joga aberto e gosta de arrancada.",
    price: 1499.9,
    size: "37 ao 44",
    color: "Branco, vermelho universitario e azul escuro",
    image: "img/produtos/chuteira-nike-mercurial-vapor-16-elite.png",
    stock: 6
  },
  {
    id: 12,
    name: "adidas F50 Elite Firm Ground Soccer Cleats",
    category: "Chuteiras",
    brand: "adidas",
    source: "adidas.com",
    description: "F50 preta com detalhes vermelhos, pensada para campo firme. E uma chuteira com cara de jogo decisivo: leve, direta e agressiva no visual.",
    price: 1399.9,
    size: "36 ao 44",
    color: "Preto, vermelho e grafite",
    image: "img/produtos/chuteira-adidas-f50-elite.jpg",
    stock: 5
  },
  {
    id: 13,
    name: "FIFA World Cup 26 Trionda Mini Ball",
    category: "Outros",
    brand: "adidas",
    source: "adidas.com",
    description: "Mini bola Trionda para colecao, decoracao ou presente. E pequena, nao precisa inflar e fica otima na mesa de quem ama Copa.",
    price: 119.9,
    size: "Mini",
    color: "Branco, azul, verde e vermelho",
    image: "img/produtos/mini-bola-trionda-2026-adidas.jpg",
    stock: 24
  },
  {
    id: 14,
    name: "Brazil Heritage Nike Soccer Gym Sack",
    category: "Outros",
    brand: "Nike",
    source: "Nike.com",
    description: "Sacola tipo gym sack do Brasil para levar camisa, chuteira, garrafa e pequenos itens. Simples, pratica e com cara de treino em semana de jogo.",
    price: 169.9,
    size: "43 cm x 33 cm",
    color: "Azul royal",
    image: "img/produtos/mochila-saco-brasil-nike.png",
    stock: 21
  }
];

const CART_KEY = "ghost_shop_cart";
const SIGNUP_KEY = "ghost_shop_signups";
const CONTACT_KEY = "ghost_shop_contacts";
const CONTACT_EMAIL = "dsilva.157y@gmail.com";
const CONTACT_WHATSAPP = "553193094503";
let activeCategory = "Todos";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function readStorage(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  return readStorage(CART_KEY);
}

function saveCart(cart) {
  writeStorage(CART_KEY, cart);
  renderCart();
}

function findProduct(productId) {
  return products.find((product) => product.id === Number(productId));
}

function clampProductQuantity(productId, quantity) {
  const product = findProduct(productId);
  const max = product ? product.stock : 1;
  const parsedQuantity = Number(quantity) || 1;
  return Math.max(1, Math.min(parsedQuantity, max));
}

function setQuantityValue(input, quantity) {
  if (!input) return 1;

  const productId = input.dataset.id;
  const cleanQuantity = clampProductQuantity(productId, quantity);
  input.value = cleanQuantity;
  return cleanQuantity;
}

function changeQuantityInput(productId, delta, selector) {
  const input = document.querySelector(`${selector}[data-id="${productId}"]`);
  if (!input) return 1;

  return setQuantityValue(input, (Number(input.value) || 1) + delta);
}

// Cria os filtros de categoria em select e em botoes para navegacao rapida.
function renderCategoryFilters() {
  const select = document.querySelector("#categoryFilter");
  const pills = document.querySelector("#categoryPills");
  if (!select || !pills) return;

  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  select.innerHTML = categories.map((category) => `<option value="${category}">${category === "Todos" ? "Todas as categorias" : category}</option>`).join("");
  select.value = activeCategory;
  pills.innerHTML = categories.map((category) => `
    <button class="btn category-pill ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function getFilteredProducts() {
  const searchInput = document.querySelector("#searchInput");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  return products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.description} ${product.category} ${product.color} ${product.brand}`.toLowerCase();
    return matchesCategory && searchableText.includes(query);
  });
}

// Renderiza cards com todas as informacoes exigidas no enunciado.
function renderProducts() {
  const grid = document.querySelector("#productsGrid");
  const emptyState = document.querySelector("#emptyState");
  if (!grid || !emptyState) return;

  const filteredProducts = getFilteredProducts();
  emptyState.classList.toggle("d-none", filteredProducts.length > 0);

  grid.innerHTML = filteredProducts.map((product) => `
    <article class="col-sm-6 col-xl-4">
      <div class="product-card">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-category">${product.category}</span>
          <span class="stock-chip">${product.stock} un.</span>
        </div>
        <div class="product-body">
          <span class="brand-label">${product.brand} | ${product.source}</span>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-meta">
            <span><strong>Tamanho:</strong> ${product.size}</span>
            <span><strong>Cor:</strong> ${product.color}</span>
          </div>
          <div class="price-row">
            <span class="product-price">${formatCurrency(product.price)}</span>
            <span class="text-muted">${product.stock} disponíveis</span>
          </div>
          <div class="quantity-row">
            <label for="qty-${product.id}">Quantidade</label>
            <div class="quantity-control" aria-label="Selecionar quantidade de ${product.name}">
              <button type="button" data-action="decrease-select" data-id="${product.id}" aria-label="Diminuir quantidade">
                <i data-lucide="minus" aria-hidden="true"></i>
              </button>
              <input id="qty-${product.id}" class="quantity-input product-qty-input" type="number" min="1" max="${product.stock}" value="1" data-id="${product.id}" inputmode="numeric">
              <button type="button" data-action="increase-select" data-id="${product.id}" aria-label="Aumentar quantidade">
                <i data-lucide="plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline-primary" type="button" data-action="details" data-id="${product.id}">
              <i data-lucide="info" aria-hidden="true"></i>
              Detalhes
            </button>
            <button class="btn btn-primary" type="button" data-action="add" data-id="${product.id}">
              <i data-lucide="shopping-cart" aria-hidden="true"></i>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  refreshIcons();
}

function addToCart(productId, quantity = 1) {
  const product = findProduct(productId);
  if (!product) return;

  const cart = getCart();
  const currentItem = cart.find((item) => item.id === product.id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;
  const nextQuantity = Math.min(currentQuantity + quantity, product.stock);

  if (currentItem) {
    currentItem.quantity = nextQuantity;
  } else {
    cart.push({ id: product.id, quantity: nextQuantity });
  }

  saveCart(cart);
}

function removeFromCart(productId) {
  const updatedCart = getCart().filter((item) => item.id !== Number(productId));
  saveCart(updatedCart);
}

function updateCartQuantity(productId, quantity) {
  const product = findProduct(productId);
  if (!product) return;

  const cleanQuantity = Math.max(1, Math.min(Number(quantity) || 1, product.stock));
  const updatedCart = getCart().map((item) => (
    item.id === Number(productId) ? { ...item, quantity: cleanQuantity } : item
  ));

  saveCart(updatedCart);
}

// Atualiza o painel lateral e mantem o total sincronizado com o LocalStorage.
function renderCart() {
  const cartItems = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");
  const cartBadge = document.querySelector("#cartBadge");
  if (!cartItems || !cartTotal || !cartBadge) return;

  const cart = getCart();
  const detailedItems = cart
    .map((item) => ({ ...item, product: findProduct(item.id) }))
    .filter((item) => item.product);

  const totalItems = detailedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = detailedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  cartBadge.textContent = totalItems;
  cartTotal.textContent = formatCurrency(totalPrice);

  if (detailedItems.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Seu carrinho está vazio.</p>`;
    refreshIcons();
    return;
  }

  cartItems.innerHTML = detailedItems.map(({ product, quantity }) => `
    <article class="cart-item">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <p>${formatCurrency(product.price)} cada</p>
        <div class="cart-controls">
          <div class="quantity-control cart-quantity" aria-label="Quantidade de ${product.name}">
            <button type="button" data-action="decrease-cart" data-id="${product.id}" aria-label="Diminuir quantidade">
              <i data-lucide="minus" aria-hidden="true"></i>
            </button>
            <input type="number" min="1" max="${product.stock}" value="${quantity}" data-action="quantity" data-id="${product.id}" inputmode="numeric" aria-label="Quantidade de ${product.name}">
            <button type="button" data-action="increase-cart" data-id="${product.id}" aria-label="Aumentar quantidade">
              <i data-lucide="plus" aria-hidden="true"></i>
            </button>
          </div>
          <button class="btn btn-sm btn-outline-light" type="button" data-action="remove" data-id="${product.id}">
            <i data-lucide="trash-2" aria-hidden="true"></i>
            Remover
          </button>
        </div>
      </div>
    </article>
  `).join("");

  refreshIcons();
}

function openProductModal(productId) {
  const product = findProduct(productId);
  if (!product || !window.bootstrap) return;

  document.querySelector("#modalCategory").textContent = `${product.category} | ${product.brand}`;
  document.querySelector("#productModalTitle").textContent = product.name;
  document.querySelector("#modalImage").src = product.image;
  document.querySelector("#modalImage").alt = product.name;
  document.querySelector("#modalDescription").textContent = product.description;
  document.querySelector("#modalPrice").textContent = formatCurrency(product.price);
  document.querySelector("#modalSize").textContent = product.size;
  document.querySelector("#modalColor").textContent = product.color;
  document.querySelector("#modalStock").textContent = `${product.stock} unidades`;
  document.querySelector("#modalSource").textContent = product.source;
  const modalQuantityInput = document.querySelector("#modalQuantity");
  modalQuantityInput.value = 1;
  modalQuantityInput.max = product.stock;
  modalQuantityInput.dataset.id = product.id;
  document.querySelector("#modalAddButton").dataset.id = product.id;

  const modalElement = document.querySelector("#productModal");
  const productModal = bootstrap.Modal.getOrCreateInstance(modalElement);
  productModal.show();
  refreshIcons();
}

let paypalButtonsRendered = false;
const PAYPAL_API_BASE = "../paypal/api";
const PAYPAL_CHECKOUT_CURRENCY = "BRL";

function getCartSummary() {
  const items = getCart()
    .map((item) => ({ ...item, product: findProduct(item.id) }))
    .filter((item) => item.product);

  return {
    items,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  };
}

function setPayPalStatus(message, type = "info") {
  const status = document.querySelector("#paypalStatus");
  if (!status) return;

  status.textContent = message;
  status.className = `paypal-status ${type}`;
}

function parsePayPalApiResponse(response) {
  return response.json()
    .catch(() => ({}))
    .then((payload) => {
      if (!response.ok) {
        throw new Error(payload.error || "Erro na API local do PayPal.");
      }

      return payload;
    });
}

function loadPayPalSdk() {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const settings = window.paypalSettings || {};
    const paypalClientId = settings.clientId || "sb";
    const sdkScript = document.createElement("script");
    const params = new URLSearchParams({
      "client-id": paypalClientId,
      currency: PAYPAL_CHECKOUT_CURRENCY,
      components: "buttons"
    });

    sdkScript.src = `https://www.paypal.com/sdk/js?${params.toString()}`;
    sdkScript.onload = resolve;
    sdkScript.onerror = reject;
    document.head.appendChild(sdkScript);
  });
}

function buildPayPalDescription(summary) {
  const names = summary.items
    .slice(0, 3)
    .map((item) => item.product.name)
    .join(", ");

  const extra = summary.items.length > 3 ? ` + ${summary.items.length - 3} item(ns)` : "";
  return `Ghost Shop - ${summary.totalItems} item(ns): ${names}${extra}`;
}

function renderPayPalButtons() {
  const container = document.querySelector("#paypal-button-container");
  if (!container || !window.paypal) return Promise.reject(new Error("PayPal não foi carregado."));

  container.innerHTML = "";

  return paypal.Buttons({
    style: {
      layout: "vertical",
      color: "gold",
      shape: "rect",
      label: "paypal"
    },

    createOrder() {
      const summary = getCartSummary();
      if (summary.totalItems === 0) {
        throw new Error("Carrinho vazio.");
      }

      setPayPalStatus("Criando pedido na API local do PayPal...");

      return fetch(`${PAYPAL_API_BASE}/create-order.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value: summary.totalPrice.toFixed(2),
          currency: PAYPAL_CHECKOUT_CURRENCY,
          description: buildPayPalDescription(summary)
        })
      })
        .then(parsePayPalApiResponse)
        .then((order) => {
          if (!order.id) {
            throw new Error("A API local não retornou o ID do pedido.");
          }

          setPayPalStatus("Pedido criado. Finalize o pagamento na janela do PayPal.");
          return order.id;
        });
    },

    onApprove(data) {
      setPayPalStatus("Pagamento aprovado. Capturando a transação...");

      return fetch(`${PAYPAL_API_BASE}/capture-order.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      })
        .then(parsePayPalApiResponse)
        .then((details) => {
          const payerName = details.payer?.name?.given_name || "cliente";
          setPayPalStatus(`Pagamento concluído com sucesso. Obrigado, ${payerName}!`, "success");
          saveCart([]);
        });
    },

    onCancel(data) {
      setPayPalStatus(`Compra cancelada. Pedido PayPal: ${data.orderID}.`);
    },

    onError(error) {
      console.error("Erro no pagamento PayPal:", error);
      setPayPalStatus("Ocorreu um problema no pagamento. Confira a pasta /paypal e tente novamente.", "error");
    }
  }).render("#paypal-button-container")
    .then(() => {
      paypalButtonsRendered = true;
      setPayPalStatus("Botões PayPal prontos usando a pasta local /paypal.");
    });
}

function handleCheckout() {
  const summary = getCartSummary();
  const container = document.querySelector("#paypal-button-container");
  if (!container) return;

  if (summary.totalItems === 0) {
    alert("Adicione produtos ao carrinho antes de pagar com PayPal.");
    return;
  }

  container.classList.remove("d-none");
  setPayPalStatus(`Total enviado ao PayPal: ${formatCurrency(summary.totalPrice)}.`);

  if (paypalButtonsRendered) {
    return;
  }

  loadPayPalSdk()
    .then(renderPayPalButtons)
    .catch((error) => {
      console.error("Erro ao carregar PayPal:", error);
      setPayPalStatus("Não foi possível carregar o SDK do PayPal. Verifique se o XAMPP e a pasta /paypal estão funcionando.", "error");
    });
}

function setupCatalogPage() {
  if (!document.querySelector("#productsGrid")) return;

  renderCategoryFilters();
  renderProducts();
  renderCart();

  document.querySelector("#searchInput").addEventListener("input", renderProducts);
  document.querySelector("#categoryFilter").addEventListener("change", (event) => {
    activeCategory = event.target.value;
    renderCategoryFilters();
    renderProducts();
  });

  document.querySelector("#categoryPills").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    document.querySelector("#categoryFilter").value = activeCategory;
    renderCategoryFilters();
    renderProducts();
  });

  document.querySelector("#productsGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    if (button.dataset.action === "decrease-select") {
      changeQuantityInput(button.dataset.id, -1, ".product-qty-input");
    }

    if (button.dataset.action === "increase-select") {
      changeQuantityInput(button.dataset.id, 1, ".product-qty-input");
    }

    if (button.dataset.action === "add") {
      const quantityInput = document.querySelector(`.product-qty-input[data-id="${button.dataset.id}"]`);
      addToCart(button.dataset.id, setQuantityValue(quantityInput, quantityInput?.value));
    }

    if (button.dataset.action === "details") openProductModal(button.dataset.id);
  });

  document.querySelector("#productsGrid").addEventListener("change", (event) => {
    if (event.target.classList.contains("product-qty-input")) {
      setQuantityValue(event.target, event.target.value);
    }
  });

  document.querySelector("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    if (button.dataset.action === "remove") {
      removeFromCart(button.dataset.id);
    }

    if (button.dataset.action === "decrease-cart") {
      const cartItem = getCart().find((item) => item.id === Number(button.dataset.id));
      updateCartQuantity(button.dataset.id, (cartItem?.quantity || 1) - 1);
    }

    if (button.dataset.action === "increase-cart") {
      const cartItem = getCart().find((item) => item.id === Number(button.dataset.id));
      updateCartQuantity(button.dataset.id, (cartItem?.quantity || 1) + 1);
    }
  });

  document.querySelector("#cartItems").addEventListener("change", (event) => {
    if (event.target.dataset.action === "quantity") {
      updateCartQuantity(event.target.dataset.id, event.target.value);
    }
  });

  document.querySelector("#modalQuantityControls").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const quantityInput = document.querySelector("#modalQuantity");
    const delta = button.dataset.action === "decrease-modal" ? -1 : 1;
    setQuantityValue(quantityInput, (Number(quantityInput.value) || 1) + delta);
  });

  document.querySelector("#modalQuantity").addEventListener("change", (event) => {
    setQuantityValue(event.target, event.target.value);
  });

  document.querySelector("#modalAddButton").addEventListener("click", (event) => {
    const quantityInput = document.querySelector("#modalQuantity");
    addToCart(event.currentTarget.dataset.id, setQuantityValue(quantityInput, quantityInput.value));
  });

  document.querySelector("#paypalButton").addEventListener("click", handleCheckout);
}

function setupSignupForm() {
  const form = document.querySelector("#signupForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const signups = readStorage(SIGNUP_KEY);
    signups.push({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      team: formData.get("team"),
      category: formData.get("category"),
      createdAt: new Date().toISOString()
    });
    writeStorage(SIGNUP_KEY, signups);
    form.reset();
    document.querySelector("#signupFeedback").textContent = "Cadastro salvo no LocalStorage.";
  });
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const contact = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      createdAt: new Date().toISOString()
    };
    const messages = readStorage(CONTACT_KEY);
    messages.push(contact);
    writeStorage(CONTACT_KEY, messages);

    const messageBody = [
      "Olá, Ghost Shop!",
      "",
      `Nome: ${contact.name}`,
      `E-mail: ${contact.email}`,
      `Assunto: ${contact.subject}`,
      "",
      `Mensagem: ${contact.message}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(messageBody)}`;
    const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Contato Ghost Shop - ${contact.subject}`)}&body=${encodeURIComponent(messageBody)}`;

    window.open(whatsappUrl, "_blank", "noopener");
    window.location.href = emailUrl;

    form.reset();
    document.querySelector("#contactFeedback").textContent = "Mensagem preparada para WhatsApp e e-mail.";
  });
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupCatalogPage();
  setupSignupForm();
  setupContactForm();
  refreshIcons();
});
