<p align="center">
  <img src="public/images/logo/logo_temp.png" alt="Milagres Exclusive Tour" width="96" height="96" />
</p>

<h1 align="center">Milagres Exclusive Tour</h1>

<p align="center">
  <strong>Single Page Application (SPA) para apresentação comercial e pré-reserva de passeios privativos na Costa dos Corais — São Miguel dos Milagres &amp; Praia do Patacho, Alagoas.</strong>
</p>

---

## Visão Geral

O **Milagres Exclusive Tour** é uma vitrine digital responsiva construída com **Vue 3**, **TypeScript**, **Vite**, **Tailwind CSS v4** e **Vue Router (Hash Mode)**. O projeto apresenta o catálogo de experiências privativas da região (Jangada nas Piscinas Naturais, Buggy Costeiro e Quadriciclo 4x4), frota, roteiros, FAQ de segurança e fluxo de pré-reserva integrado ao WhatsApp.

> [!NOTE]
> Este repositório utiliza **Hash Mode** (`createWebHashHistory`) no Vue Router para permitir hospedagem estática direta sem necessidade de reescrita de URLs no servidor.

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
| :--- | :--- | :--- |
| Framework | Vue 3 (Composition API + `<script setup lang="ts">`) | `^3.5.13` |
| Linguagem | TypeScript | `~5.7.2` |
| Bundler | Vite | `^6.x` |
| Estilização | Tailwind CSS (`@tailwindcss/postcss`) | `^4.1.4` |
| Roteamento | Vue Router (Hash Mode) | `^4.5.0` |
| Ícones | Lucide Vue Next | `^0.511.0` |

---

## Design System & Paleta Oficial

A identidade visual segue a paleta **Costa dos Milagres Completa** (regra 60-30-10), configurada via tokens `@theme` em `src/style.css`:

- **Oceano Profundo (`#071E28`)**: Base escura para Hero, Frota, Rodapé e Navbar sobre seções escuras.
- **Areia Clara (`#FAF7F2`)**: Base clara para leitura, catálogo de passeios e roteiros.
- **Costa (`#028090`)**: Acento secundário e destaques estruturais.
- **Coral Sunset (`#FF6B53`)**: CTAs principais, badges de destaque e interações de conversão.
- **Sol / Ouro (`#E5A93C`)**: Selos, detalhes e acentos sobre fundos escuros.

### Tipografia
- **Display / Editorial:** `Playfair Display`
- **Interface / Corpo:** `Plus Jakarta Sans`
- **Dados Técnicos / Preços:** `JetBrains Mono`

---

## Arquitetura do Projeto

```text
Milagres_Exclusive/
├── index.html                  # Entry point HTML5 + Google Fonts + Meta OpenGraph
├── package.json                # Dependências e scripts npm
├── postcss.config.js           # Configuração PostCSS (@tailwindcss/postcss)
├── tsconfig.json               # Configuração TypeScript estrita
├── vite.config.ts              # Configuração Vite + alias @ -> src/
├── PRD.md                      # Documento de Requisitos de Produto
├── TRD.md                      # Documento de Requisitos Técnicos
├── public/
│   └── images/                 # Acervo fotográfico (.webp) e logo oficial
│       ├── buggy/
│       ├── jangada/
│       ├── logo/
│       └── quadriciclo/
└── src/
    ├── main.ts                 # Bootstrap da aplicação Vue + Router
    ├── App.vue                 # Shell global (Navbar, RouterView, Footer, BookingModal)
    ├── style.css               # Diretivas Tailwind v4 e tokens de tema
    ├── router/
    │   └── index.ts            # Rotas SPA (#/, #/passeio/:slug)
    ├── types/
    │   └── tour.ts             # Interfaces TypeScript (Tour, FleetItem, RouteItem, FaqItem)
    ├── data/
    │   └── tours.ts            # Catálogo tipado, frota, roteiros, FAQ e helper WhatsApp
    ├── components/
    │   ├── Navbar.vue          # Barra fixa transparente com adaptação dinâmica de tema
    │   ├── HeroSection.vue     # Seção principal com CTA de pré-reserva
    │   ├── TourCard.vue        # Card de passeio com hover e borda da paleta
    │   ├── FleetSection.vue    # Apresentação da frota e equipamentos inclusos
    │   ├── RoutesSection.vue   # Mapa de roteiros, dificuldade e terreno
    │   ├── FaqAccordion.vue    # Accordion acessível (CNH, marés, clima)
    │   ├── BookingModal.vue    # Modal de pré-reserva com envio para WhatsApp
    │   └── Footer.vue          # Rodapé institucional e aviso LGPD
    └── views/
        ├── HomeView.vue        # Landing page com filtro dinâmico de passeios
        └── TourDetailView.vue  # Página de detalhes, galeria e roteiro passo a passo
```

---

## Como Executar

### Pré-requisitos
- **Node.js** `18+` (testado com `v26.13.0`)
- **npm** `9+`

### Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento com HMR
npm run dev
```

### Build de Produção

```bash
# Verificação de tipos (vue-tsc) + build otimizado em dist/
npm run build

# Pré-visualizar o build de produção localmente
npm run preview
```

> [!TIP]
> Para alterar o número de WhatsApp utilizado nos links de pré-reserva e contato, edite a constante `WHATSAPP_NUMBER` em `src/data/tours.ts`.
