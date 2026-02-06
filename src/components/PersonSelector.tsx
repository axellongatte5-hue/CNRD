'use client';

import { Deportee, deportees } from '@/data/deportees';

interface PersonSelectorProps {
  selectedId: string | null;
  onSelect: (deportee: Deportee) => void;
}

export default function PersonSelector({ selectedId, onSelect }: PersonSelectorProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-stone-900 border-r border-stone-800 overflow-y-auto w-64 h-full">
      <h2 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Biographies</h2>
      {deportees.map((person) => (
        <button
          key={person.id}
          onClick={() => onSelect(person)}
          className={`text-left p-3 rounded transition-all duration-300 border ${
            selectedId === person.id
              ? 'bg-stone-800 border-stone-600 text-stone-100 shadow-lg'
              : 'bg-transparent border-transparent text-stone-500 hover:text-stone-300 hover:bg-stone-800/50'
          }`}
        >
          <div className="text-sm font-medium">{person.name}</div>
          <div className="text-[10px] opacity-60 uppercase mt-1">{person.birthPlace}</div>
        </button>
      ))}
    </div>
  );
}
