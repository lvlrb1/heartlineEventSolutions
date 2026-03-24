<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  Products: [
    { label: 'A Seat Awaits', href: 'https://aseatawaits.com' },
    { label: 'Event Check-In', href: '#', soon: true },
    { label: 'Vendor Connect', href: '#', soon: true },
    { label: 'Event Analytics', href: '#', soon: true },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Blog', href: '#', soon: true },
    { label: 'Documentation', href: '#', soon: true },
    { label: 'Help Center', href: '#', soon: true },
  ],
}

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: '#',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
]
</script>

<template>
  <footer class="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div class="sm:col-span-2">
          <a href="#" class="inline-flex items-center gap-2.5 mb-4">
            <svg
              class="w-8 h-8"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 28l-1.4-1.3C7.4 20.2 3 16.4 3 11.5 3 7.4 6.4 4 10.5 4c2.3 0 4.5 1.1 6 2.7C17.5 5.1 19.7 4 22 4c4.1 0 7.5 3.4 7.5 7.5 0 4.9-4.4 8.7-11.6 15.2L16 28z"
                fill="#CDA8E6"
              />
              <line
                x1="4"
                y1="15"
                x2="28"
                y2="15"
                stroke="#6A3180"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
            <span class="text-lg font-bold text-white">Heartline</span>
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
            Making every event your best day ever. We build innovative digital
            tools that transform event planning from stressful to joyful.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
            >
              <svg
                class="w-4 h-4 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <div v-for="(links, category) in footerLinks" :key="category">
          <h4 class="text-sm font-semibold text-white mb-4">
            {{ category }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.label">
              <a
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="
                  link.href.startsWith('http') ? 'noopener' : undefined
                "
                class="text-sm text-slate-400 hover:text-accent transition-colors inline-flex items-center gap-1.5"
              >
                {{ link.label }}
                <span
                  v-if="(link as any).soon"
                  class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 font-medium"
                  >Soon</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p class="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          &copy; {{ currentYear }} Heartline Event Solutions. All rights
          reserved.
        </p>
        <div class="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
          <a href="#" class="hover:text-slate-300 transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-slate-300 transition-colors"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
