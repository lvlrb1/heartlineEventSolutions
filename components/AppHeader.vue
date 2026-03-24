<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  mobileMenuOpen.value = false
  const target = document.querySelector(href)
  target?.scrollIntoView({ behavior: 'smooth' })
}

const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50'
        : 'bg-transparent',
    ]"
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <a
          href="#"
          @click.prevent="scrollTo('#hero')"
          class="flex items-center gap-2.5 group"
        >
          <svg
            class="w-8 h-8 transition-transform group-hover:scale-110"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#43204f" />
                <stop offset="100%" stop-color="#6A3180" />
              </linearGradient>
            </defs>
            <path
              d="M16 28l-1.4-1.3C7.4 20.2 3 16.4 3 11.5 3 7.4 6.4 4 10.5 4c2.3 0 4.5 1.1 6 2.7C17.5 5.1 19.7 4 22 4c4.1 0 7.5 3.4 7.5 7.5 0 4.9-4.4 8.7-11.6 15.2L16 28z"
              class="fill-primary dark:fill-accent"
            />
            <line
              x1="4"
              y1="15"
              x2="28"
              y2="15"
              class="stroke-accent dark:stroke-primary-light"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
          <span
            class="text-lg font-bold tracking-tight text-primary dark:text-accent"
          >
            Heartline
          </span>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="px-3 lg:px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors"
          >
            {{ link.label }}
          </a>
          <div class="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div class="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute inset-x-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-lg"
      >
        <nav class="container mx-auto px-4 py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
