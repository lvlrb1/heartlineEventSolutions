export function useReveal(options?: { threshold?: number }) {
  const el = ref<HTMLElement>()
  const visible = ref(false)

  onMounted(() => {
    const element = el.value
    if (!element) return

    element.classList.add('reveal-enter')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          element.classList.add('reveal-visible')
          observer.disconnect()
        }
      },
      { threshold: options?.threshold ?? 0.1 },
    )
    observer.observe(element)
  })

  return { el, visible }
}
