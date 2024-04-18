import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text*/}
          <motion.div variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <h2 className="h2 text-accent">Acerca de mi.</h2>
            <h3 className="h3 mb-4">
              Estudiante de Informática y Tecnología Multimedia.
            </h3>
            <p className="mb-6">
              Me enfoco principalmente
              en Front-end. Además, cuento con conocimientos en el área de
              diseño y back-end. Soy una persona eficiente, proactiva y enfocado
              en los resultados, además cuento con conocimientos básicos sobre
              ciberseguridad y actualmente estoy recibiendo cursos sobre ello,
              lo cual es otro tema que apasiona bastante.
            </p>
            {/*stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-portfolio mb-2">
                  {inView ? <CountUp start={0} end={4} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Años de <br />
                  Experiencia Académica
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-portfolio mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Proyectos <br />
                  Completos
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button onClick={downloadCV} className="btn btn-lg">
                Descarga mi CV
              </button>

              <a href="#" className="text-portfolio btn-link">
                Mi Portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const downloadCV = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1dP_nuqzFZpn-T7bHfuXzr0L5LYUFrh1e/view?usp=drive_link";
  link.download = "CV_Angel.pdf"; // Replace 'CV_filename.pdf' with your CV file name
  link.click();
};

export default About;
