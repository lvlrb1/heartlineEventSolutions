<script setup lang="ts">
const { el, visible } = useReveal()

const features = [
  'Interactive 3D seating visualization',
  'Drag-and-drop table arrangement',
  'Real-time team collaboration',
  'Smart guest list management',
  'Export & share floor plans',
  'Multiple table shapes & sizes',
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

              <h3
                class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                A Seat Awaits
              </h3>
              <p
                class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
              >
                The interactive seating arrangement platform that makes designing
                the perfect floor plan a joy. Drag, drop, and visualize your
                event layout in stunning 3D — then share it with your team
                instantly.
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
              class="relative order-1 lg:order-2 bg-gradient-to-br from-primary/5 via-accent/10 to-primary-light/5 dark:from-primary/10 dark:via-accent/5 dark:to-primary-light/10 p-8 sm:p-12 lg:p-16 min-h-[280px] sm:min-h-[360px] lg:min-h-[480px] flex items-center justify-center"
            >
              <div class="relative w-full max-w-sm">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"
                />
                <div
                  class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div class="flex items-center gap-2 mb-6">
                    <div class="w-3 h-3 rounded-full bg-red-400" />
                    <div class="w-3 h-3 rounded-full bg-yellow-400" />
                    <div class="w-3 h-3 rounded-full bg-green-400" />
                    <span
                      class="ml-2 text-xs text-slate-400 dark:text-slate-500"
                      >Floor Plan Editor</span
                    >
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-lg bg-primary/10 dark:bg-accent/10 flex items-center justify-center"
                      >
                        <div
                          class="w-5 h-5 rounded-full border-2 border-primary dark:border-accent"
                        />
                      </div>
                      <div class="flex-1">
                        <div
                          class="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4"
                        />
                        <div
                          class="h-2 bg-slate-100 dark:bg-slate-700/50 rounded-full w-1/2 mt-1.5"
                        />
                      </div>
                    </div>

                    <div
                      class="grid grid-cols-3 gap-2 sm:gap-3"
                    >
                      <div
                        v-for="n in 6"
                        :key="n"
                        class="aspect-square rounded-xl flex items-center justify-center"
                        :class="
                          n === 2
                            ? 'bg-primary/15 dark:bg-accent/15 ring-2 ring-primary/30 dark:ring-accent/30'
                            : 'bg-slate-100 dark:bg-slate-700/50'
                        "
                      >
                        <div
                          class="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                          :class="
                            n === 2
                              ? 'bg-primary/40 dark:bg-accent/40'
                              : 'bg-slate-200 dark:bg-slate-600'
                          "
                        />
                      </div>
                    </div>

                    <div class="flex items-center justify-between pt-2">
                      <div
                        class="h-2 bg-green-200 dark:bg-green-800/40 rounded-full w-1/3"
                      />
                      <div
                        class="text-[10px] text-slate-400 dark:text-slate-500"
                      >
                        6 tables · 48 seats
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <div
            v-for="(product, i) in [
              {
                name: 'Event Check-In',
                desc: 'Streamlined digital check-in for seamless guest arrivals.',
                status: 'Coming Soon',
              },
              {
                name: 'Vendor Connect',
                desc: 'Connect with trusted vendors and manage all contracts in one place.',
                status: 'Coming Soon',
              },
              {
                name: 'Event Analytics',
                desc: 'Comprehensive post-event analytics and attendee insights.',
                status: 'Coming Soon',
              },
            ]"
            :key="product.name"
            class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 border-dashed"
            :class="[
              visible ? 'reveal-visible' : 'reveal-enter',
              `reveal-delay-${i + 2}`,
            ]"
          >
            <div
              class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 mb-4"
            >
              <div
                class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"
              />
              <span class="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">{{
                product.status
              }}</span>
            </div>
            <h4
              class="text-lg font-semibold text-slate-900 dark:text-white mb-2"
            >
              {{ product.name }}
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              {{ product.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
