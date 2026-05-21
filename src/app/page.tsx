'use client';

import { useState, useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import { Building2, Home as HomeIcon, Cpu, ChevronDown } from 'lucide-react';

const Version1Landing = dynamic(() => import('@/components/landing/v1/Version1Landing'), { ssr: false });
const Version2Landing = dynamic(() => import('@/components/landing/v2/Version2Landing'), { ssr: false });
const Version3Landing = dynamic(() => import('@/components/landing/v3/Version3Landing'), { ssr: false });

type Version = 'v1' | 'v2' | 'v3';

const versionInfo: Record<Version, { name: string; description: string; icon: React.ReactNode; colors: string }> = {
  v1: {
    name: 'Corporativo Industrial Premium',
    description: 'Azul oscuro, gris concreto, amarillo acento',
    icon: <Building2 className="w-5 h-5" />,
    colors: 'bg-[#0A1628] text-white border-[#EAB308]',
  },
  v2: {
    name: 'Comercial Moderno',
    description: 'Naranja, gris, blanco y negro',
    icon: <HomeIcon className="w-5 h-5" />,
    colors: 'bg-[#EA580C] text-white border-[#EA580C]',
  },
  v3: {
    name: 'Tecnológico e Innovador',
    description: 'Azul eléctrico, grafito, verde acento',
    icon: <Cpu className="w-5 h-5" />,
    colors: 'bg-[#2563EB] text-white border-[#10B981]',
  },
};

const emptySubscribe = () => () => {};

export default function Home() {
  const [version, setVersion] = useState<Version>('v1');
  const [selectorOpen, setSelectorOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500 text-lg">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Version Switcher - Floating */}
      <div className="fixed top-4 right-4 z-[9999]">
        <button
          onClick={() => setSelectorOpen(!selectorOpen)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium transition-all duration-300 border-2 ${versionInfo[version].colors} hover:scale-105 backdrop-blur-sm`}
        >
          {versionInfo[version].icon}
          <span className="hidden sm:inline">V{version[1]}: {versionInfo[version].name}</span>
          <span className="sm:hidden">V{version[1]}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${selectorOpen ? 'rotate-180' : ''}`} />
        </button>

        {selectorOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden min-w-[280px] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-3 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Seleccionar Versión</p>
            </div>
            {(['v1', 'v2', 'v3'] as Version[]).map((v) => (
              <button
                key={v}
                onClick={() => {
                  setVersion(v);
                  setSelectorOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
                  version === v ? 'bg-gray-50' : ''
                }`}
              >
                <div className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${
                  v === 'v1' ? 'bg-[#0A1628]' : v === 'v2' ? 'bg-[#EA580C]' : 'bg-[#2563EB]'
                }`}>
                  {v[1]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${version === v ? 'text-gray-900' : 'text-gray-700'}`}>
                    {versionInfo[v].name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{versionInfo[v].description}</p>
                </div>
                {version === v && (
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {selectorOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setSelectorOpen(false)}
        />
      )}

      {/* Render selected version */}
      {version === 'v1' && <Version1Landing />}
      {version === 'v2' && <Version2Landing />}
      {version === 'v3' && <Version3Landing />}
    </div>
  );
}
