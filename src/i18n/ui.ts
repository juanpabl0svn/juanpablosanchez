import { AGE, CURRENT_YEAR } from "@/utils/constants";

export const languages = {
    en: 'en',
    es: 'es',
};

export const defaultLang = 'en';

export const startDate = new Date('2023-08-01');

export const yearsOfExperience = new Date().getFullYear() - startDate.getFullYear();

export const ui = {
    en: {
        'title': 'Full Stack Developer',
        description: 'Full stack software developer with expertise in cutting-edge technologies such as React, Node.js, Express, Java, PHP, Python, MongoDB, and PostgreSQL, among others.',
        "hero.title": "Juan Pablo Sánchez Villegas",
        "hero.subtitle": "Full Stack Developer",
        "hero.description.1": `<strong>Full Stack Software Developer</strong> with over ${yearsOfExperience} years of proven experience in web development. Specialized in crafting complex systems, APIs, web design, cloud solutions, and DevOps strategies.`,
        "hero.description.2": "Demonstrated strong capabilities in <strong>team collaboration</strong>, leadership, and the effective adoption of modern technologies to deliver <strong>successful, scalable projects</strong>.",
        "experience": "Work Experience",
        "about-me": "About Me",
        "projects": "Projects",
        "contact": "Contact",
        "open-source": "Open Source",
        "credits": `© ${CURRENT_YEAR} Based on the design by <a href="https://midu.dev/" class="hover:underline font-bold">midudev</a>. Licensed under <a href="https://github.com/midudev/porfolio.dev/tree/main" class="hover:underline font-bold">CC BY-NC 4.0</a>.`,
        "current": "Current",
        "experience.spider-security": "Played a pivotal role in the <strong>development</strong> and <strong>optimization</strong> of modules in <strong>\"Terque\"</strong> using <strong>CodeIgniter 4</strong> and <strong>PHP 8.3.2</strong>. Key accomplishments:<br><ul><li><strong>Modernized code</strong> and updated outdated modules.</li><li><strong>Transitioned to microservices</strong> with <strong>NestJS</strong> and <strong>Spring Boot</strong>.</li><li><strong>Enhanced database efficiency</strong> and improved the microservices architecture.</li><li><strong>Automated processes</strong> leveraging Azure DevOps.</li></ul> Resulted in <strong>greater efficiency</strong>, scalability, and platform stability.",
        "experience.dna-universe": "Led the development of a comprehensive platform for <strong>\"Sefty\"</strong>, incorporating <strong>Web 3.0</strong> technologies like cryptocurrencies, NFTs, and AI to elevate user experience. Highlights:<br><ul><li><strong>Upgraded technology stack</strong> to <strong>Next.js 14</strong> and <strong>NestJS</strong> for enhanced performance and scalability.</li><li><strong>Streamlined deployments</strong> using GitHub Actions and implemented <strong>NGINX</strong> as a reverse proxy and load balancer.</li><li><strong>Designed intuitive interfaces</strong> aligned with \"Sefty\"'s brand identity via <strong>TailwindCSS</strong> and <strong>Figma</strong>.</li></ul>",
        "experience.heavy-mogul": "Developed and maintained key modules in the company’s enterprise applications, ensuring continuous improvement of user experience. Achievements:<br><ul><li><strong>Optimized and maintained</strong> applications with new features for operational efficiency.</li><li><strong>Monitored systems</strong> through dashboards and logs for stability and quick resolution of issues.</li><li><strong>Directed IT team</strong> to establish strategic goals and track key performance metrics.</li></ul>",
        "exotik-zoo": "Exotik Zoo is a landing page designed for a company offering exotic animal care services. Built using React and TailwindCSS.",
        "deep-empire-bros": "Deep Empire Bros is a platform for lawyers and financiers providing legal and financial advisory services. Developed using Next.js and TailwindCSS.",
        "about-me.description.1": `Hi! My name is Juan Pablo Sánchez, and I am a ${AGE} year old <strong>Systems Engineer</strong> from the University of Medellín, Colombia. Since childhood, I've been fascinated by the intricate world of technology, always curious about how the modern world operates whether it's the internet, electrical signals, or how computers perform countless tasks using just <strong>1s and 0s</strong>. This curiosity paved the way for my passion in software development.`,
        "about-me.description.2": `I am a <strong>dedicated and enthusiastic programmer</strong> who loves tackling complex challenges, mentoring others, and continuously expanding my knowledge. I specialize in <strong>web development</strong>, where I blend creativity and technical expertise to craft solutions that not only solve problems but also enhance user experiences.`,
        "about-me.description.3": `In addition to my technical skills, I take pride in being an active contributor to my teams and the broader tech community. I believe in the power of collaboration and shared learning, which is why I actively share insights and guidance with colleagues, friends, and aspiring developers. For me, the joy of technology lies in its openness and collective growth. <strong>Learn, improve, and teach</strong> this is the mantra that drives me daily.`,

        "cv.spanish": "CV in Spanish",
        "cv.english": "CV in English",
        "open-source.switch": "Toggle to change the website's theme. Open source component on uiverse.com",
        "not-available": "Not Available",
        "preview": "Preview",
    },
    es: {
        'title': 'Desarrollador Full Stack',
        description: 'Desarrollador de software Full Stack con experiencia en tecnologías modernas como React, Node.js, Express, Java, PHP, Python, MongoDB y PostgreSQL, entre otras.',
        "hero.title": "Juan Pablo Sánchez Villegas",
        "hero.subtitle": "Desarrollador Full Stack",
        "hero.description.1": `<strong>Desarrollador de Software Full Stack</strong> con más de ${yearsOfExperience} años de experiencia comprobada en desarrollo web. Especializado en la creación de sistemas complejos, APIs, diseño web, soluciones en la nube y estrategias DevOps.`,
        "hero.description.2": "Habilidades destacadas en <strong>trabajo en equipo</strong>, liderazgo y adopción efectiva de tecnologías modernas para entregar proyectos <strong>exitosos y escalables</strong>.",
        "experience": "Experiencia Laboral",
        "about-me": "Sobre Mí",
        "projects": "Proyectos",
        "contact": "Contacto",
        "open-source": "Código Abierto",
        "credits": `© ${CURRENT_YEAR} Basado en el diseño de <a href="https://midu.dev/" class="hover:underline font-bold">midudev</a>. Licenciado bajo <a href="https://github.com/midudev/porfolio.dev/tree/main" class="hover:underline font-bold">CC BY-NC 4.0</a>.`,
        "current": "Actual",
        "experience.spider-security": "Participé en el <strong>desarrollo</strong> y la <strong>optimización</strong> de módulos en <strong>\"Terque\"</strong>, utilizando <strong>CodeIgniter 4</strong> y <strong>PHP 8.3.2</strong>. Logros principales:<br><ul><li><strong>Modernización de código</strong> y actualización de módulos obsoletos.</li><li><strong>Transición a microservicios</strong> con <strong>NestJS</strong> y <strong>Spring Boot</strong>.</li><li><strong>Optimización de bases de datos</strong> y mejora de la arquitectura de microservicios.</li><li><strong>Automatización de procesos</strong> con Azure DevOps.</li></ul> Esto resultó en <strong>mayor eficiencia</strong>, escalabilidad y estabilidad de la plataforma.",
        "experience.dna-universe": "Lideré el desarrollo de una plataforma integral para <strong>\"Sefty\"</strong>, integrando tecnologías de <strong>Web 3.0</strong> como criptomonedas, NFTs e inteligencia artificial para mejorar la experiencia del usuario. Principales logros:<br><ul><li><strong>Actualización del stack tecnológico</strong> a <strong>Next.js 14</strong> y <strong>NestJS</strong> para mejorar el rendimiento y la escalabilidad.</li><li><strong>Automatización de despliegues</strong> con GitHub Actions e implementación de <strong>NGINX</strong> como proxy inverso y balanceador de carga.</li><li><strong>Diseño de interfaces intuitivas</strong> alineadas con la identidad de marca de \"Sefty\" usando <strong>TailwindCSS</strong> y <strong>Figma</strong>.</li></ul>",
        "experience.heavy-mogul": "Desarrollé y mantuve módulos clave en las aplicaciones empresariales de la compañía, asegurando mejoras continuas en la experiencia del usuario. Principales logros:<br><ul><li><strong>Optimización y mantenimiento</strong> continuo de aplicaciones, integrando nuevas funcionalidades para mejorar la eficiencia operativa.</li><li><strong>Monitoreo proactivo</strong> de sistemas a través de dashboards y registros para garantizar estabilidad y resolución rápida de problemas.</li><li><strong>Gestión del equipo de TI</strong>, estableciendo objetivos estratégicos y métricas clave de desempeño.</li></ul>",
        "exotik-zoo": "Exotik Zoo es una landing page diseñada para una empresa que ofrece servicios de cuidado de animales exóticos. Desarrollada con React y TailwindCSS.",
        "deep-empire-bros": "Deep Empire Bros es una plataforma para abogados y financieros que ofrecen servicios de asesoría legal y financiera. Desarrollada con Next.js y TailwindCSS.",
        "about-me.description.1": `¡Hola! Mi nombre es Juan Pablo Sánchez y tengo ${AGE} años. Soy <strong>Ingeniero de Sistemas</strong> graduado de la Universidad de Medellín, en Colombia. Desde pequeño, he estado fascinado con el mundo de la tecnología, siempre curioso por entender cómo funciona el mundo moderno: el internet, las señales eléctricas o cómo los computadores logran realizar innumerables tareas utilizando únicamente <strong>1s y 0s</strong>. Esta curiosidad marcó el inicio de mi pasión por el desarrollo de software.`,
        "about-me.description.2": `Soy un <strong>programador apasionado y comprometido</strong> que disfruta enfrentar desafíos complejos, mentorear a otros y expandir constantemente mi conocimiento. Me especializo en el <strong>desarrollo web</strong>, donde combino creatividad y experiencia técnica para diseñar soluciones que no solo resuelven problemas, sino que también mejoran la experiencia del usuario.`,
        "about-me.description.3": `Además de mis habilidades técnicas, me enorgullece ser un contribuidor activo dentro de mis equipos y la comunidad tecnológica en general. Creo firmemente en el poder de la colaboración y el aprendizaje compartido, por lo que dedico tiempo a compartir conocimientos y orientar a colegas, amigos y desarrolladores en formación. Para mí, la tecnología es fascinante por su apertura y crecimiento colectivo. <strong>Aprender, mejorar y enseñar</strong>: este es el mantra que me motiva cada día.`,
        "cv.spanish": "CV en Español",
        "cv.english": "CV en Inglés",
        "open-source.switch": "Cambiar el tema de la página. Componente de código abierto en uiverse.com",
        "not-available": "No Disponible",
        "preview": "Vista Previa",
    },
} as const;