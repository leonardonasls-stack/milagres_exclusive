<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Menu, X, CalendarCheck } from 'lucide-vue-next';
import { LOGO_IMAGE } from '@/data/tours';

const emit = defineEmits<{
  (e: 'open-booking'): void;
}>();

const route = useRoute();
const router = useRouter();
const mobileMenuOpen = ref(false);
const isDark = ref(true);

const navLinks = [
  { label: 'Passeios', id: 'passeios' },
  { label: 'Frota', id: 'frota' },
  { label: 'Roteiros', id: 'roteiros' },
  { label: 'Segurança & FAQ', id: 'faq' },
  { label: 'Contato', id: 'contato' },
];

function updateNavbarTheme() {
  if (route.path !== '/') {
    isDark.value = window.scrollY < 120;
    return;
  }

  const checkY = 84;
  const darkSectionIds = ['frota', 'contato'];
  const passeiosEl = document.getElementById('passeios');

  // If above #passeios, we are over the Hero (dark oceano)
  if (passeiosEl) {
    const rect = passeiosEl.getBoundingClientRect();
    if (rect.top > checkY) {
      isDark.value = true;
      return;
    }
  } else {
    isDark.value = true;
    return;
  }

  for (const id of darkSectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= checkY && rect.bottom > checkY) {
        isDark.value = true;
        return;
      }
    }
  }

  isDark.value = false;
}

onMounted(() => {
  updateNavbarTheme();
  window.addEventListener('scroll', updateNavbarTheme, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateNavbarTheme);
});

watch(
  () => route.path,
  () => {
    setTimeout(updateNavbarTheme, 50);
  }
);

async function navigateToSection(id: string) {
  mobileMenuOpen.value = false;
  if (route.path !== '/') {
    await router.push('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-40 w-full backdrop-blur-md transition-colors duration-300"
    :class="
      isDark
        ? 'bg-oceano/35 text-white'
        : 'bg-areia/75 text-oceano'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
      <router-link
        to="/"
        class="flex items-center gap-3 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-lg"
      >
        <img
          :src="LOGO_IMAGE"
          alt="Milagres Exclusive Tour"
          class="h-11 w-11 rounded-full object-cover border transition-colors duration-300"
          :class="isDark ? 'border-sol/40' : 'border-oceano/20'"
        />
        <div class="leading-tight">
          <span
            class="font-display text-lg sm:text-xl font-semibold tracking-tight block transition-colors duration-300"
            :class="isDark ? 'text-white' : 'text-oceano'"
          >
            Milagres Exclusive
          </span>
          <span
            class="font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors duration-300"
            :class="isDark ? 'text-sol' : 'text-costa'"
          >
            Costa dos Corais
          </span>
        </div>
      </router-link>

      <nav class="hidden md:flex items-center gap-6" aria-label="Navegação principal">
        <button
          v-for="link in navLinks"
          :key="link.id"
          type="button"
          @click="navigateToSection(link.id)"
          class="text-sm font-medium transition-colors py-2 px-1 cursor-pointer"
          :class="
            isDark
              ? 'text-white/85 hover:text-sol'
              : 'text-oceano/85 hover:text-coral'
          "
        >
          {{ link.label }}
        </button>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="emit('open-booking')"
          class="hidden sm:inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-semibold text-sm px-5 py-2.5 min-h-[44px] rounded-full shadow-lg shadow-coral/25 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <CalendarCheck class="w-4 h-4" />
          <span>Reservar</span>
        </button>

        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg transition-colors cursor-pointer"
          :class="
            isDark
              ? 'text-white hover:bg-white/10'
              : 'text-oceano hover:bg-oceano/10'
          "
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t px-4 py-4 space-y-2 transition-colors duration-300"
      :class="
        isDark
          ? 'bg-oceano border-white/10 text-white'
          : 'bg-areia border-oceano/10 text-oceano'
      "
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        type="button"
        @click="navigateToSection(link.id)"
        class="w-full text-left flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium transition-colors cursor-pointer"
        :class="
          isDark
            ? 'text-white/90 hover:bg-white/10 hover:text-sol'
            : 'text-oceano hover:bg-oceano/5 hover:text-coral'
        "
      >
        {{ link.label }}
      </button>
      <button
        type="button"
        @click="
          mobileMenuOpen = false;
          emit('open-booking');
        "
        class="w-full mt-2 flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white font-semibold text-base px-5 min-h-[48px] rounded-full transition-colors cursor-pointer"
      >
        <CalendarCheck class="w-5 h-5" />
        <span>Reservar Passeio</span>
      </button>
    </div>
  </header>
</template>
