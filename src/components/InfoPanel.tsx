'use client';

import { Deportee, Event } from '@/data/deportees';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface InfoPanelProps {
  deportee: Deportee | null;
  selectedEvent: Event | null;
  onClose: () => void;
}

export default function InfoPanel({ deportee, selectedEvent, onClose }: InfoPanelProps) {
  if (!deportee) return null;

  return (
    <div className="absolute top-4 right-4 z-[2000] w-96 max-h-[calc(100vh-2rem)] bg-stone-50 border border-stone-300 shadow-2xl flex flex-col overflow-hidden rounded-sm font-serif">
      <div className="bg-stone-800 text-stone-100 p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold tracking-tight">{deportee.name}</h3>
          <p className="text-xs text-stone-400 uppercase tracking-widest">Dossier individuel</p>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-stone-700 rounded transition-colors">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]">
        {/* Basic Info */}
        <section>
          <div className="border-b border-stone-300 pb-2 mb-4">
            <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">État Civil</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-stone-400 text-[10px] uppercase">Naissance</p>
              <p className="text-stone-800 font-medium">{deportee.birthDate}</p>
            </div>
            <div>
              <p className="text-stone-400 text-[10px] uppercase">Lieu</p>
              <p className="text-stone-800 font-medium">{deportee.birthPlace}</p>
            </div>
          </div>
          <p className="mt-4 text-stone-700 italic leading-relaxed text-sm">
            "{deportee.summary}"
          </p>
        </section>

        {/* Selected Event Details */}
        {selectedEvent && (
          <section className="bg-stone-200/50 p-4 border-l-4 border-stone-800 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="border-b border-stone-300 pb-2 mb-3 flex justify-between items-center">
              <h4 className="text-xs font-bold uppercase text-stone-800 tracking-wider">Étape : {selectedEvent.label}</h4>
              <span className="text-xs font-mono bg-stone-800 text-stone-100 px-2 py-0.5 rounded">{selectedEvent.date}</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-stone-800 font-bold">{selectedEvent.location}</p>
              <p className="text-sm text-stone-700 leading-relaxed">{selectedEvent.description}</p>
              
              {selectedEvent.details && (
                <div className="mt-4 pt-3 border-t border-stone-300 space-y-2">
                  {selectedEvent.details.motif && (
                    <p className="text-xs text-stone-600"><span className="font-bold uppercase">Motif :</span> {selectedEvent.details.motif}</p>
                  )}
                  {selectedEvent.details.authorities && (
                    <p className="text-xs text-stone-600"><span className="font-bold uppercase">Autorités :</span> {selectedEvent.details.authorities}</p>
                  )}
                  {selectedEvent.details.matricule && (
                    <p className="text-xs text-stone-600"><span className="font-bold uppercase">Matricule :</span> {selectedEvent.details.matricule}</p>
                  )}
                  {selectedEvent.details.work && (
                    <p className="text-xs text-stone-600"><span className="font-bold uppercase">Travail :</span> {selectedEvent.details.work}</p>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Timeline Path */}
        <section>
          <div className="border-b border-stone-300 pb-2 mb-4">
            <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Parcours de déportation</h4>
          </div>
          <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-300">
            {deportee.path.map((event, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className={`absolute -left-[24px] top-1 w-6 h-6 rounded-full border-4 border-stone-50 z-10 ${
                  selectedEvent?.label === event.label ? 'bg-red-800 scale-125' : 'bg-stone-400 group-hover:bg-stone-600'
                } transition-all duration-300`} />
                <div className="text-xs font-bold text-stone-400 mb-0.5 uppercase">{event.date}</div>
                <div className="text-sm font-bold text-stone-800">{event.label}</div>
                <div className="text-xs text-stone-500">{event.location}</div>
              </div>
            ))}
          </div>
        </section>

        {deportee.postWar && (
          <section className="pt-6 border-t border-stone-300">
             <div className="border-b border-stone-300 pb-2 mb-4">
              <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider">Après-Guerre / Mémoire</h4>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed italic">
              {deportee.postWar}
            </p>
          </section>
        )}
      </div>

      <div className="p-4 bg-stone-100 border-t border-stone-200 text-[10px] text-stone-400 text-center uppercase tracking-tighter">
        Projet CNRD - Mémoire de la Déportation
      </div>
    </div>
  );
}
