<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  Products: [
    { label: 'A Seat Awaits', href: 'https://aseatawaits.com' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
}
</script>

<template>
  <footer class="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div class="sm:col-span-2">
          <a href="#" class="inline-flex items-center gap-2.5 mb-4">
            <img
              src="/heartline-mark.png"
              alt=""
              class="w-9 h-9 rounded-lg object-cover"
            />
            <span class="text-lg font-bold text-white">Heartline</span>
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            Making every event your best day ever. We build innovative digital
            tools that transform event planning from stressful to joyful.
          </p>
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
      </div>
    </div>
  </footer>
</template>
