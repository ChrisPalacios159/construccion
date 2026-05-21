'use client';

import { useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';

const Version1Landing = dynamic(() => import('@/components/landing/v1/Version1Landing'), { ssr: false });

const emptySubscribe = () => () => {};

export default function Home() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500 text-lg">Cargando...</div>
      </div>
    );
  }

  return <Version1Landing />;
}
