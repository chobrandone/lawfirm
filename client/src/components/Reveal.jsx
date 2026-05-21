import { useReveal } from '../hooks/useReveal';

/**
 * Reveal — wraps children with a scroll-triggered CSS animation.
 * direction: 'up' | 'left' | 'right'
 * delay: seconds (0.1 increments)
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '', style = {} }) {
  const [ref, visible] = useReveal();
  const cls = { up: 'reveal', left: 'rev-l', right: 'rev-r' }[direction] || 'reveal';
  return (
    <div
      ref={ref}
      className={`${cls}${visible ? ' show' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
