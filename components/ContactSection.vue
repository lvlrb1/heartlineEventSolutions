<script setup lang="ts">
const { el, visible } = useReveal()

const contactMethods = [
  {
    title: 'Email Us',
    description: 'For inquiries and partnerships',
    value: 'hello@heartlineevents.com',
    href: 'mailto:hello@heartlineevents.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Support',
    description: 'Technical help and questions',
    value: 'support@heartlineevents.com',
    href: 'mailto:support@heartlineevents.com',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Location',
    description: 'Based in the United States',
    value: 'Austin, Texas',
    href: null,
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
]
</script>

<template>
  <section
    id="contact"
    ref="el"
    class="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05] dark:from-primary/[0.06] dark:to-accent/[0.03]"
    />

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        :class="visible ? 'reveal-visible' : 'reveal-enter'"
      >
        <p
          class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-3"
        >
          Contact
        </p>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Let's Create Something
          <span class="text-primary dark:text-accent">Amazing</span>
        </h2>
        <p
          class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Whether you have a question about our products, need support, or want
          to explore a partnership — we'd love to hear from you.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto"
      >
        <div
          v-for="(method, i) in contactMethods"
          :key="method.title"
          class="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          :class="[
            visible ? 'reveal-visible' : 'reveal-enter',
            `reveal-delay-${i + 1}`,
          ]"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-primary dark:text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="method.icon"
              />
            </svg>
          </div>

          <h3
            class="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1"
          >
            {{ method.title }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
            {{ method.description }}
          </p>

          <component
            :is="method.href ? 'a' : 'span'"
            :href="method.href || undefined"
            class="text-sm sm:text-base font-medium"
            :class="
              method.href
                ? 'text-primary dark:text-accent hover:underline underline-offset-4'
                : 'text-slate-700 dark:text-slate-300'
            "
          >
            {{ method.value }}
          </component>
        </div>
      </div>

      <div
        class="mt-12 sm:mt-16 text-center"
        :class="[visible ? 'reveal-visible' : 'reveal-enter', 'reveal-delay-4']"
      >
        <div
          class="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-light shadow-xl shadow-primary/20"
        >
          <div class="text-center sm:text-left">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-1">
              Ready to Transform Your Events?
            </h3>
            <p class="text-sm text-white/70">
              Start planning your next unforgettable experience today.
            </p>
          </div>
          <a
            href="https://aseatawaits.com"
            target="_blank"
            rel="noopener"
            class="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base shadow-lg"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
