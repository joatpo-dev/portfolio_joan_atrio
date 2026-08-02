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

  // Lista de proyectos

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
          const dasharray = progress * 100; // Completa el círculo
          const dashoffset = 100 - dasharray; // Ajuste para la animación

          // Actualiza el stroke-dasharray y stroke-dashoffset
          progressRef.current.style.strokeDasharray = `${dasharray} ${
            100 - dasharray
          }`;
          progressRef.current.style.strokeDashoffset = dashoffset;

          // Controla la visibilidad basado en el progreso
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
      >
        <circle cx="50" cy="50" r="30" className="bg" />
        <circle cx="50" cy="50" r="30" ref={progressRef} className="progress" />
      </svg>
    );
  };

  return (
    <div className="home-container">
      {/* Barra de progreso circular en la parte superior izquierda */}
      <ProgressWheel />
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-text">Joan Atrio</h1>
          <h2 className="hero-subtext">Front End Software Developer</h2>
          <div className="social-icons">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"> </i>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <button className="email-copy-button" onClick={handleCopyEmail}>
              <i className="fas fa-envelope"></i>
            </button>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file"></i>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            src={backgroundImage}
            alt="Hero Artwork"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2 className="about-title">Sobre mí</h2>
        <p>
          Soy Joan, desarrollador <span className="highlight">Front End</span>{" "}
          con experiencia en desarrollo de{" "}
          <span className="highlight">aplicaciones móviles</span> y un sólido
          recorrido en entornos <span className="highlight">web</span>. He
          trabajado integrando <span className="highlight">APIs REST</span> y{" "}
          <span className="highlight">bases de datos</span>, con especial foco
          en la correcta comunicación entre el los sistemas , cuidando tanto la
          estructura como la mantenibilidad del código.
        </p>
        <p>
          Me desenvuelvo bien en la{" "}
          <span className="highlight">integración</span> de distintos servicios
          y en la <span className="highlight">adaptación</span> de soluciones a
          diferentes entornos front end, priorizando siempre una implementación
          clara, escalable y alineada con las necesidades del proyecto.
        </p>
        <p>
          Actualmente continúo ampliando mis conocimientos de forma constante,
          ya sea estudiando sobre{" "}
          <span className="highlight">nuevos conceptos</span> de programación, o
          bien, desarrollando{" "}
          <span className="highlight">proyectos personales</span> que me
          permiten profundizar en mi conocimiento.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="experience-title">Experiencia</h2>
        <div className="experience-item">
          <div className="experience-timeline">
            <div className="timeline-circle">
              <div className="active-indicator"></div>
            </div>
            <div className="timeline-line"></div>
          </div>

          <div className="experience-content">
            <div className="experience-header">
              <h3 className="experience-role">Front End Software Developer</h3>
              <span className="experience-company">Eco-Deliver</span>
            </div>
            <span className="experience-date">Octubre 2024 - Actualidad</span>
            <ul className="experience-description-list">
              <li className="experience-description-item">
                Desarrollo de software para optimizar la gestión de la logística
                sostenible, he trabajado en el desarrollo de la interfaz de
                usuario y la gestión de datos de una aplicación móvil.
              </li>
              <li className="experience-description-item">
                Actualmente, estoy enfocado en el desarrollo de aplicaciones
                móviles, con planes también de desarrollo web en el futuro.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-timeline">
            <div className="timeline-circle"></div>
            <div className="timeline-line"></div>
          </div>

          <div className="experience-content">
            <div className="experience-header">
              <h3 className="experience-role">Técnico Informático</h3>
              <span className="experience-company">UPC Schools</span>
            </div>
            <span className="experience-date">
              Septiembre 2022 - Marzo 2023 (6 meses)
            </span>
            <ul className="experience-description-list">
              <li className="experience-description-item">
                Trabaja en la resolución de tickets e incidencias en vivo, en el
                mantenimiento de software y hardware de los equipos informáticos
                de la infraestructura.
              </li>
              <li className="experience-description-item">
                También en la gestión de los materiales de los almacenes y
                implementación de instalaciones de sistemas operativos en los
                equipos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Proyectos</h2>
        <div className="project-cards">
          <div className="project-card" data-techs="flutter firebase">
            <h3>Proyecto Match</h3>
            <a
              href={links.projects.match}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project1Image}
                alt="Proyecto Match"
                className="project-image"
              />
            </a>
            <p>
              App sobre restaurante con algoritmo para mostrar los productos en
              base a los gustos de cada usuario, con gestión de usuarios
              relacionada con base de datos, compras, carrito, reservas y
              perfil.
            </p>
            <div className="technologies">
              <i className="devicon-flutter-plain"></i>
              <i className="devicon-firebase-plain"></i>
              <i className="devicon-androidstudio-plain"></i>
            </div>
            <a
              href={links.projects.match}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fab fa-github github-icon"></i>
            </a>
          </div>

          <div className="project-card" data-techs="js react html css firebase">
            <h3>Proyecto GamerHeaven</h3>
            <a
              href={links.projects.gamerHeaven}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project2Image}
                alt="Proyecto GamerHeaven"
                className="project-image"
              />
            </a>
            <p>
              Página web sobre información de videojuegos con filtros, con
              gestión de usuarios relacionada con base de datos, información
              basada en una API.
            </p>
            <div className="technologies">
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
              className="github-link"
            >
              <i className="fab fa-github github-icon"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Technologuies section */}
      <section id="technologies" className="technologies-section">
        {/* Función para llamar al modal */}

        <h2 className="technologies-title">Tecnologías</h2>
        {/* Front End */}
        <h3 className="technologies-subtitles">Front End</h3>
        <div className="technologies-list">
          <div className="technology-item">
            <i className="fab fa-js"></i>
            <span className="tech-name">JavaScript</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-react"></i>
            <span className="tech-name">React</span>
          </div>
          <div className="technology-item">
            <i className="devicon-flutter-plain"></i>
            <span className="tech-name">Flutter</span>
          </div>

          <div className="technology-item">
            <i className="fab fa-html5"></i>
            <span className="tech-name">HTML5</span>
          </div>

          <div className="technology-item">
            <i className="fab fa-css3-alt"></i>
            <span className="tech-name">CSS3</span>
          </div>
        </div>

        {/* Back End */}
        <h3 className="technologies-subtitles">Back End</h3>
        <div className="technologies-list">
          <div className="technology-item">
            <i className="fab fa-python"></i>
            <span className="tech-name">Python</span>
          </div>

          <div className="technology-item">
            <i className="fab fa-java"></i>
            <span className="tech-name">Java</span>
          </div>
        </div>

        {/* Bases de Datos */}
        <h3 className="technologies-subtitles">Bases de Datos</h3>
        <div className="technologies-list">
          <div className="technology-item">
            <i className="devicon-firebase-plain"></i>
            <span className="tech-name">Firebase</span>
          </div>
          <div className="technology-item">
            <i className="devicon-mysql-plain"></i>
            <span className="tech-name">MySQL</span>
          </div>
        </div>

        {/* Plataforma de Desarrollo */}
        <h3 className="technologies-subtitles">Git</h3>
        <div className="technologies-list">
          <div className="technology-item">
            <i className="fab fa-github"></i>
            <span className="tech-name">GitHub</span>
          </div>
          <div className="technology-item">
            <i className="fab fa-gitlab"></i>
            <span className="tech-name">Gitlab</span>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="formation-section">
        <h2 className="formation-title">Formación</h2>
        <div className="formation-item">
          <div className="formation-timeline">
            <div className="timeline-circle"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="formation-content">
            <div className="formation-header">
              <h3 className="formation-name">
                Desarrollo de aplicaciones multiplataforma
              </h3>
              <span className="formation-company">Prat Educació</span>
            </div>
            <span className="formation-date">2023 - 2024 (2 años)</span>
            <p className="formation-description">
              Curso enfocado en el desarrollo de aplicaciones multiplataforma,
              abarcando tecnologías modernas y prácticas para la creación de
              soluciones software eficientes.
            </p>
          </div>
        </div>
        <div className="formation-item">
          <div className="formation-timeline">
            <div className="timeline-circle"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="formation-content">
            <div className="formation-header">
              <h3 className="formation-name">
                Sistemas microinformáticos y redes
              </h3>
              <span className="formation-company">Salesians de Sarria</span>
            </div>
            <span className="formation-date">2021 - 2022 (2 años)</span>
            <p className="formation-description">
              Formación en administración de sistemas microinformáticos y redes,
              con énfasis en mantenimiento de hardware y software, así como
              gestión de redes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <p>© 2024 Joan Atrio. All Rights Reserved.</p>
      </footer>
      <Toaster />
    </div>
  );
};

export default Home;
