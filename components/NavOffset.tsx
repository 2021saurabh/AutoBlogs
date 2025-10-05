'use client';

import { useEffect, useState } from 'react';

export default function NavOffset() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;

    const update = () => setH(nav?.getBoundingClientRect().height ?? 0);
    update();

    let ro: ResizeObserver | null = null;
    if (typeof window !== 'undefined' && 'ResizeObserver' in window && nav) {
      ro = new ResizeObserver(update);
      ro.observe(nav);
    }

    window.addEventListener('resize', update);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Just a spacer div equal to nav height
  return <div style={{ height: h }} aria-hidden />;
}
