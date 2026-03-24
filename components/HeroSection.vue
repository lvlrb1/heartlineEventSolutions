<script setup lang="ts">
const stats = [
  { value: '500+', label: 'Events Powered' },
  { value: '10K+', label: 'Guests Seated' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support' },
]
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-purple-200/40 dark:bg-purple-800/20 rounded-full blur-3xl animate-float"
      />
      <div
        class="absolute top-1/2 -left-20 w-48 sm:w-60 h-48 sm:h-60 bg-pink-200/30 dark:bg-pink-900/15 rounded-full blur-3xl animate-float-delayed"
      />
      <div
        class="absolute bottom-20 right-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-purple-300/20 dark:bg-accent/10 rounded-full blur-2xl animate-float-slow"
      />
      <div
        class="absolute top-1/4 left-1/3 w-20 h-20 bg-accent/15 dark:bg-accent/8 rounded-full blur-xl animate-pulse-ring"
      />
    </div>

    <div
      class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      <div class="max-w-4xl mx-auto">
        <p
          class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-4 sm:mb-6"
        >
          Heartline Event Solutions
        </p>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span class="text-slate-900 dark:text-white"
            >Making Every Event</span
          >
          <br />
          <span
            class="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent"
          >
            Your Best Day Ever
          </span>
        </h1>

        <p
          class="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          We build innovative digital tools that transform how you plan, design,
          and execute unforgettable events — so you can focus on what matters
          most.
        </p>

        <div
          class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#products"
            class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Explore Our Products
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#contact"
            class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border-2 border-primary/20 dark:border-accent/30 text-primary dark:text-accent font-semibold hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div
        class="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center group"
        >
          <div
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary dark:text-accent transition-transform group-hover:scale-105"
          >
            {{ stat.value }}
          </div>
          <div
            class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
    >
      <svg
        class="w-6 h-6 text-slate-400 dark:text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>
