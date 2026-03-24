<script setup lang="ts">
const { el, visible } = useReveal()

const services = [
  {
    title: 'Event Technology',
    description:
      'Custom digital solutions designed to streamline every aspect of event planning and execution.',
    icon: 'code',
  },
  {
    title: 'Seating Design',
    description:
      'Intelligent seating arrangement tools that make creating the perfect layout effortless.',
    icon: 'layout',
  },
  {
    title: 'Guest Management',
    description:
      'Comprehensive tools to track RSVPs, manage guest lists, and ensure everyone feels welcome.',
    icon: 'users',
  },
  {
    title: 'Real-time Collaboration',
    description:
      'Work together with your team in real-time, no matter where you are in the world.',
    icon: 'sync',
  },
  {
    title: 'Venue Planning',
    description:
      'Digital floor plans and venue layouts that bring your vision to life before the big day.',
    icon: 'map',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Data-driven insights to optimize your events and create better experiences every time.',
    icon: 'chart',
  },
]

const iconPaths: Record<string, string> = {
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  layout:
    'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  sync: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  map: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
}
</script>

<template>
  <section
    id="services"
    ref="el"
    class="py-20 sm:py-24 lg:py-32 bg-white dark:bg-slate-900/50"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p
          class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-3"
        >
          What We Do
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Solutions Built for
          <span class="text-primary dark:text-accent">Modern Events</span>
        </h2>
        <p
          class="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          From intimate gatherings to large-scale conferences, our tools adapt
          to your needs and scale with your ambitions.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
      >
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="group relative p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-accent/5 hover:-translate-y-1"
          :class="[
            visible ? 'reveal-visible' : 'reveal-enter',
            `reveal-delay-${i + 1}`,
          ]"
        >
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 dark:group-hover:bg-accent/15 transition-colors"
          >
            <svg
              class="w-6 h-6 sm:w-7 sm:h-7 text-primary dark:text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="iconPaths[service.icon]"
              />
            </svg>
          </div>

          <h3
            class="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3"
          >
            {{ service.title }}
          </h3>
          <p
            class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
