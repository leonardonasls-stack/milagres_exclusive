<script setup lang="ts">
import { Clock, Users, ArrowUpRight } from 'lucide-vue-next';
import type { Tour } from '@/types/tour';

defineProps<{
  tour: Tour;
}>();

const emit = defineEmits<{
  (e: 'book', tourSlug: string): void;
}>();
</script>

<template>
  <article
    class="group bg-white rounded-2xl overflow-hidden border border-oceano/10 hover:border-costa/60 shadow-sm hover:shadow-xl hover:shadow-oceano/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <router-link :to="`/passeio/${tour.slug}`" class="relative block aspect-[4/3] overflow-hidden bg-oceano/10">
      <img
        :src="tour.heroImage"
        :alt="tour.title"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-oceano/60 via-transparent to-transparent"></div>
      <span
        v-if="tour.badge"
        class="absolute top-4 left-4 bg-coral text-white font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow"
      >
        {{ tour.badge }}
      </span>
      <span
        class="absolute bottom-4 left-4 bg-oceano/85 backdrop-blur-sm text-white font-mono text-xs px-3 py-1 rounded-full"
      >
        {{ tour.category }} • {{ tour.destination }}
      </span>
    </router-link>

    <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
      <div class="space-y-2.5">
        <router-link :to="`/passeio/${tour.slug}`" class="block group-hover:text-costa transition-colors">
          <h3 class="font-display text-2xl font-bold text-oceano leading-snug">
            {{ tour.title }}
          </h3>
        </router-link>
        <p class="text-sm text-oceano/75 leading-relaxed">
          {{ tour.subtitle }}
        </p>
      </div>

      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-oceano/80 pt-3 border-t border-oceano/10">
          <span class="inline-flex items-center gap-1.5">
            <Clock class="w-4 h-4 text-costa" />
            {{ tour.duration }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <Users class="w-4 h-4 text-costa" />
            {{ tour.capacity }}
          </span>
        </div>

        <div class="flex items-end justify-between gap-3">
          <div>
            <span class="block text-xs text-oceano/60">A partir de</span>
            <span class="font-mono text-xl font-bold text-oceano">{{ tour.priceLabel }}</span>
          </div>

          <div class="flex items-center gap-2">
            <router-link
              :to="`/passeio/${tour.slug}`"
              class="inline-flex items-center justify-center gap-1 px-4 min-h-[44px] rounded-full border border-oceano/20 text-oceano hover:bg-oceano/5 text-sm font-medium transition-colors"
            >
              <span>Detalhes</span>
              <ArrowUpRight class="w-4 h-4" />
            </router-link>
            <button
              type="button"
              @click="emit('book', tour.slug)"
              class="inline-flex items-center justify-center px-5 min-h-[44px] rounded-full bg-coral hover:bg-coral-hover text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
