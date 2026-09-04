import React, { useState } from 'react';
import Film from "lucide-react/dist/esm/icons/film.mjs"
import Gem from "lucide-react/dist/esm/icons/gem.mjs"
import Camera from "lucide-react/dist/esm/icons/camera.mjs"
import House from "lucide-react/dist/esm/icons/house.mjs"
import Laptop from "lucide-react/dist/esm/icons/laptop.mjs"

import hochzeit from '../assets/hochzeit.webp'
import fotografie from '../assets/fotografie.webp'
import Videopro from '../assets/videopro.webp'
import imo from '../assets/imo.webp'
import postpro from '../assets/postpro.webp'

const LEISTUNGEN = [
  {
    id: 'Hochzeiten',
    title: 'Hochzeiten',
    icon: Gem,
    description: [
    "Hochzeitsfotografie",
    "Hochzeitsfilm / Wedding Film",
    "Paarshootings",
    "Standesamt & freie Trauung",
    "Drohnenaufnahmen"
  ],
    img: hochzeit
  },
  {
    id: 'Fotografie',
    title: 'Fotografie',
    icon: Camera,
    description: [
    "Eventfotografie",
    "Porträt- & Personenfotografie",
    "Business- & Unternehmensfotografie",
    "Social-Media-Content",
    "Bildbearbeitung & Retusche"
  ],
    img: fotografie
  },
  {
    id: 'Videoproduktion',
    title: 'Videoproduktion',
    icon: Film,
    description: [
    "Imagefilme",
    "Werbefilme",
    "Social-Media-Videos / Reels",
    "Eventfilme",
    "Musikvideos",
    "Drohnenaufnahmen"
  ],
    img: Videopro
  },
  {
    id: 'Immobilien',
    title: 'Immobilien',
    icon: House,
    description: [
    "Immobilienfotografie",
    "Immobilienvideos / Rundgänge",
    "Drohnenaufnahmen",
    "Aufnahmen für Makler & Unternehmen",
    "Professionelle Bildbearbeitung",
    "360 Grad Aufnahmen"
  ],
    img: imo
  },
  {
    id: 'Postproduktion',
    title: 'Postproduktion',
    icon: Laptop,
    description: [
    "Professionelle Bildbearbeitung",
    "Retusche",
    "Farbkorrektur & Color Grading",
    "Optimierung bestehender Fotos"
  ],
    img: postpro
  }
];

const Leistungen = () => {
    const [activeTab, setActiveTab] = useState('Hochzeiten');
  return (
    <>
     <section id="leistungen" className="py-24 font-secondary bg-neutral-900/90 border-y border-neutral-800/80">
        <div className="max-w-350 mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl text-white font-extrabold font-primary mb-4">Meine Leistungen</h2>
            <p className="text-neutral-300">
              Damit deine Momente unvergesslich werden und deine Objekte perfekt zur Geltung kommen, braucht es den passenden visuellen Rahmen. Ich biete maßgeschneiderte Foto- und Videopakete für jeden Anlass.
            </p>
          </div>

          {/* Tab Menu */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {LEISTUNGEN.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-neutral-950 shadow-lg shadow-amber-500/10'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-300/80 border border-neutral-800 rounded-3xl p-8 lg:p-12">
            {LEISTUNGEN.filter((item) => item.id === activeTab).map((item) => (
              <div key={item.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-white font-primary font-bold mb-4">{item.title}</h3>
                  <p className="text-lg mb-8 leading-relaxed">
                    <ul className="text-black text-lg mb-8 leading-relaxed space-y-2">
                      {Array.isArray(item.description) ? (
                        item.description.map((point, index) => (
                          <li key={index}>• {point}</li>
                         ))
                         ) : (
                          <li>{item.description}</li>
                         )}
                    </ul>
                  </p>
                  <div className="flex flex-wrap gap-3">
                  </div>
                </div>
                <div className="aspect-video bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm">
                    <img alt='leistung' src={item.img}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center max-w-3xl mx-auto mt-16">
            <p className="text-neutral-300 text-lg">
             <span className='text-xl font-semibold font-primary'>Nicht das Passende dabei? </span><br/>
Kein Problem - jedes Projekt ist individuell. Gerne entwickle ich gemeinsam mit Ihnen eine
passende Lösung, die genau auf Ihre Vorstellungen und Anforderungen zugeschnitten ist.
Sprechen Sie mich einfach an und erzählen Sie mir von Ihrer Idee - individuelle Anfragen
sind jederzeit willkommen.
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Leistungen;