<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BookingModal from '@/components/BookingModal.vue';

const bookingOpen = ref(false);
const selectedTourSlug = ref<string | undefined>(undefined);

function openBooking(tourSlug?: string) {
  selectedTourSlug.value = tourSlug;
  bookingOpen.value = true;
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-areia text-oceano">
    <Navbar @open-booking="openBooking()" />
    <main class="flex-1">
      <router-view @open-booking="openBooking" />
    </main>
    <Footer />
    <BookingModal
      :is-open="bookingOpen"
      :initial-tour-slug="selectedTourSlug"
      @close="bookingOpen = false"
    />
  </div>
</template>
