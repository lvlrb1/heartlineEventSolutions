<script setup lang="ts">
const { el, visible } = useReveal()

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries to create tools that didn\'t exist before.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Simplicity',
    description: 'Complex problems deserve elegant, simple solutions.',
    icon: 'M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.258 0A17.926 17.926 0 0021 12c0-2.874-.673-5.59-1.871-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8',
  },
  {
    title: 'Reliability',
    description: 'Your event day is too important for anything less than rock-solid.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Community',
    description: 'Built by event lovers, for event lovers — together we\'re better.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]
</script>

<template>
  <section
    id="about"
    ref="el"
    class="py-20 sm:py-24 lg:py-32 bg-white dark:bg-slate-900/50"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div :class="visible ? 'reveal-visible' : 'reveal-enter'">
            <p
              class="text-xs sm:text-sm font-semibold text-primary dark:text-accent tracking-[0.2em] uppercase mb-3"
            >
              About Us
            </p>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Every Event Tells
              <span class="text-primary dark:text-accent">a Story</span>
            </h2>
            <div class="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                At Heartline Event Solutions, we believe the best events are the
                ones where everything just works — where planners can breathe,
                guests feel welcomed, and every detail falls perfectly into
                place.
              </p>
              <p>
                Founded with a passion for bringing people together, we combine
                deep event industry expertise with cutting-edge technology to
                build tools that event planners actually love using.
              </p>
              <p>
                Our team has planned, coordinated, and attended hundreds of
                events. We know the stress, the chaos, and the magic. That's
                why we build software that handles the hard parts, so you can
                focus on creating moments that matter.
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            <div
              v-for="(value, i) in values"
              :key="value.title"
              class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5"
              :class="[
                visible ? 'reveal-visible' : 'reveal-enter',
                `reveal-delay-${i + 1}`,
              ]"
            >
              <div
                class="w-10 h-10 rounded-lg bg-primary/10 dark:bg-accent/10 flex items-center justify-center mb-4"
              >
                <svg
                  class="w-5 h-5 text-primary dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="value.icon"
                  />
                </svg>
              </div>
              <h3
                class="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1.5"
              >
                {{ value.title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
