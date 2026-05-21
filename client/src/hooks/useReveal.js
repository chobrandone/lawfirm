import { useState, useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook — returns [ref, isVisible]
 * Attach ref to any element; isVisible becomes true once it enters the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/**
 * Counter animation hook — returns [ref, displayValue]
 * Animates a number from 0 to `target` once element is visible.
 */
export function useCounter(target, suffix = '') {
  const [ref, visible] = useReveal({ threshold: 0.6 });
  const [value, setValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = target / 70;
    const tick = () => {
      cur = Math.min(cur + step, target);
      setValue(Math.floor(cur) + suffix);
      if (cur < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, target, suffix]);

  return [ref, value];
}
