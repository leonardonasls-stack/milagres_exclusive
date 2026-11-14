<script setup lang="ts">
import { reactive, watch, onMounted, onUnmounted } from 'vue';
import { X, MessageCircle } from 'lucide-vue-next';
import { TOURS, buildWhatsAppUrl } from '@/data/tours';

const props = defineProps<{
  isOpen: boolean;
  initialTourSlug?: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const form = reactive({
  name: '',
  tourSlug: props.initialTourSlug || TOURS[0].slug,
  date: '',
  guests: 2,
  notes: '',
});

watch(
  () => props.initialTourSlug,
  (newSlug) => {
    if (newSlug) {
      form.tourSlug = newSlug;
    }
  }
);

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

function submitBooking() {
  const selectedTour = TOURS.find((t) => t.slug === form.tourSlug) || TOURS[0];
  const formattedDate = form.date ? form.date.split('-').reverse().join('/') : 'A definir';
  const message = [
    `Olá, Milagres Exclusive Tour! Gostaria de solicitar uma pré-reserva:`,
    `• Nome: ${form.name || 'Visitante'}`,
    `• Passeio: ${selectedTour.title}`,
    `• Data desejada: ${formattedDate}`,
    `• Pessoas: ${form.guests}`,
    form.notes ? `• Observações: ${form.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  emit('close');
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-oceano/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      @click.self="emit('close')"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div class="bg-oceano text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 id="booking-modal-title" class="font-display text-xl font-bold">
              Pré-Reserva Privativa
            </h3>
            <p class="text-xs text-white/75 mt-0.5">
              Atendimento direto via WhatsApp com confirmação de maré.
            </p>
          </div>
          <button
            type="button"
            @click="emit('close')"
            aria-label="Fechar modal"
            class="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="submitBooking" class="p-6 space-y-4">
          <div>
            <label for="booking-name" class="block text-sm font-semibold text-oceano mb-1">
              Seu Nome
            </label>
            <input
              id="booking-name"
              v-model="form.name"
              type="text"
              required
              placeholder="Ex.: Mariana Silva"
              class="w-full px-4 min-h-[44px] rounded-xl border border-oceano/20 text-oceano focus:outline-none focus:ring-2 focus:ring-costa"
            />
          </div>

          <div>
            <label for="booking-tour" class="block text-sm font-semibold text-oceano mb-1">
              Passeio Desejado
            </label>
            <select
              id="booking-tour"
              v-model="form.tourSlug"
              class="w-full px-4 min-h-[44px] rounded-xl border border-oceano/20 text-oceano bg-white focus:outline-none focus:ring-2 focus:ring-costa"
            >
              <option v-for="tour in TOURS" :key="tour.slug" :value="tour.slug">
                {{ tour.title }} ({{ tour.priceLabel }})
              </option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="booking-date" class="block text-sm font-semibold text-oceano mb-1">
                Data Prevista
              </label>
              <input
                id="booking-date"
                v-model="form.date"
                type="date"
                class="w-full px-4 min-h-[44px] rounded-xl border border-oceano/20 text-oceano focus:outline-none focus:ring-2 focus:ring-costa"
              />
            </div>

            <div>
              <label for="booking-guests" class="block text-sm font-semibold text-oceano mb-1">
                Qtd. de Pessoas
              </label>
              <input
                id="booking-guests"
                v-model.number="form.guests"
                type="number"
                min="1"
                max="12"
                required
                class="w-full px-4 min-h-[44px] rounded-xl border border-oceano/20 text-oceano focus:outline-none focus:ring-2 focus:ring-costa"
              />
            </div>
          </div>

          <div>
            <label for="booking-notes" class="block text-sm font-semibold text-oceano mb-1">
              Observações (opcional)
            </label>
            <textarea
              id="booking-notes"
              v-model="form.notes"
              rows="2"
              placeholder="Ex.: Pousada onde está hospedado, crianças no grupo..."
              class="w-full px-4 py-2.5 rounded-xl border border-oceano/20 text-oceano focus:outline-none focus:ring-2 focus:ring-costa"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white font-semibold text-base min-h-[48px] rounded-full shadow-lg shadow-coral/25 transition-colors cursor-pointer"
          >
            <MessageCircle class="w-5 h-5" />
            <span>Enviar Solicitação no WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>
