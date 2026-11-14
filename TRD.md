# TRD — Documento de Requisitos Técnicos: Milagres Exclusive Tour (SPA)

**Versão:** 1.0  
**Data:** 14/11/2026  
**Referência:** [PRD.md](./PRD.md)  

---

## 1. Arquitetura Geral (SPA)

O projeto será construído como uma **Single Page Application (SPA)** moderna utilizando **Vue 3 + TypeScript + Vite**:
- **Vue 3 (Composition API + `<script setup lang="ts">`):** Componentização reativa, limpa e tipada.
- **TypeScript:** Tipagem estrita para o catálogo de passeios (`Tour`), filtros, rotas e formulários de reserva.
- **Vite:** Bundler rápido com HMR para desenvolvimento e build otimizado para produção/apresentação.
- **Tailwind CSS:** Estilização utilitária configurada com os tokens da paleta **Costa dos Milagres Completa**.
- **Vue Router (Hash Mode):** Navegação SPA fluida (`#/`, `#/passeio/:slug`, `#/contato`) sem necessidade de configuração de servidor para apresentação.

---

## 2. Estrutura de Diretórios Proposta

```text
Milagres_Exclusive/
├── index.html                  # Entry point Vite
├── package.json                # Dependências (vue, vue-router, typescript, tailwindcss)
├── tsconfig.json               # Configuração TypeScript
├── vite.config.ts              # Configuração Vite
├── PRD.md                      # Requisitos de Produto
├── TRD.md                      # Requisitos Técnicos (este arquivo)
├── public/                     # Assets estáticos (cópia/link das fotos de site_gallery/)
└── src/
    ├── main.ts                 # Bootstrap da aplicação Vue + Router
    ├── App.vue                 # Shell da SPA (Header, RouterView, Footer, Modal)
    ├── style.css               # Diretivas Tailwind + tokens de fonte
    ├── types/
    │   └── tour.ts             # Interfaces TypeScript (Tour, TourCategory, BookingForm)
    ├── data/
    │   └── tours.ts            # Catálogo tipado dos 7 passeios
    ├── components/             # Navbar, HeroSection, TourCard, TourModal, FaqAccordion, BookingModal
    └── views/                  # HomeView.vue, TourDetailView.vue
```

---

## 3. Design System & Tokens Técnicos

### 3.1 Paleta Oficial (*06. Costa dos Milagres Completa*)
Configurada no `tailwind.config`:
- `oceano`: `#071E28` (60% Base escura — Hero, Header, Footer)
- `costa`: `#028090` (30% Estrutura / Acento secundário)
- `coral`: `#FF6B53` (10% Conversão — CTAs principais e badges)
- `sol`: `#E5A93C` (Destaques / estrelas / selos)
- `areia`: `#FAF7F2` (60% Base clara — seções de leitura e catálogo)

### 3.2 Tipografia (Google Fonts)
- `font-display`: `'Playfair Display', serif` (Títulos editoriais)
- `font-sans`: `'Plus Jakarta Sans', sans-serif` (Interface e corpo)
- `font-mono`: `'JetBrains Mono', monospace` (Preços, durações, especificações)

### 3.3 Acessibilidade & Usabilidade (WCAG 2.1)
- Contraste mínimo **4.5:1 (AA)** em textos corridos e **7:1 (AAA)** em títulos.
- Botões e links interativos com área mínima de **44px × 44px** (`min-h-[44px] min-w-[44px]`).
- Suporte a navegação por teclado (`Esc` fecha modais, `Tab` com foco visível).

---

## 4. Funcionalidades da SPA

1. **Navegação & Roteamento SPA:**
   - Barra fixa (*sticky*) com logo oficial, links de seção/rota e botão CTA de reserva.
   - Menu mobile responsivo (*drawer*).
2. **Filtro Dinâmico de Passeios:**
   - Filtros por categoria (`Todos`, `Lancha`, `Jangada`, `Buggy`, `Quadriciclo`) e por destino (`Milagres`, `Maragogi`, `Maceió`, `Gunga`) sem reload.
3. **Modal / View de Detalhes do Passeio:**
   - Galeria de fotos reais do passeio selecionado, roteiro resumido, o que está incluso, duração e botão direto para reserva.
4. **Simulador / Fluxo de Reserva (WhatsApp):**
   - Formulário rápido (Nome, Passeio, Data, Qtd. de Pessoas) que gera automaticamente o link `https://wa.me/...` com mensagem formatada.
5. **FAQ Interativo (Accordion):**
   - Respostas sobre tábua de marés, CNH para quadriciclo, política climática e segurança.

---

## 5. Performance & Otimização

- `loading="lazy"` nas imagens da galeria abaixo da dobra (*below the fold*).
- Transições suaves com CSS (`transform`, `opacity`) respeitando `prefers-reduced-motion`.
- Zero dependências pesadas de runtime (abre direto via Live Server ou servidor estático).
