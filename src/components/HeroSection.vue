<script setup lang="ts">
import { ArrowRight, ShieldCheck, Compass, Sparkles } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'open-booking'): void;
}>();
</script>

<template>
  <section class="relative bg-oceano text-white overflow-hidden">
    <!-- Background Image with deep ocean gradient overlay -->
    <div class="absolute inset-0">
      <img
        src="/images/jangada/Passeio de Jangada em Milagres (1).webp"
        alt="Piscinas naturais de São Miguel dos Milagres na Costa dos Corais"
        class="w-full h-full object-cover object-center opacity-45"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-oceano via-oceano/85 to-oceano/45"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
      <div class="max-w-2xl space-y-6">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-sol text-xs font-mono uppercase tracking-wider"
        >
          <Sparkles class="w-3.5 h-3.5" />
          <span>São Miguel dos Milagres • Praia do Patacho</span>
        </div>

        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
          A Costa dos Corais no seu <span class="text-sol italic font-medium">próprio ritmo</span>.
        </h1>

        <p class="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
          Passeios privativos de jangada nas piscinas naturais, roteiros de buggy pelas praias
          preservadas e trilhas de quadriciclo 4x4 entre os coqueirais de Alagoas.
        </p>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button
            type="button"
            @click="emit('open-booking')"
            class="inline-flex items-center justify-center gap-2.5 bg-coral hover:bg-coral-hover text-white font-semibold text-base px-7 min-h-[52px] rounded-full shadow-xl shadow-coral/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Solicitar Pré-Reserva</span>
            <ArrowRight class="w-5 h-5" />
          </button>

          <a
            href="#passeios"
            class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-base px-7 min-h-[52px] rounded-full transition-colors"
          >
            <span>Explorar Passeios</span>
          </a>
        </div>

        <div class="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/15 text-sm text-white/80">
          <div class="flex items-center gap-2.5">
            <ShieldCheck class="w-5 h-5 text-sol shrink-0" />
            <span>Guias nativos credenciados & equipamentos inclusos</span>
          </div>
          <div class="flex items-center gap-2.5">
            <Compass class="w-5 h-5 text-sol shrink-0" />
            <span>Experiências 100% privativas para seu grupo</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
