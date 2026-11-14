<script setup lang="ts">
import { MapPin, Clock, Mountain, ArrowRight } from 'lucide-vue-next';
import { ROUTES } from '@/data/tours';

function difficultyClass(level: string) {
  if (level === 'Aventura') return 'bg-coral/15 text-coral border-coral/30';
  return 'bg-costa/15 text-costa border-costa/30';
}
</script>

<template>
  <section id="roteiros" class="py-16 sm:py-24 bg-areia">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl space-y-3 mb-12">
        <span class="font-mono text-xs uppercase tracking-widest text-costa font-semibold">
          Roteiros & Pontos Turísticos
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-oceano">
          De piscinas naturais a trilhas entre coqueirais
        </h2>
        <p class="text-oceano/75 text-base leading-relaxed">
          Visualize o perfil de cada rota em São Miguel dos Milagres e Praia do Patacho para
          escolher a experiência ideal para o seu dia.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="route in ROUTES"
          :key="route.id"
          class="bg-white rounded-2xl p-6 border border-oceano/10 hover:border-coral/60 shadow-sm hover:shadow-lg hover:shadow-oceano/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <span class="inline-flex items-center gap-1.5 text-xs font-mono text-oceano/70">
                <MapPin class="w-3.5 h-3.5 text-costa" />
                {{ route.region }}
              </span>
              <span
                class="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border"
                :class="difficultyClass(route.difficulty)"
              >
                {{ route.difficulty }}
              </span>
            </div>

            <h3 class="font-display text-xl font-bold text-oceano">
              {{ route.name }}
            </h3>

            <div class="space-y-2 text-xs font-mono text-oceano/80">
              <div class="flex items-center gap-2">
                <Mountain class="w-4 h-4 text-costa shrink-0" />
                <span>{{ route.terrain }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-costa shrink-0" />
                <span>Duração média: {{ route.duration }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="tag in route.highlights"
                :key="tag"
                class="text-xs bg-areia text-oceano/85 px-2.5 py-1 rounded-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <router-link
            :to="`/passeio/${route.tourSlug}`"
            class="inline-flex items-center justify-between w-full px-4 min-h-[44px] rounded-xl bg-areia hover:bg-oceano hover:text-white text-oceano font-semibold text-sm transition-colors"
          >
            <span>Ver passeio desta rota</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
