import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const goTop = () => window.scrollTo(0, 0)

    // Scroll to top on initial load
    goTop()

    // Also handle pageshow (bfcache / back-forward cache restores)
    window.addEventListener('pageshow', goTop)

    return () => window.removeEventListener('pageshow', goTop)
  }, [])

  return null
}
