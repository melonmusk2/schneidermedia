import Me from '../assets/Avatar2.webp'
import Logo from '../assets/logo_2.svg'
import {motion} from 'framer-motion' 
import {fadeIn} from '../../variants' 

export default function Uber() {
  
  return (
    <section id="uber" class="py-20 ">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-5xl font-bold font-primary mb-12">Über mich</h2>
            <div class="flex font-secondary flex-col md:flex-row items-center justify-center gap-10">
               <motion.img variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} className='size-96 rounded-xl' src={Me}/>
                <motion.div variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} class="md:w-2/3 lg:w-2/4 p-6 rounded-lg lg:ml-50 ">
                    <p class="text-black leading-relaxed text-[18px] [word-spacing:0.1rem] mb-4">
                        Meine Leidenschaft für Film und Fotografie begann bereits während meiner Schulzeit,
als ich gemeinsam mit anderen erste Filmprojekte plante und Kurzfilme produzierte.
Seitdem konnte ich meine Erfahrung stetig erweitern und bereits Imagefilme, Events und
Hochzeiten begleiten. Gemeinsam im Team gewann ich 2025 und 2026 zudem jeweils
den 1. Platz bei einem bundesweiten Wettbewerb des Instituts für Talententwicklung mit
Kurzfilmen zum Thema Berufswahl. Ab September vertiefe ich meine Leidenschaft auch
akademisch im Bachelorstudium Filmproduktion.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
    
  );
}