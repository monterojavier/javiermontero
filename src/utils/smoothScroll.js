// Inertial smooth-scroll (Lenis-style lerp)
// Intercepts wheel + anchor clicks. Native touch/keyboard/scrollbar still work.
export function initSmoothScroll() {
  if (window.__smoothScrollInit) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  window.__smoothScrollInit = true

  let target = window.scrollY
  let current = window.scrollY
  let running = false
  const LERP = 0.1

  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  }

  function loop() {
    const diff = target - current
    if (Math.abs(diff) < 0.4) {
      current = target
      window.scrollTo(0, current)
      running = false
      return
    }
    current += diff * LERP
    window.scrollTo(0, current)
    requestAnimationFrame(loop)
  }

  function start() {
    if (running) return
    running = true
    current = window.scrollY
    requestAnimationFrame(loop)
  }

  window.addEventListener('wheel', (e) => {
    // Don't hijack scrollable inner panels
    let node = e.target
    while (node && node !== document.body) {
      if (node.scrollHeight > node.clientHeight) {
        const cs = getComputedStyle(node)
        if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') return
      }
      node = node.parentElement
    }
    e.preventDefault()
    target = Math.max(0, Math.min(maxScroll(), target + e.deltaY))
    start()
  }, { passive: false })

  window.addEventListener('scroll', () => {
    if (!running) {
      target = window.scrollY
      current = window.scrollY
    }
  }, { passive: true })

  function scrollToEl(el) {
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    target = Math.max(0, Math.min(maxScroll(), top))
    start()
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href').slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    scrollToEl(el)
    history.replaceState(null, '', '#' + id)
  })

  document.documentElement.style.scrollBehavior = 'auto'
}
