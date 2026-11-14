# PRD — Site Oficial: Milagres Exclusive Tour

**Versão:** 1.1 (Alinhado para Apresentação Comercial)  
**Data:** 14/11/2026  
**Localização / Destino:** Costa dos Corais, Alagoas (São Miguel dos Milagres, Patacho e região)  

---

## 1. Visão Geral do Produto

O site da **Milagres Exclusive Tour** nesta fase é um **protótipo funcional de apresentação comercial**, criado para demonstrar ao cliente final o potencial visual, a experiência de navegação e o poder de conversão do projeto, servindo como peça decisiva para o fechamento do negócio.

### 1.1 Objetivos de Negócio
- **Fechamento Comercial:** Encantar o cliente com uma vitrine digital pronta para navegar, demonstrando domínio técnico, estética premium e foco em vendas.
- **Posicionamento na Costa dos Corais:** Unir a sofisticação de passeios privativos (lancha VIP, jangada nas piscinas naturais) à energia das trilhas de quadriciclo 4x4.
- **Conversão Direta (Simulada/Pronta):** Fluxo claro de agendamento via WhatsApp e pré-reserva, com textos e ofertas realistas de demonstração.

---

## 2. Público-Alvo

- **Turistas de alto padrão / casais / famílias** buscando experiências privativas e personalizadas em São Miguel dos Milagres e Praia do Patacho.
- **Grupos e viajantes de aventura** interessados em trilhas de quadriciclo 4x4 pelas falésias e coqueirais.
- **Usuários predominantemente mobile** (planejando ou já no destino, acessando via Instagram/Google/WhatsApp).

---

## 3. Diretrizes de Design & Identidade Visual (Baseadas no `paletas-preview`)

O projeto já conta com um estudo cromático e de direção de arte definido em `paletas-preview/README.md` e `paletas-preview/index.html`:

### 3.1 Paleta Oficial Definida: *06. Costa dos Milagres Completa*
Harmonia entre oceano profundo, sol quente e coral ao entardecer, seguindo a regra **60-30-10**:
- **60% Base & Superfície:** `#071E28` (Oceano Profundo — seções escuras/Hero/Footer) e `#FAF7F2` (Areia Clara — seções de respiro e leitura).
- **30% Estrutura & Tipografia:** `#FFFFFF` sobre fundos escuros (contraste **17.14:1 AAA**) e `#071E28` / `#028090` sobre fundos claros.
- **10% Sotaque & Conversão:** `#FF6B53` (Coral Sunset — botões de CTA e badges, contraste **6.10:1 AA** com branco) e `#E5A93C` (Sol/Ouro — detalhes e destaques).

### 3.3 Tipografia & Ritmo
- **Display / Editorial:** `Playfair Display` (títulos de impacto e luxo).
- **Interface / Corpo:** `Plus Jakarta Sans` (leitura limpa e moderna).
- **Tokens / Dados Técnicos:** `JetBrains Mono` (duração, valores, especificações).
- **Grid & Espaçamento:** Ritmo modular de `8px` (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).

---

## 4. Requisitos Funcionais (Escopo do Site)

### 4.1 Estrutura de Páginas / Seções (Landing Page + Detalhes)
1. **Header & Navegação Sticky:**
   - Logomarca oficial (`Milagres Exclusive Tour`), links âncora (Passeios, Frota, Roteiros, Segurança/FAQ, Contato) e CTA rápido ("Reservar").
2. **Hero Section (Alta Conversão):**
   - Headline editorial, subtítulo de valor (passeios privativos na Costa dos Corais), CTA principal (WhatsApp / Reserva) e visual imersivo.
3. **Catálogo de Experiências / Passeios (Foco exclusivo em São Miguel dos Milagres):**
   - **Jangada Milagres** (piscinas naturais, vela rústica em São Miguel dos Milagres)
   - **Buggy Milagres** (roteiros costeiros e praias de São Miguel dos Milagres e Patacho)
   - **Quadriciclo Milagres** (trilhas off-road, falésias e coqueirais em São Miguel dos Milagres)
   - Cards sem bordas pesadas, com fotos reais da galeria (`site_gallery/`), duração, capacidade e botão de reserva/detalhes.
4. **Frota & Estrutura:**
   - Apresentação das embarcações e quadriciclos (capacidade single/double, potência/conforto, equipamentos inclusos).
5. **Roteiros & Pontos Turísticos:**
   - Visualização clara de rotas (São Miguel dos Milagres, Patacho, Piscinas Naturais, Falésias), nível de dificuldade, tipo de terreno/mar e duração.
6. **Segurança, Políticas & FAQ (Accordion):**
   - Requisitos (ex.: CNH para quadriciclo, política climática/tábua de marés, equipamentos de segurança inclusos, política de cancelamento).
7. **Fluxo de Reserva / Contato:**
   - Formulário rápido ou redirecionamento contextualizado para WhatsApp com dados pré-preenchidos (passeio escolhido, data desejada, número de pessoas).
8. **Footer:**
   - Dados da empresa, links institucionais, redes sociais e aviso de privacidade (LGPD).

---

## 5. Requisitos Não Funcionais

- **Acessibilidade (WCAG 2.1):**
  - Contraste mínimo de **4.5:1 (AA)** para textos corridos e **7:1 (AAA)** para títulos/CTAs principais.
  - Alvos de toque mínimos de **44px × 44px** em dispositivos móveis.
  - Nunca usar ouro puro (`#E4B222`) sobre fundo branco (usar `#946800` em fundos claros) nem texto branco sobre ciano claro (`#38BDF8`).
- **Performance & SEO:**
  - Imagens otimizadas (`.webp`), carregamento rápido em redes móveis 4G, meta tags OpenGraph e estrutura semântica HTML5.
- **Responsividade:**
  - Mobile-first, adaptado para smartphones, tablets e desktops.

---

## 6. Stack Definida & Próximos Passos

- **Stack Definida:** **Vue 3 + TypeScript + Vite + Tailwind CSS + Vue Router** (SPA moderna, tipada e responsiva — detalhada no [TRD.md](./TRD.md)).
- **Acervo Visual:** Fotos reais provenientes de `paletas-preview/site_gallery/` (acervo do projeto anterior *Milagres Transparente*), utilizando exclusivamente os passeios e materiais voltados para **São Miguel dos Milagres** (`Passeio Buggy Milagres`, `Passeio Jangada Milagres`, `Passeio Quadriciclo Milagres` e `Logo`).
