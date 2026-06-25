<template>
  <section
    id="hero"
    class="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-primary"
  >
    <div class="absolute inset-0 pointer-events-none">
      <img
        src="/heartline-logo-full.png"
        alt=""
        class="h-full w-full object-cover opacity-12"
      />
      <div class="absolute inset-0 bg-primary/78" />
      <div class="hero-kinetic-map" aria-hidden="true">
        <span class="hero-arc hero-arc-1" />
        <span class="hero-arc hero-arc-2" />
        <span class="hero-arc hero-arc-3" />
        <svg
          class="hero-flow"
          viewBox="0 0 1200 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="hero-flow-path hero-flow-path-1"
            d="M80 540 C260 410 330 550 470 410 S760 170 1110 250"
          />
          <path
            class="hero-flow-path hero-flow-path-2"
            d="M180 210 C360 120 470 280 620 220 S850 120 1020 420"
          />
          <path
            class="hero-pulse-line"
            d="M260 500 C360 430 430 510 520 420 C570 370 650 315 740 300 C820 285 900 330 970 270"
          />
        </svg>
      </div>
    </div>

    <div
      class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      <div class="max-w-4xl mx-auto">
        <img
          src="/heartline-logo-full.png"
          alt="Heartline Event Solutions LLC"
          class="mx-auto mb-8 w-full max-w-[22rem] sm:max-w-[30rem] rounded-2xl shadow-2xl shadow-black/20"
        />
        <p
          class="text-xs sm:text-sm font-semibold text-accent-light tracking-[0.2em] uppercase mb-4 sm:mb-6"
        >
          Heartline Event Solutions
        </p>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span class="text-white"
            >Making Every Event</span
          >
          <br />
          <span
            class="bg-gradient-to-r from-accent-light via-accent to-white bg-clip-text text-transparent"
          >
            Your Best Day Ever
          </span>
        </h1>

        <p
          class="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
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
            class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-accent hover:bg-accent-light text-primary font-semibold shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
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
            class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border-2 border-white/25 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>

    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
    >
      <svg
        class="w-6 h-6 text-white/60"
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
