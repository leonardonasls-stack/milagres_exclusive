<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { MapPin, Phone, Instagram } from 'lucide-vue-next';
import { LOGO_IMAGE, buildWhatsAppUrl } from '@/data/tours';

const route = useRoute();
const router = useRouter();

const whatsappHref = buildWhatsAppUrl(
  'Olá! Gostaria de mais informações sobre os passeios em São Miguel dos Milagres.'
);

async function navigateToSection(id: string) {
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
  <footer id="contato" class="bg-oceano text-white border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img
              :src="LOGO_IMAGE"
              alt="Milagres Exclusive Tour"
              class="h-11 w-11 rounded-full object-cover border border-sol/40"
            />
            <div>
              <span class="font-display text-lg font-bold block">Milagres Exclusive Tour</span>
              <span class="font-mono text-[11px] uppercase tracking-widest text-sol">
                Costa dos Corais • AL
              </span>
            </div>
          </div>
          <p class="text-sm text-white/75 leading-relaxed">
            Experiências privativas de jangada, buggy e quadriciclo em São Miguel dos Milagres e
            Praia do Patacho.
          </p>
        </div>

        <div class="space-y-3">
          <h4 class="font-mono text-xs uppercase tracking-widest text-sol">Navegação</h4>
          <ul class="space-y-2 text-sm text-white/80">
            <li><button type="button" @click="navigateToSection('passeios')" class="hover:text-sol transition-colors cursor-pointer">Passeios</button></li>
            <li><button type="button" @click="navigateToSection('frota')" class="hover:text-sol transition-colors cursor-pointer">Frota & Estrutura</button></li>
            <li><button type="button" @click="navigateToSection('roteiros')" class="hover:text-sol transition-colors cursor-pointer">Roteiros</button></li>
            <li><button type="button" @click="navigateToSection('faq')" class="hover:text-sol transition-colors cursor-pointer">Segurança & FAQ</button></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="font-mono text-xs uppercase tracking-widest text-sol">Atendimento</h4>
          <ul class="space-y-2.5 text-sm text-white/80">
            <li class="flex items-center gap-2">
              <MapPin class="w-4 h-4 text-sol shrink-0" />
              <span>São Miguel dos Milagres, Alagoas</span>
            </li>
            <li>
              <a
                :href="whatsappHref"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:text-sol transition-colors"
              >
                <Phone class="w-4 h-4 text-sol shrink-0" />
                <span>+55 (82) 99999-0000 (WhatsApp)</span>
              </a>
            </li>
            <li class="flex items-center gap-2">
              <Instagram class="w-4 h-4 text-sol shrink-0" />
              <span>@milagresexclusivetour</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60"
      >
        <p>© 2026 Milagres Exclusive Tour. Todos os direitos reservados.</p>
        <p>
          Privacidade (LGPD): Seus dados de pré-reserva são usados exclusivamente para atendimento
          via WhatsApp.
        </p>
      </div>
    </div>
  </footer>
</template>
