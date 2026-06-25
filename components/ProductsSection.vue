<script setup lang="ts">
const { el, visible } = useReveal()

const features = [
  'AI-assisted guest import',
  'Smart floor plans',
  'Guest management',
  'Instant sharing',
  'Smart seating',
  'Export and print',
]
</script>

<template>
  <section
    id="products"
    ref="el"
    class="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900/80"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p
          class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-3"
        >
          Our Products
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Tools That
          <span class="text-primary dark:text-accent">Transform</span> Events
        </h2>
      </div>

      <div
        class="max-w-6xl mx-auto"
        :class="visible ? 'reveal-visible' : 'reveal-enter'"
      >
        <div
          class="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-black/20"
        >
          <div
            class="grid grid-cols-1 lg:grid-cols-2 items-center gap-0"
          >
            <div class="p-8 sm:p-10 lg:p-14 order-2 lg:order-1">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-accent/10 mb-6"
              >
                <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span
                  class="text-xs font-semibold text-primary dark:text-accent"
                  >Flagship Product</span
                >
              </div>

              <img
                src="/a-seat-awaits-logo.svg"
                alt="A Seat Awaits"
                class="mb-6 h-20 w-20 rounded-2xl shadow-lg shadow-primary/10"
              />

              <h3
                class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                A Seat Awaits
              </h3>
              <p
                class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
              >
                From guest import to final seating chart, A Seat Awaits gives
                you the tools to organize your events efficiently.
              </p>

              <ul class="space-y-3 mb-8">
                <li
                  v-for="feature in features"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <svg
                    class="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    class="text-sm sm:text-base text-slate-700 dark:text-slate-300"
                    >{{ feature }}</span
                  >
                </li>
              </ul>

              <a
                href="https://aseatawaits.com"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Visit A Seat Awaits
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div
              class="relative order-1 lg:order-2 bg-gradient-to-br from-[#f8f1ff] via-white to-[#f5e7c9] dark:from-primary/20 dark:via-slate-900 dark:to-accent/10 p-6 sm:p-10 lg:p-12 min-h-[280px] sm:min-h-[360px] lg:min-h-[480px] flex items-center justify-center"
            >
              <div class="relative w-full max-w-xl">
                <div
                  class="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/25 rounded-2xl blur-xl"
                />
                <div
                  class="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-950 shadow-2xl shadow-primary/20 dark:shadow-black/40 border border-white/80 dark:border-slate-700/50"
                >
                  <div class="flex items-center justify-between gap-4 px-4 py-3 border-b border-slate-200/80 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-red-400" />
                      <div class="w-3 h-3 rounded-full bg-yellow-400" />
                      <div class="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                      aseatawaits.com
                    </span>
                  </div>

                  <img
                    src="/a-seat-awaits-screenshot.jpg"
                    alt="A Seat Awaits seating dashboard"
                    class="block w-full dark:hidden"
                  />
                  <img
                    src="/a-seat-awaits-screenshot-dark.jpg"
                    alt="A Seat Awaits seating dashboard"
                    class="hidden w-full dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
