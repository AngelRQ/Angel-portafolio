import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/michisBurger.png";
import Img2 from "../assets/viewTravel.png";
import Img3 from "../assets/michisVet.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*text*/}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Mis últimos <br />
                Proyectos.
              </h2>
              <p className="max-w-sm mb-16">Estos son algunos de mis últimos proyectos universitarios
              en cada uno se implementó diversas tecnologías y y diseños propios.
              </p>
              <button className="btn btn-sm">Ver todos los proyectos</button>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounden-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/90 h-full w-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/*pre title*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-work">Desarrollo Web</span>
              </div>
              {/*title group-hover:bottom-14*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Michi's Burger</span>
              </div>
              {/*description*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-0 transition-all duration-900 z-50">
                <p className="text-white">
                  Proyecto hecho con HTML, CSS, JavaScript para animaciones y diseño propio.
                </p> 
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/**imagen nueva*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounden-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/90 h-full w-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/*pre title*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-work">Desarrollo Web</span>
              </div>
              {/*title*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">View Travel's</span>
              </div>
              {/*description*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-0 transition-all duration-900 z-50">
                <p className="text-white">
                  Proyecto hecho con HTML, CSS, framework Lavravel, PHP y diseño propio.
                </p> 
              </div>
            </div>
            {/**imagen nueva 2*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounden-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/90 h-full w-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/*pre title*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-work">Desarrollo Móvil</span>
              </div>
              {/*title*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Michis Vet</span>
              </div>
              {/*description*/}
              <div className="absolute -buttom-full left-12 group-hover:bottom-0 transition-all duration-900 z-50">
                <p className="text-white">
                  Proyecto hecho en Android Studio usando el lenguaje de programación Java y diseño propio.
                </p> 
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
