<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft, Clock, Users, MapPin, Check, AlertCircle, CalendarCheck } from 'lucide-vue-next';
import { TOURS } from '@/data/tours';

const emit = defineEmits<{
  (e: 'open-booking', tourSlug?: string): void;
}>();

const route = useRoute();
const tour = computed(() => TOURS.find((t) => t.slug === route.params.slug));
const activeImage = ref<string | null>(null);

const currentHero = computed(() => activeImage.value || tour.value?.heroImage || '');
</script>

<template>
  <div v-if="tour" class="bg-areia min-h-screen pb-20">
    <!-- Top bar -->
    <div class="bg-oceano text-white pt-24 pb-6 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-sm text-white/80 hover:text-sol min-h-[44px] transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Voltar para todos os passeios</span>
        </router-link>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Galeria & Descrição -->
        <div class="lg:col-span-7 space-y-6">
          <div class="aspect-[16/10] rounded-2xl overflow-hidden bg-oceano shadow-md">
            <img :src="currentHero" :alt="tour.title" class="w-full h-full object-cover" />
          </div>

          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
            <button
              v-for="(img, idx) in tour.gallery"
              :key="img"
              type="button"
              @click="activeImage = img"
              class="aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer"
              :class="currentHero === img ? 'border-coral scale-95' : 'border-transparent opacity-80 hover:opacity-100'"
            >
              <img
                :src="img"
                :alt="`${tour.title} - foto ${idx + 1}`"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </button>
          </div>

          <div class="bg-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 class="font-display text-2xl font-bold text-oceano">Sobre a Experiência</h2>
            <p class="text-oceano/80 leading-relaxed">{{ tour.description }}</p>

            <div class="space-y-3">
              <h3 class="font-display text-lg font-bold text-oceano">Destaques</h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li
                  v-for="item in tour.highlights"
                  :key="item"
                  class="flex items-start gap-2.5 text-sm text-oceano/85"
                >
                  <Check class="w-4 h-4 text-costa shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="space-y-4 pt-4 border-t border-oceano/10">
              <h3 class="font-display text-lg font-bold text-oceano">Roteiro Resumido</h3>
              <div class="space-y-4">
                <div v-for="step in tour.itinerary" :key="step.step" class="flex gap-4">
                  <span
                    class="font-mono text-xs font-bold bg-oceano text-sol w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  >
                    {{ step.step }}
                  </span>
                  <div>
                    <h4 class="font-semibold text-oceano text-sm">{{ step.title }}</h4>
                    <p class="text-sm text-oceano/75 mt-0.5">{{ step.detail }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar de Reserva -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm sticky top-28 space-y-6">
            <div class="space-y-2">
              <span class="font-mono text-xs uppercase tracking-widest text-costa font-semibold">
                {{ tour.category }} • {{ tour.destination }}
              </span>
              <h1 class="font-display text-3xl font-bold text-oceano leading-tight">
                {{ tour.title }}
              </h1>
            </div>

            <div class="flex flex-wrap gap-4 py-4 border-y border-oceano/10 text-sm font-mono text-oceano/85">
              <span class="inline-flex items-center gap-1.5">
                <Clock class="w-4 h-4 text-costa" />
                {{ tour.duration }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <Users class="w-4 h-4 text-costa" />
                {{ tour.capacity }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <MapPin class="w-4 h-4 text-costa" />
                {{ tour.destination }}
              </span>
            </div>

            <div>
              <span class="text-xs text-oceano/60 block">Investimento</span>
              <div class="flex items-baseline gap-2">
                <span class="font-mono text-3xl font-bold text-oceano">{{ tour.priceLabel }}</span>
                <span class="text-xs text-oceano/65">{{ tour.priceNote }}</span>
              </div>
            </div>

            <div class="space-y-2.5">
              <h3 class="font-semibold text-sm text-oceano">O que está incluso:</h3>
              <ul class="space-y-2">
                <li
                  v-for="inc in tour.included"
                  :key="inc"
                  class="flex items-center gap-2 text-sm text-oceano/80"
                >
                  <Check class="w-4 h-4 text-costa shrink-0" />
                  <span>{{ inc }}</span>
                </li>
              </ul>
            </div>

            <div
              v-if="tour.requirements?.length"
              class="bg-areia rounded-xl p-4 space-y-1.5 text-xs text-oceano/80"
            >
              <div class="flex items-center gap-1.5 font-semibold text-oceano">
                <AlertCircle class="w-4 h-4 text-sol-dark" />
                <span>Requisitos importantes</span>
              </div>
              <p v-for="req in tour.requirements" :key="req">{{ req }}</p>
            </div>

            <button
              type="button"
              @click="emit('open-booking', tour.slug)"
              class="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white font-semibold text-base min-h-[52px] rounded-full shadow-lg shadow-coral/25 transition-colors cursor-pointer"
            >
              <CalendarCheck class="w-5 h-5" />
              <span>Solicitar Pré-Reserva</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
    <h1 class="font-display text-3xl font-bold text-oceano">Passeio não encontrado</h1>
    <router-link
      to="/"
      class="inline-flex items-center gap-2 bg-oceano text-white px-6 min-h-[44px] rounded-full text-sm font-semibold"
    >
      Voltar ao início
    </router-link>
  </div>
</template>
