<script setup lang="ts">
import { ref, computed } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import TourCard from '@/components/TourCard.vue';
import FleetSection from '@/components/FleetSection.vue';
import RoutesSection from '@/components/RoutesSection.vue';
import FaqAccordion from '@/components/FaqAccordion.vue';
import { TOURS } from '@/data/tours';
import type { TourCategory } from '@/types/tour';

const emit = defineEmits<{
  (e: 'open-booking', tourSlug?: string): void;
}>();

const selectedCategory = ref<TourCategory>('Todos');
const categories: TourCategory[] = ['Todos', 'Jangada', 'Buggy', 'Quadriciclo'];

const filteredTours = computed(() => {
  if (selectedCategory.value === 'Todos') return TOURS;
  return TOURS.filter((tour) => tour.category === selectedCategory.value);
});
</script>

<template>
  <div>
    <HeroSection @open-booking="emit('open-booking')" />

    <!-- Catálogo de Experiências -->
    <section id="passeios" class="py-16 sm:py-24 bg-areia">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl space-y-3">
            <span class="font-mono text-xs uppercase tracking-widest text-costa font-semibold">
              Catálogo Exclusivo
            </span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-oceano">
              Passeios em São Miguel dos Milagres
            </h2>
            <p class="text-oceano/75 text-base leading-relaxed">
              Escolha entre a tranquilidade das piscinas naturais, o visual das praias desertas ou a
              energia das trilhas 4x4.
            </p>
          </div>

          <!-- Filtro Dinâmico -->
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar passeios por categoria">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              @click="selectedCategory = cat"
              class="px-4 min-h-[44px] rounded-full text-sm font-semibold transition-colors cursor-pointer"
              :class="
                selectedCategory === cat
                  ? 'bg-oceano text-white shadow-sm'
                  : 'bg-white text-oceano/80 hover:bg-oceano/10'
              "
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TourCard
            v-for="tour in filteredTours"
            :key="tour.id"
            :tour="tour"
            @book="(slug) => emit('open-booking', slug)"
          />
        </div>
      </div>
    </section>

    <FleetSection />
    <RoutesSection />
    <FaqAccordion />
  </div>
</template>
