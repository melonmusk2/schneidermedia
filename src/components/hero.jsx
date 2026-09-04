import Vid from '../assets/vid.webm'
import Vidmp4 from "../assets/vid.mp4"

import React, { useRef, useEffect } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay wurde von iOS blockiert:', error);
        });
      }
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
    
  }, []);

  return (
    <video 
      ref={videoRef} 
      loop
      playsinline
      autoPlay
      preload="auto"
    >
      <source src={Vidmp4} type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
  );
};   

const Hero = () => {
  return (
    <>
     <section id='hero' className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
               <div className='max-w-3xl px-6 mx-auto grid gap-3 mb-10 items-center'>
                 <h1 className="text-2xl font-primary md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                   Fotos.Filme.Emotionen
                 </h1>
                 <p className="text-md md:text-lg font-secondary leading-relaxed mb-8 max-w-xl">
                   Ich begleite dich von der ersten Idee bis zum <span className="text-cyan-600 font-semibold">perfekten Bild</span> -  maßgeschneiderte Foto- und Videoproduktionen für Hochzeiten, Immobilien, Portraits und besondere Momente.
                 </p>
               </div>
                 <div className='max-w-330 px-6 mx-auto grid gap-2 items-center'>
                 <div className=" overflow-hidden rounded-xl shadow-2xl">
                  <Video/>
                 </div>
               </div>
           </section>
    </>
  );
}

export default Hero;