'use client';

import type { ISourceOptions } from '@tsparticles/engine';
import ParticlesComponent, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

export default function Particles() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        color: {
          value: resolvedTheme === 'dark' ? '#ffffff' : '#000000',
        },
        move: {
          direction: 'top-right' as const,
          enable: true,
          random: true,
          speed: 1,
          outModes: { default: 'out' as const },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 20,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 2,
        },
      },
      detectRetina: true,
    }),
    [resolvedTheme],
  );

  if (!init) return null;

  return <ParticlesComponent id="tsparticles" options={options} />;
}
