import Lenis from '@studio-freight/lenis';

export default function scroll() {
  // Disable smooth scroll on touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) return;

  const lenis = new Lenis({
    duration: 1.6,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    infinite: false,
    smooth: true,
  });

  // Handle margin-top adjustment with smooth interpolation based on scroll position
  const targetMargin = -40; // Target margin at top
  let currentMargin = 0;
  let isAtTop = false;
  
  // Easing function for ultra-smooth animation
  const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
  
  // Smooth animation using requestAnimationFrame
  let animationProgress = 0;
  const animationDuration = 10000; // 2 seconds for slow, smooth animation
  let animationStartTime = null;
  let isAnimating = false;
  
  function animateMargin(timestamp) {
    if (!animationStartTime) animationStartTime = timestamp;
    
    const elapsed = timestamp - animationStartTime;
    animationProgress = Math.min(elapsed / animationDuration, 1);
    
    const easedProgress = easeOutQuint(animationProgress);
    
    if (isAtTop) {
      currentMargin = targetMargin * easedProgress; // 0 to -40
    } else {
      currentMargin = targetMargin * (1 - easedProgress); // -40 to 0
    }
    
    document.body.style.marginTop = `${currentMargin}px`;
    
    if (animationProgress < 1) {
      requestAnimationFrame(animateMargin);
    } else {
      isAnimating = false;
    }
  }
  
  lenis.on('scroll', ({ scroll }) => {
    const wasAtTop = isAtTop;
    isAtTop = scroll <= 5; // Small threshold for "at top"
    
    // Only trigger animation when state changes
    if (isAtTop !== wasAtTop) {
      animationStartTime = null;
      animationProgress = 0;
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(animateMargin);
      }
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
