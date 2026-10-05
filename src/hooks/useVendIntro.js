import { useLayoutEffect } from 'react';
import { getGsap, MOTION_QUERIES } from '../lib/motion.js';

// Delivery-bin opening in the machine SVG's coordinates (viewBox 560 x 980).
const BIN = { x: 225, y: 830, w: 560 };

/**
 * One-off intro (no scroll, no pinning): for each vended item, its keypad
 * button is pressed, the item appears in the delivery bin and pops out to its
 * resting place beside the machine. Items rest there by default (CSS), so the
 * page is complete without motion or JS. Reverted on cleanup.
 */
export function useVendIntro(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    let mm;
    try {
      const { gsap } = getGsap();
      mm = gsap.matchMedia();
      mm.add(MOTION_QUERIES.allowMotion, () => {
        const frame = root.querySelector('[data-frame]');
        const svg = frame?.querySelector('svg');
        const items = gsap.utils.toArray(root.querySelectorAll('[data-vended]'));
        if (!svg || !items.length) return;

        const fromBin = (item) => {
          const scale = svg.clientWidth / BIN.w;
          return {
            x: BIN.x * scale - (item.offsetLeft + item.offsetWidth / 2),
            y: BIN.y * scale - (item.offsetTop + item.offsetHeight / 2),
          };
        };

        const tl = gsap.timeline({ delay: 0.9 });
        items.forEach((item, i) => {
          const t = i * 0.75;
          const key = svg.querySelector(`[data-key="${item.dataset.key}"]`);
          if (key) {
            const origin = `${+key.getAttribute('x') + 12} ${+key.getAttribute('y') + 12}`;
            tl.to(key, { fill: '#d5b57a', scale: 0.84, svgOrigin: origin, duration: 0.12 }, t)
              .to(key, { fill: '#25303d', scale: 1, svgOrigin: origin, duration: 0.2 }, t + 0.18);
          }
          tl.fromTo(
            item,
            { x: () => fromBin(item).x, y: () => fromBin(item).y, scale: 0.4, rotation: 0, autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.08, immediateRender: true },
            t + 0.2,
          )
            .to(item, { x: 0, duration: 0.6, ease: 'power2.out' }, t + 0.25)
            .to(item, { y: 0, duration: 0.6, ease: 'back.out(1.4)' }, t + 0.25)
            .to(item, { scale: 1, rotation: gsap.getProperty(item, 'rotation') || 0, duration: 0.6, ease: 'power2.out' }, t + 0.25);
        });
      });
    } catch (err) {
      console.warn('[AC Action] Vend intro disabled:', err);
    }
    return () => mm && mm.revert();
  }, [rootRef]);
}
