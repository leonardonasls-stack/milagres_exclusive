<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown, ShieldAlert } from 'lucide-vue-next';
import { FAQS } from '@/data/tours';

const openId = ref<string | null>(FAQS[0]?.id ?? null);

function toggle(id: string) {
  openId.value = openId.value === id ? null : id;
}
</script>

<template>
  <section id="faq" class="py-16 sm:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span
          class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-costa font-semibold"
        >
          <ShieldAlert class="w-4 h-4" />
          Segurança, Políticas & FAQ
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-oceano">
          Dúvidas frequentes antes do embarque
        </h2>
        <p class="text-oceano/75 text-base">
          Transparência sobre CNH, tábua de marés, equipamentos e política climática.
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="faq in FAQS"
          :key="faq.id"
          class="border border-oceano/10 rounded-2xl overflow-hidden bg-areia/50"
        >
          <button
            type="button"
            class="w-full px-6 py-4 min-h-[56px] flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-areia transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-costa"
            :aria-expanded="openId === faq.id"
            @click="toggle(faq.id)"
          >
            <span class="font-semibold text-oceano text-base">
              {{ faq.question }}
            </span>
            <ChevronDown
              class="w-5 h-5 text-costa shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openId === faq.id }"
            />
          </button>

          <div
            v-show="openId === faq.id"
            class="px-6 pb-5 pt-1 text-sm sm:text-base text-oceano/80 leading-relaxed border-t border-oceano/5"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
