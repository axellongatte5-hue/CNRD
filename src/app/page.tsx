'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PersonSelector from '@/components/PersonSelector';
import InfoPanel from '@/components/InfoPanel';
import { Deportee, Event, deportees } from '@/data/deportees';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-stone-900 animate-pulse flex items-center justify-center text-stone-500">Chargement de la carte...</div>
});

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [selectedDeportee, setSelectedDeportee] = useState<Deportee | null>(deportees[0]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(deportees[0].path[0]);
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const toggleFullScreen = () => {
    if (typeof document === 'undefined') return;
    
    try {
      if (!document.fullscreenEnabled) {
        console.warn('Fullscreen is not enabled in this environment.');
        return;
      }
      
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } catch (error) {
      console.warn('Fullscreen API is not supported or allowed:', error);
    }
  };

  const handlePersonSelect = (person: Deportee) => {
    setSelectedDeportee(person);
    setSelectedEvent(person.path[0]);
    setIsPanelVisible(true);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsPanelVisible(true);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-stone-950 text-stone-200">
      {/* Sidebar Selector */}
      <PersonSelector 
        selectedId={selectedDeportee?.id || null} 
        onSelect={handlePersonSelect} 
      />

      <div className="relative flex-1 flex flex-col">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-[1500] p-6 pointer-events-none flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-serif font-bold text-stone-100 tracking-tight drop-shadow-md">
              Cartographie de la Déportation
            </h1>
            <p className="text-stone-400 text-sm mt-2 font-medium tracking-wide drop-shadow-sm uppercase">
              Projet CNRD — Parcours individuels et système concentrationnaire (1940-1945)
            </p>
          </div>
          <button 
            onClick={toggleFullScreen}
            className="pointer-events-auto p-2 bg-stone-900/50 hover:bg-stone-800 text-stone-400 hover:text-stone-100 rounded border border-stone-800 backdrop-blur-md transition-all shadow-xl"
            title="Plein écran"
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </button>
        </header>

        {/* Map Container */}
        <div className="flex-1">
          <InteractiveMap 
            selectedDeportee={selectedDeportee} 
            onEventClick={handleEventClick} 
          />
        </div>

        {/* Info Panel Overlay */}
        {isPanelVisible && (
          <InfoPanel 
            deportee={selectedDeportee} 
            selectedEvent={selectedEvent} 
            onClose={() => setIsPanelVisible(false)}
          />
        )}

        {/* Bottom Bar / Timeline placeholder */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-950 to-transparent z-[1000] pointer-events-none flex items-end justify-center p-4">
           <div className="bg-stone-900/60 backdrop-blur-md px-6 py-2 rounded-full border border-stone-800 pointer-events-auto">
             <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">
               Sélectionnez une étape sur la carte ou dans le dossier pour voir les détails
             </p>
           </div>
        </div>
      </div>
    </main>
  );
}
