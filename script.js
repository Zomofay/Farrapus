/* ===========================
   FARRAPUS RESTAURANTE ITALIANO
   script.js
=========================== */

// ===========================
// CARDÁPIO DATA
// ===========================
const cardapio = [
  // ENTRADAS
  {
    id: 1,
    nome: "Bruschetta ao Tomate",
    descricao: "Pão italiano grelhado com tomate fresco, alho, azeite e manjericão.",
    preco: 28.00,
    categoria: "entradas",
    imagem: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80",
    badge: null
  },
  {
    id: 2,
    nome: "Burrata com Prosciutto",
    descricao: "Burrata cremosa com presunto cru italiano, rúcula e redução de balsâmico.",
    preco: 56.00,
    categoria: "entradas",
    imagem: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=600&q=80",
    badge: "destaque"
  },
  {
    id: 3,
    nome: "Carpaccio de Filé",
    descricao: "Fatias finas de filé mignon com alcaparras, parmesão e azeite trufado.",
    preco: 62.00,
    categoria: "entradas",
    imagem: "https://images.unsplash.com/photo-1535400255456-984b6a9d11ef?w=600&q=80",
    badge: null
  },

  // MASSAS
  {
    id: 4,
    nome: "Lasanha Bolonhesa",
    descricao: "Lasanha artesanal com ragu de carne, molho béchamel e parmesão gratinado.",
    preco: 68.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    badge: "destaque"
  },
  {
    id: 5,
    nome: "Lasanha 4 Queijos",
    descricao: "Massa artesanal com blend de mozzarella, gorgonzola, parmesão e ricota.",
    preco: 65.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
    badge: null
  },
  {
    id: 6,
    nome: "Fettuccine ao Funghi",
    descricao: "Massa fresca com cogumelos porcini, creme de leite e raspas de limão-siciliano.",
    preco: 72.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
    badge: null
  },
  {
    id: 7,
    nome: "Spaghetti Carbonara",
    descricao: "Receita clássica romana com guanciale, ovo caipira, pecorino e pimenta preta.",
    preco: 69.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    badge: "destaque"
  },
  {
    id: 8,
    nome: "Ravioli de Ricota",
    descricao: "Massa fresca recheada com ricota e espinafre, ao molho de manteiga e sálvia.",
    preco: 74.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",
    badge: null
  },
  {
    id: 9,
    nome: "Penne ao Arrabiata",
    descricao: "Molho de tomate apimentado com alho, pimenta calabresa e manjericão fresco.",
    preco: 52.00,
    categoria: "massas",
    imagem: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&q=80",
    badge: null
  },

  // CARNES
  {
    id: 10,
    nome: "Filé ao Vinho Tinto",
    descricao: "Medalhão de filé mignon ao molho de vinho tinto e ervas finas, com risotto.",
    preco: 98.00,
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=600&q=80",
    badge: "destaque"
  },
  {
    id: 11,
    nome: "Frango à Parmegiana",
    descricao: "Peito de frango empanado com molho de tomate e parmesão gratinado.",
    preco: 62.00,
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80",
    badge: null
  },
  {
    id: 12,
    nome: "Saltimbocca alla Romana",
    descricao: "Escalope de vitela com prosciutto e sálvia, ao molho de manteiga e vinho branco.",
    preco: 86.00,
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    badge: null
  },

  // BEBIDAS
  {
    id: 13,
    nome: "Vinho Tinto da Casa",
    descricao: "Seleção especial do sommelier, garrafa 750ml.",
    preco: 89.00,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    badge: null
  },
  {
    id: 14,
    nome: "Água com Gás Italiana",
    descricao: "San Pellegrino 500ml.",
    preco: 14.00,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    badge: null
  },
  {
    id: 15,
    nome: "Suco Natural",
    descricao: "Laranja, limão ou maracujá, feito na hora.",
    preco: 18.00,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80",
    badge: null
  },
  {
    id: 16,
    nome: "Refrigerante",
    descricao: "Coca-Cola, Guaraná Antarctica ou Água Tônica — lata 350ml.",
    preco: 9.00,
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80",
    badge: null
  },

  // SOBREMESAS
  {
    id: 17,
    nome: "Tiramisù",
    descricao: "Receita clássica com biscoito savoiardi, mascarpone e espresso.",
    preco: 32.00,
    categoria: "sobremesas",
    imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    badge: "destaque"
  },
  {
    id: 18,
    nome: "Panna Cotta",
    descricao: "Creme delicado com calda de frutas vermelhas.",
    preco: 28.00,
    categoria: "sobremesas",
    imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    badge: null
  },
  {
    id: 19,
    nome: "Gelato Artesanal",
    descricao: "Escolha entre baunilha, pistache, chocolate ou frutas vermelhas.",
    preco: 24.00,
    categoria: "sobremesas",
    imagem: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80",
    badge: null
  }
];

// ===========================
// STATE
// ===========================
let carrinho = {};
let categoriaAtiva = "todos";

// ===========================
// RENDER CARDÁPIO
// ===========================
function renderCardapio(cat) {
  const grid = document.getElementById("pratosGrid");
  const pratos = cat === "todos" ? cardapio : cardapio.filter(p => p.categoria === cat);

  grid.innerHTML = "";

  pratos.forEach((prato, i) => {
    const qtd = carrinho[prato.id]?.qtd || 0;
    const card = document.createElement("div");
    card.className = "prato-card reveal";
    card.style.animationDelay = (i * 0.07) + "s";
    card.dataset.id = prato.id;

    card.innerHTML = `
      <div class="prato-img-wrap">
        <img src="${prato.imagem}" alt="${prato.nome}" loading="lazy">
        ${prato.badge ? `<span class="prato-badge ${prato.badge}">${prato.badge === "destaque" ? "⭐ Destaque" : prato.badge}</span>` : ""}
      </div>
      <div class="prato-info">
        <h3>${prato.nome}</h3>
        <p>${prato.descricao}</p>
        <div class="prato-footer">
          <span class="prato-preco">R$ ${prato.preco.toFixed(2).replace(".", ",")}</span>
          <button class="btn-add ${qtd > 0 ? "adicionado" : ""}" data-id="${prato.id}">
            ${qtd > 0 ? `✓ ${qtd} no pedido` : "+ Adicionar"}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Bind buttons
  grid.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      adicionarAoCarrinho(id);
    });
  });

  // Trigger reveal for new cards
  setTimeout(revealElements, 50);
}

// ===========================
// CARRINHO
// ===========================
function adicionarAoCarrinho(id) {
  const prato = cardapio.find(p => p.id === id);
  if (!prato) return;

  if (carrinho[id]) {
    carrinho[id].qtd++;
  } else {
    carrinho[id] = { ...prato, qtd: 1 };
  }

  atualizarCarrinho();
  renderCardapio(categoriaAtiva);

  // Pulse animation on bar
  const bar = document.getElementById("carrinhoBar");
  bar.style.transform = "translateX(-50%) translateY(0) scale(1.03)";
  setTimeout(() => {
    bar.style.transform = "translateX(-50%) translateY(0) scale(1)";
  }, 200);
}

function atualizarCarrinho() {
  const items = Object.values(carrinho);
  const totalQtd = items.reduce((s, i) => s + i.qtd, 0);
  const totalVal = items.reduce((s, i) => s + i.preco * i.qtd, 0);

  document.getElementById("carrinhoCount").textContent = `${totalQtd} item${totalQtd !== 1 ? "s" : ""}`;
  document.getElementById("carrinhoTotal").textContent = `R$ ${totalVal.toFixed(2).replace(".", ",")}`;

  const bar = document.getElementById("carrinhoBar");
  if (totalQtd > 0) {
    bar.classList.add("visible");
  } else {
    bar.classList.remove("visible");
  }
}

// ===========================
// ENVIAR PEDIDO WHATSAPP
// ===========================
document.getElementById("btnPedido").addEventListener("click", () => {
  const items = Object.values(carrinho);
  if (items.length === 0) return;

  const total = items.reduce((s, i) => s + i.preco * i.qtd, 0);

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
  items.forEach(item => {
    mensagem += `• ${item.qtd}x ${item.nome} — R$ ${(item.preco * item.qtd).toFixed(2).replace(".", ",")}\n`;
  });
  mensagem += `\n*Total: R$ ${total.toFixed(2).replace(".", ",")}*`;
  mensagem += "\n\nPoderia confirmar disponibilidade e meu pedido?";

  const url = `https://api.whatsapp.com/send/?phone=5567981122759&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
  window.open(url, "_blank");
});

// ===========================
// FILTROS
// ===========================
document.querySelectorAll(".filtro-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaAtiva = btn.dataset.cat;
    renderCardapio(categoriaAtiva);
  });
});

// ===========================
// NAVBAR SCROLL
// ===========================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Close menu on link click
mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// ===========================
// REVEAL ON SCROLL
// ===========================
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.88;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("resize", revealElements);

// ===========================
// SMOOTH SCROLL ANCHORS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===========================
// INIT
// ===========================
renderCardapio("todos");
setTimeout(revealElements, 100);
