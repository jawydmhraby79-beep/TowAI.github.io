import { useState } from 'react';

export function useSciFiTheme() {
  const [theme] = useState({
    blue: '#021024',
    green: '#0D1F23',
    accents: ['#056569', '#5483B3', '#7DA0CA', '#C1E8FF'],
  });

  return { theme };
}
