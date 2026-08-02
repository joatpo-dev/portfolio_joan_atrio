import "./Home.css";
import React, { useRef, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import backgroundImage from "../assets/images/foto_home_page.png";
import project1Image from "../assets/images/match.png";
import project2Image from "../assets/images/gamer_heaven.png";
import { scroll, useAnimation } from "framer-motion";
import links from "../common/globals/globals";

const Home = () => {
  const [modalOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (modalOpen) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [modalOpen, controls]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.email).then(
      () => {
        toast.success("¡Correo copiado al portapapeles!");
      },
      () => {
        toast.error("Error al copiar el correo");
      }
    );
  };

  const ProgressWheel = ({ type = "default" }) => {
    const progressRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const updateProgress = (progress) => {
        if (progressRef.current) {
          const dasharray = progress * 100;
          const dashoffset = 100 - dasharray;

          progressRef.current.style.strokeDasharray = `${dasharray} ${
            100 - dasharray
          }`;
          progressRef.current.style.strokeDashoffset = dashoffset;

          setIsVisible(progress > 0);
        }
      };

      const unsubscribe = scroll(updateProgress);

      return () => unsubscribe();
    }, []);

    const getClassName = () => {
      switch (type) {
        case "filled":
          return "progress-filled";
        case "dotted":
          return "progress-dotted";
        case "neon":
          return "progress-neon";
        case "futuristic":
          return "progress-futuristic";
        default:
          return "progress-default";
      }
    };

    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className={`progress-wheel ${getClassName()}`}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="30" className="bg" />
        <circle cx="50" cy="50" r="30" ref={progressRef} className="progress" />
      </svg>
    );
  };

  return (
    <div className="text-white w-full overflow-x-hidden">
      <ProgressWheel />

      <header
        id="hero"
        className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-[80vh]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 xl:gap-32 w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:flex-[1.4] lg:min-w-0 lg:max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white m-0 text-center lg:text-left animate-hero-title inline-block">
              Joan Atrio
            </h1>
            <h2 className="hero-gradient-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold m-0 text-center lg:text-left animate-fade-in">
              Front End Software Developer
            </h2>
            <div className="flex justify-center lg:justify-start items-center gap-6 sm:gap-8 mt-2">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:text-accent hover:scale-125 transition-transform duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:text-accent hover:scale-125 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <button
                type="button"
                className="text-2xl sm:text-3xl text-white bg-transparent border-0 cursor-pointer p-0 hover:text-accent hover:scale-125 transition-transform duration-300"
                onClick={handleCopyEmail}
                aria-label="Copiar correo"
              >
                <i className="fas fa-envelope"></i>
              </button>

              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:text-accent hover:scale-125 transition-transform duration-300"
                aria-label="Currículum"
              >
                <i className="fas fa-file"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center shrink-0">
            <img
              className="w-full max-w-[280px] sm:max-w-xs lg:max-w-md rounded-2xl object-contain opacity-0 animate-hero-image"
              src={backgroundImage}
              alt="Hero Artwork"
            />
          </div>
        </div>
      </header>

      <main>
        <section
          id="about"
          className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12">
            Sobre mí
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8 md:mb-12">
            Soy Joan, desarrollador <span className="highlight">Front End</span>{" "}
            con experiencia en desarrollo de{" "}
            <span className="highlight">aplicaciones móviles</span> y un sólido
            recorrido en entornos <span className="highlight">web</span>. He
            trabajado integrando <span className="highlight">APIs REST</span> y{" "}
            <span className="highlight">bases de datos</span>, con especial foco
            en la correcta comunicación entre el los sistemas , cuidando tanto la
            estructura como la mantenibilidad del código.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8 md:mb-12">
            Me desenvuelvo bien en la{" "}
            <span className="highlight">integración</span> de distintos servicios
            y en la <span className="highlight">adaptación</span> de soluciones a
            diferentes entornos front end, priorizando siempre una implementación
            clara, escalable y alineada con las necesidades del proyecto.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-0">
            Actualmente continúo ampliando mis conocimientos de forma constante,
            ya sea estudiando sobre{" "}
            <span className="highlight">nuevos conceptos</span> de programación, o
            bien, desarrollando{" "}
            <span className="highlight">proyectos personales</span> que me
            permiten profundizar en mi conocimiento.
          </p>
        </section>

        <section
          id="experience"
          className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-3xl mx-auto"
        >
          <h2 className="section-title font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
            Experiencia
          </h2>

          <div className="flex gap-4 mb-8 w-full">
            <div className="flex flex-col items-center">
              <div className="relative w-2.5 h-2.5 rounded-full bg-accent">
                <div className="active-indicator"></div>
              </div>
              <div className="w-0.5 flex-grow bg-accent"></div>
            </div>
            <div className="pb-6 flex-1 min-w-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-lg sm:text-xl text-accent m-0">
                  Front End Software Developer
                </h3>
                <span className="text-sm sm:text-base text-accent">
                  Eco-Deliver
                </span>
              </div>
              <span className="block text-sm text-gray-400 mt-1">
                Octubre 2024 - Actualidad
              </span>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Desarrollo de software para optimizar la gestión de la logística
                  sostenible, he trabajado en el desarrollo de la interfaz de
                  usuario y la gestión de datos de una aplicación móvil.
                </li>
                <li>
                  Actualmente, estoy enfocado en el desarrollo de aplicaciones
                  móviles, con planes también de desarrollo web en el futuro.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              <div className="w-0.5 flex-grow bg-accent"></div>
            </div>
            <div className="pb-2 flex-1 min-w-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-lg sm:text-xl text-accent m-0">
                  Técnico Informático
                </h3>
                <span className="text-sm sm:text-base text-accent">
                  UPC Schools
                </span>
              </div>
              <span className="block text-sm text-gray-400 mt-1">
                Septiembre 2022 - Marzo 2023 (6 meses)
              </span>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm sm:text-base leading-relaxed">
                <li>
                  Trabaja en la resolución de tickets e incidencias en vivo, en el
                  mantenimiento de software y hardware de los equipos informáticos
                  de la infraestructura.
                </li>
                <li>
                  También en la gestión de los materiales de los almacenes y
                  implementación de instalaciones de sistemas operativos en los
                  equipos.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-5xl mx-auto text-center"
        >
          <h2 className="section-title font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <article className="bg-white border-4 border-accent rounded-xl shadow-md p-5 sm:p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgb(120,205,233)]">
              <h3 className="text-xl text-gray-800 mb-3">Proyecto Match</h3>
              <a
                href={links.projects.match}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project1Image}
                  alt="Proyecto Match"
                  className="w-full h-auto max-h-64 object-contain rounded-xl mb-3"
                />
              </a>
              <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                App sobre restaurante con algoritmo para mostrar los productos en
                base a los gustos de cada usuario, con gestión de usuarios
                relacionada con base de datos, compras, carrito, reservas y
                perfil.
              </p>
              <div className="flex justify-center items-center gap-4 mb-3 text-gray-900 text-2xl">
                <i className="devicon-flutter-plain"></i>
                <i className="devicon-firebase-plain"></i>
                <i className="devicon-androidstudio-plain"></i>
              </div>
              <a
                href={links.projects.match}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-2xl hover:text-accent transition-colors duration-150"
                aria-label="GitHub Proyecto Match"
              >
                <i className="fab fa-github"></i>
              </a>
            </article>

            <article className="bg-white border-4 border-accent rounded-xl shadow-md p-5 sm:p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgb(120,205,233)]">
              <h3 className="text-xl text-gray-800 mb-3">Proyecto GamerHeaven</h3>
              <a
                href={links.projects.gamerHeaven}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project2Image}
                  alt="Proyecto GamerHeaven"
                  className="w-full h-auto max-h-64 object-contain rounded-xl mb-3"
                />
              </a>
              <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                Página web sobre información de videojuegos con filtros, con
                gestión de usuarios relacionada con base de datos, información
                basada en una API.
              </p>
              <div className="flex justify-center items-center gap-4 mb-3 text-gray-900 text-2xl">
                <i className="fab fa-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="devicon-firebase-plain"></i>
                <i className="devicon-vscode-plain"></i>
              </div>
              <a
                href={links.projects.gamerHeaven}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-2xl hover:text-accent transition-colors duration-150"
                aria-label="GitHub Proyecto GamerHeaven"
              >
                <i className="fab fa-github"></i>
              </a>
            </article>
          </div>
        </section>

        <section
          id="technologies"
          className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12">
            Tecnologías
          </h2>

          <h3 className="text-lg sm:text-xl text-accent mb-4">Front End</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-js text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                JavaScript
              </span>
            </div>
            
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-react text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                React
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="devicon-flutter-plain text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                Flutter
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-html5 text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                HTML5
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-css3-alt text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                CSS3
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl text-accent mb-4">Back End</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-python text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                Python
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-java text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                Java
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl text-accent mb-4">Bases de Datos</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="devicon-firebase-plain text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                Firebase
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="devicon-mysql-plain text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                MySQL
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl text-accent mb-4">Git</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-github text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                GitHub
              </span>
            </div>
            <div className="technology-item relative flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2">
              <i className="fab fa-gitlab text-4xl sm:text-5xl text-white"></i>
              <span className="tech-name absolute -bottom-8 text-white text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 pointer-events-none">
                Gitlab
              </span>
            </div>
          </div>
        </section>

        <section
          id="formation"
          className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-3xl mx-auto"
        >
          <h2 className="section-title font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
            Formación
          </h2>

          <div className="flex gap-4 mb-8 w-full">
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              <div className="w-0.5 flex-grow bg-accent"></div>
            </div>
            <div className="pb-6 flex-1 min-w-0">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl text-accent m-0">
                  Desarrollo de aplicaciones multiplataforma
                </h3>
                <span className="text-sm sm:text-base text-gray-400">
                  Prat Educació
                </span>
              </div>
              <span className="block text-sm text-gray-400 mt-1">
                2023 - 2024 (2 años)
              </span>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Curso enfocado en el desarrollo de aplicaciones multiplataforma,
                abarcando tecnologías modernas y prácticas para la creación de
                soluciones software eficientes.
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              <div className="w-0.5 flex-grow bg-accent"></div>
            </div>
            <div className="pb-2 flex-1 min-w-0">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl text-accent m-0">
                  Sistemas microinformáticos y redes
                </h3>
                <span className="text-sm sm:text-base text-gray-400">
                  Salesians de Sarria
                </span>
              </div>
              <span className="block text-sm text-gray-400 mt-1">
                2021 - 2022 (2 años)
              </span>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Formación en administración de sistemas microinformáticos y redes,
                con énfasis en mantenimiento de hardware y software, así como
                gestión de redes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="px-4 sm:px-6 lg:px-8 py-6 text-center text-white mt-16 md:mt-24"
      >
        <p className="m-0 text-sm sm:text-base">
          © 2026 Joan Atrio. All Rights Reserved.
        </p>
      </footer>
      <Toaster />
    </div>
  );
};

export default Home;
