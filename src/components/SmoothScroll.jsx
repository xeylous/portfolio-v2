'use client';

import { useEffect } from 'react';
import scroll from '../utils/scroll';

export default function SmoothScroll() {
  useEffect(() => {
    scroll();
  }, []);

  return null;
}
