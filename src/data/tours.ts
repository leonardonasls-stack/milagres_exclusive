import type { Tour, FleetItem, RouteItem, FaqItem } from '@/types/tour';

export const WHATSAPP_NUMBER = '5582999990000';

export const LOGO_IMAGE = '/images/logo/logo_temp.png';

export const TOURS: Tour[] = [
  {
    id: 'jangada-milagres',
    slug: 'jangada-milagres',
    title: 'Jangada Privativa nas Piscinas Naturais',
    subtitle: 'Navegação à vela rústica até os bancos de areia e corais de São Miguel dos Milagres.',
    category: 'Jangada',
    destination: 'São Miguel dos Milagres',
    duration: '2h30',
    capacity: 'Até 6 pessoas',
    priceLabel: 'R$ 380',
    priceNote: 'valor privativo por embarcação',
    badge: 'Mais Procurado',
    heroImage: '/images/jangada/Passeio de Jangada em Milagres (1).webp',
    gallery: [
      '/images/jangada/Passeio de Jangada em Milagres (1).webp',
      '/images/jangada/Passeio de Jangada em Milagres (2).webp',
      '/images/jangada/Passeio de Jangada em Milagres (3).webp',
      '/images/jangada/Passeio de Jangada em Milagres (4).webp',
      '/images/jangada/Passeio de Jangada em Milagres (5).webp',
      '/images/jangada/Passeio de Jangada em Milagres (6).webp',
    ],
    description:
      'Embarque em uma jangada tradicional exclusiva para o seu grupo, deslizando pelas águas mornas e cristalinas da Costa dos Corais na maré baixa. Um passeio silencioso, fotogênico e totalmente adaptado ao ritmo de casais, famílias ou grupos.',
    highlights: [
      'Piscinas naturais de águas transparentes na maré baixa',
      'Parada exclusiva em bancos de areia para banho e fotos',
      'Jangadeiro local experiente e certificado',
      'Ritmo privativo sem lotação de grupos grandes',
    ],
    included: [
      'Jangada privativa com jangadeiro nativo',
      'Coletes salva-vidas homologados (adulto e infantil)',
      'Máscaras de snorkel higienizadas',
      'Caixa térmica com gelo para suas bebidas',
    ],
    itinerary: [
      {
        step: '01',
        title: 'Embarque na Praia de São Miguel',
        detail: 'Recepção na orla no horário ideal da tábua de marés e briefing rápido de segurança.',
      },
      {
        step: '02',
        title: 'Travessia à Vela até os Corais',
        detail: 'Navegação tranquila sobre águas rasas com vista panorâmica dos coqueirais.',
      },
      {
        step: '03',
        title: 'Banho nas Piscinas Naturais',
        detail: 'Tempo livre para mergulho de superfície, observação de peixes e registros fotográficos.',
      },
    ],
    requirements: ['Sujeito à tábua de marés (melhor aproveitamento na maré baixa).'],
  },
  {
    id: 'buggy-milagres',
    slug: 'buggy-milagres',
    title: 'Buggy Costeiro Milagres & Patacho',
    subtitle: 'Roteiro panorâmico pelas praias desertas, mirantes e coqueirais da Rota Ecológica.',
    category: 'Buggy',
    destination: 'Milagres & Patacho',
    duration: '3h00',
    capacity: 'Até 4 passageiros',
    priceLabel: 'R$ 520',
    priceNote: 'passeio privativo por buggy',
    badge: 'Rota Completa',
    heroImage: '/images/buggy/Passeio de Buggy Milagres.webp',
    gallery: [
      '/images/buggy/Passeio de Buggy Milagres.webp',
      '/images/buggy/Passeio de Buggy Milagres (1).webp',
      '/images/buggy/Passeio de Buggy Milagres (2).webp',
      '/images/buggy/Passeio de Buggy Milagres (3).webp',
      '/images/buggy/Passeio de Buggy Milagres (4).webp',
      '/images/buggy/Passeio de Buggy Milagres (5).webp',
    ],
    description:
      'Explore os trechos mais preservados de São Miguel dos Milagres até a Praia do Patacho a bordo de um buggy clássico com bugueiro credenciado. Paradas estratégicas em praias quase desertas, túneis de coqueiros e pontos perfeitos para fotos.',
    highlights: [
      'Passagem pela Praia do Toque, Porto da Rua e Praia do Patacho',
      'Paradas para banho de mar e fotos nos coqueirais',
      'Bugueiro local com conhecimento histórico e fotográfico',
      'Conforto e ventilação natural durante todo o trajeto',
    ],
    included: [
      'Buggy privativo com motorista/guia credenciado',
      'Combustível e taxas de acesso inclusos',
      'Paradas personalizadas para fotos e banho',
      'Água mineral gelada a bordo',
    ],
    itinerary: [
      {
        step: '01',
        title: 'Saída de São Miguel dos Milagres',
        detail: 'Busca na pousada ou ponto de encontro combinado na região.',
      },
      {
        step: '02',
        title: 'Orla do Toque & Porto da Rua',
        detail: 'Trajeto costeiro com paradas em trechos preservados e sombra de coqueirais.',
      },
      {
        step: '03',
        title: 'Praia do Patacho & Retorno',
        detail: 'Tempo livre em uma das praias mais premiadas do Brasil antes do retorno.',
      },
    ],
    requirements: ['Uso recomendado de protetor solar, óculos escuros e chapéu.'],
  },
  {
    id: 'quadriciclo-milagres',
    slug: 'quadriciclo-milagres',
    title: 'Quadriciclo 4x4 Trilhas & Coqueirais',
    subtitle: 'Adrenalina controlada por trilhas off-road, mirantes naturais e praias selvagens.',
    category: 'Quadriciclo',
    destination: 'São Miguel dos Milagres',
    duration: '2h00',
    capacity: '1 ou 2 pessoas por veículo',
    priceLabel: 'R$ 340',
    priceNote: 'por quadriciclo (single ou duplo)',
    badge: 'Aventura 4x4',
    heroImage: '/images/quadriciclo/Paseio de Quadriciclo em Milagres.webp',
    gallery: [
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres.webp',
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres (1).webp',
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres (2).webp',
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres (3).webp',
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres (4).webp',
      '/images/quadriciclo/Paseio de Quadriciclo em Milagres (5).webp',
    ],
    description:
      'Assuma o guidão de um quadriciclo 4x4 automático e percorra trilhas exclusivas entre coqueirais, trechos de areia e mirantes naturais de São Miguel dos Milagres. Acompanhamento integral de guia em comboio privativo.',
    highlights: [
      'Quadriciclos automáticos de fácil pilotagem (420cc+)',
      'Trilhas exclusivas em meio aos coqueirais e falésias baixas',
      'Briefing prático antes da saída para iniciantes',
      'Opção Single (piloto) ou Double (piloto + garupa)',
    ],
    included: [
      'Quadriciclo 4x4 revisado e abastecido',
      'Capacetes higienizados com touca descartável',
      'Guia batedor acompanhando todo o percurso',
      'Instrução completa de pilotagem antes da partida',
    ],
    itinerary: [
      {
        step: '01',
        title: 'Base & Briefing de Pilotagem',
        detail: 'Entrega dos equipamentos, ajuste de capacete e teste rápido em área segura.',
      },
      {
        step: '02',
        title: 'Trilha dos Coqueirais',
        detail: 'Percurso off-road por estradas de terra, areia fofa e vegetação nativa.',
      },
      {
        step: '03',
        title: 'Mirante & Parada na Praia',
        detail: 'Chegada ao ponto panorâmico para fotos e descanso antes do retorno à base.',
      },
    ],
    requirements: [
      'Obrigatório CNH categoria B válida para o piloto.',
      'Idade mínima de 18 anos para pilotar; garupa a partir de 10 anos.',
    ],
  },
];

export const FLEET: FleetItem[] = [
  {
    id: 'fleet-jangada',
    name: 'Jangada Tradicional Exclusiva',
    category: 'Jangada',
    capacity: 'Até 6 passageiros',
    powerOrSpec: 'Vela artesanal + remo de apoio',
    comfort: 'Bancos acolchoados, toldo de sombra e caixa térmica',
    equipment: ['Coletes homologados', 'Snorkels higienizados', 'Âncora ecológica'],
    image: '/images/jangada/Passeio de Jangada em Milagres (7).webp',
  },
  {
    id: 'fleet-buggy',
    name: 'Buggy Clássico Costa dos Corais',
    category: 'Buggy',
    capacity: 'Até 4 passageiros + bugueiro',
    powerOrSpec: 'Motor 1.6 / Suspensão reforçada',
    comfort: 'Capota removível, bancos ergonômicos e espaço para bagagem leve',
    equipment: ['Cintos de segurança', 'Kit primeiros socorros', 'Água gelada a bordo'],
    image: '/images/buggy/Passeio de Buggy Milagres (6).webp',
  },
  {
    id: 'fleet-quadriciclo',
    name: 'Quadriciclo 4x4 Automático',
    category: 'Quadriciclo',
    capacity: 'Single (1) ou Double (2)',
    powerOrSpec: '420cc Automático CVT com tração 4x4',
    comfort: 'Direção leve, suspensão independente e bagageiro traseiro',
    equipment: ['Capacetes certificados', 'Toucas descartáveis', 'Rádio/guia batedor'],
    image: '/images/quadriciclo/Paseio de Quadriciclo em Milagres (2).webp',
  },
];

export const ROUTES: RouteItem[] = [
  {
    id: 'route-piscinas',
    name: 'Piscinas Naturais de Milagres',
    region: 'São Miguel dos Milagres',
    difficulty: 'Leve',
    terrain: 'Mar calmo & bancos de areia',
    duration: '2h30',
    highlights: ['Águas cristalinas', 'Observação de corais', 'Ideal para famílias'],
    tourSlug: 'jangada-milagres',
  },
  {
    id: 'route-patacho',
    name: 'Rota Costeira Milagres → Patacho',
    region: 'Rota Ecológica dos Milagres',
    difficulty: 'Leve',
    terrain: 'Orla, areia batida & coqueirais',
    duration: '3h00',
    highlights: ['Praia do Toque', 'Porto da Rua', 'Praia do Patacho'],
    tourSlug: 'buggy-milagres',
  },
  {
    id: 'route-trilha',
    name: 'Trilha Off-Road dos Coqueirais',
    region: 'São Miguel dos Milagres',
    difficulty: 'Aventura',
    terrain: 'Terra, areia fofa & mirantes',
    duration: '2h00',
    highlights: ['Pilotagem 4x4', 'Mirante panorâmico', 'Praias preservadas'],
    tourSlug: 'quadriciclo-milagres',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-cnh',
    category: 'Segurança',
    question: 'Preciso de CNH para pilotar o quadriciclo?',
    answer:
      'Sim. Para pilotar o quadriciclo é obrigatório apresentar CNH categoria B válida e física/digital (e-CNH). Passageiros na garupa não precisam de habilitação (idade mínima de 10 anos).',
  },
  {
    id: 'faq-mares',
    category: 'Clima & Marés',
    question: 'Como funciona a tábua de marés para o passeio de jangada?',
    answer:
      'As piscinas naturais ficam visíveis e ideais para banho durante a maré baixa. Ao solicitar sua reserva, confirmamos o melhor horário do dia escolhido de acordo com a tábua de marés oficial.',
  },
  {
    id: 'faq-clima',
    category: 'Clima & Marés',
    question: 'E se chover ou o mar estiver agitado no dia do passeio?',
    answer:
      'Sua segurança é prioridade. Caso as condições climáticas ou de maré inviabilizem o passeio com conforto, remarcamos sem custo adicional para outra data ou realizamos o reembolso integral do sinal.',
  },
  {
    id: 'faq-privativo',
    category: 'Reservas',
    question: 'Os passeios são realmente privativos?',
    answer:
      'Sim. Tanto a jangada quanto o buggy são exclusivos para o seu grupo. No quadriciclo, o comboio é guiado apenas para a sua reserva, sem misturar desconhecidos.',
  },
  {
    id: 'faq-equipamentos',
    category: 'Segurança',
    question: 'Quais equipamentos de segurança estão inclusos?',
    answer:
      'Fornecemos coletes salva-vidas homologados (adulto e infantil) e snorkels higienizados na jangada, além de capacetes certificados com touca descartável nos passeios de quadriciclo.',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
