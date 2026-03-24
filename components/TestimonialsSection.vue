<script setup lang="ts">
const { el, visible } = useReveal()

const testimonials = [
  {
    quote:
      'Heartline\'s tools completely transformed how we plan our corporate events. What used to take weeks now takes days.',
    name: 'Sarah Mitchell',
    role: 'Event Director',
    company: 'Apex Conferences',
    initials: 'SM',
  },
  {
    quote:
      'A Seat Awaits saved us hours of headaches. The 3D visualization is a game-changer for our wedding planning business.',
    name: 'Michael Rodriguez',
    role: 'Wedding Planner',
    company: 'Ever After Events',
    initials: 'MR',
  },
  {
    quote:
      'The collaboration features let our entire team work together seamlessly. It\'s like they built this software just for us.',
    name: 'Emily Kwon',
    role: 'Conference Organizer',
    company: 'TechSummit Global',
    initials: 'EK',
  },
]
</script>

<template>
  <section
    id="testimonials"
    ref="el"
    class="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-950"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p
          class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-3"
        >
          Testimonials
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Loved by
          <span class="text-primary dark:text-accent">Event Professionals</span>
        </h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.name"
          class="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          :class="[
            visible ? 'reveal-visible' : 'reveal-enter',
            `reveal-delay-${i + 1}`,
          ]"
        >
          <svg
            class="w-8 h-8 sm:w-10 sm:h-10 text-primary/15 dark:text-accent/15 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"
            />
          </svg>

          <blockquote
            class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-6"
          >
            "{{ testimonial.quote }}"
          </blockquote>

          <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
            <div
              class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-xs font-bold"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <div
                class="text-sm font-semibold text-slate-900 dark:text-white"
              >
                {{ testimonial.name }}
              </div>
              <div class="text-xs text-slate-500 dark:text-slate-400">
                {{ testimonial.role }}, {{ testimonial.company }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
