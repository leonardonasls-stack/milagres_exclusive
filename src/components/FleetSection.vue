<script setup lang="ts">
import { CheckCircle2, Gauge, Users } from 'lucide-vue-next';
import { FLEET } from '@/data/tours';
</script>

<template>
  <section id="frota" class="py-16 sm:py-24 bg-oceano text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl space-y-3 mb-12">
        <span class="font-mono text-xs uppercase tracking-widest text-sol">
          Frota & Estrutura
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white">
          Equipamentos revisados para sua tranquilidade
        </h2>
        <p class="text-white/75 text-base leading-relaxed">
          Embarcações tradicionais e veículos preparados para oferecer segurança, conforto e
          autonomia em cada trajeto pela Costa dos Corais.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in FLEET"
          :key="item.id"
          class="group bg-white/5 border border-white/15 hover:border-sol/60 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col"
        >
          <div class="aspect-[16/10] overflow-hidden bg-oceano">
            <img
              :src="item.image"
              :alt="item.name"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <span class="inline-block font-mono text-xs text-sol uppercase tracking-wider">
                {{ item.category }}
              </span>
              <h3 class="font-display text-xl font-bold text-white">
                {{ item.name }}
              </h3>
              <p class="text-sm text-white/75 leading-relaxed">
                {{ item.comfort }}
              </p>
            </div>

            <div class="space-y-3 pt-4 border-t border-white/10">
              <div class="flex items-center gap-2 text-xs font-mono text-white/85">
                <Users class="w-4 h-4 text-sol shrink-0" />
                <span>{{ item.capacity }}</span>
              </div>
              <div class="flex items-center gap-2 text-xs font-mono text-white/85">
                <Gauge class="w-4 h-4 text-sol shrink-0" />
                <span>{{ item.powerOrSpec }}</span>
              </div>
              <ul class="pt-2 space-y-1.5">
                <li
                  v-for="eq in item.equipment"
                  :key="eq"
                  class="flex items-center gap-2 text-xs text-white/80"
                >
                  <CheckCircle2 class="w-3.5 h-3.5 text-costa shrink-0" />
                  <span>{{ eq }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
