import React from "react";

import ARQlogo from "../assets/logoARQ.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.3] lg:text-[60px]"
            >
              Angel Jouseph <span>Rodriguez Quesada</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Soy</span>
              <TypeAnimation
                sequence={[
                  "Desarrollador",
                  2000,
                  "Front-end",
                  2000,
                  "Back-end",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              ¡Hola! Bienvenido a mi sitio web. Aquí encontrarás una muestra de
              mi trabajo, una ventana a mi creatividad y habilidades. Desde un poco
              diseño hasta desarrollo web, estoy emocionado de compartir
              contigo mi pasión por crear experiencias digitales impactantes.
              Explora, inspira y ponte en contacto conmigo para llevar tu
              próximo proyecto al siguiente nivel.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button onClick={downloadCV} className="btn btn-lg">
                Descarga mi CV
              </button>

              <a href="#" className="text-portfolio btn-link">
                Mi Portafolio
              </a>
            </motion.div>
            {/*socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a className="socialHover" href="https://github.com/AngelRQ">
                <FaGithub />
              </a>
              <a
                className="socialHover"
                href="https://www.facebook.com/angeljoseph.rodriguezquesada/?locale=es_LA"
              >
                <FaFacebook />
              </a>
              <a
                className="socialHover"
                href="https://www.linkedin.com/in/angel-jouseph-rodr%C3%ADguez-quesada-7aa392278/"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[-320px] lg:max-w-[482px]"
          >
            <img src={ARQlogo} alt="Logo" />
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

export default Banner;
