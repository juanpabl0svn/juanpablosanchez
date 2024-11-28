import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as createTransitionScope, b as renderComponent, u as unescapeHTML, g as renderHead, h as renderSlot } from './astro/server_BFGrffTV.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const EMAIL = {
  name: "juanpablo@yconsultores.com",
  ref: "mailto:juanpablo@yconsultores.com"
};
const GITHIUB = {
  name: "juanpabl0svn",
  ref: "https://github.com/juanpabl0svn"
};
const LINKEDIN = {
  name: "juan-pablo-sanchez-villegas",
  ref: "https://www.linkedin.com/in/juan-pablo-sanchez-villegas/"
};
const CURRENT_YEAR = (/* @__PURE__ */ new Date()).getFullYear();
const BORN_DATE = 2003;
const AGE = CURRENT_YEAR - BORN_DATE;
const ALT_IMAGE_PROFILE = "Juan Pablo Sánchez Villegas";

const defaultLang = "es";
const ui = {
  en: {
    "title": "Software full stack developer",
    description: "Full stack software developer with experience in technologies such as React, Node.js, Express, MongoDB, PostgreSQL, among others.",
    "hero.title": "Juan Pablo Sánchez Villegas",
    "hero.subtitle": "Full Stack Developer",
    "hero.description.1": "<strong>Full Stack Software Developer</strong> with more than two years of experience in web development, specialized in the creation of complex systems, APIs, web design, cloud solutions, DevOps and more.",
    "hero.description.2": "I have solid skills in <strong>teamwork</strong>, leadership and the implementation of modern technologies to drive <strong>successful and scalable projects.</strong>",
    "experience": "Work Experience",
    "about-me": "About me",
    "projects": "Projects",
    "contact": "Contact",
    "open-source": "Open Source",
    "credits": `© ${CURRENT_YEAR} Based in the design of <a href="https://midu.dev/" class="hover:underline font-bold" >midudev</a>. License <a href="https://github.com/midudev/porfolio.dev/tree/main" class="hover:underline font-bold">CC BY-NC 4.0.</a>`,
    "current": "Current",
    "experience.spider-security": "Here en Spider Security",
    "experience.dna-universe": "Here en DNA",
    "exotik-zoo": "Exotik Zoo is a landing page that was made for a company that sells and provides exotic animal care services. The page was made with React and TailwindCSS.",
    "deep-empire-bros": "Deep Empire Bros is an association of lawyers and financiers who provide legal and financial advice services for all types of companies. The page was made with Next and TailwindCSS.",
    "about-me.description.1": `My name is Juan Pablo Sanchez, I am ${AGE} years old, I am a <strong>Systems Engineer</strong> from the University of Medellín, here in Colombia. Since I was a child I have been interested in the world of technology, mainly the functioning of the modern world: how the internet works, signals, electricity and how it is possible that a computer can do so many things through <strong>1 and 0</strong>.`,
    "about-me.description.2": "I am an <strong>enthusiastic programmer</strong>, I love supporting projects, teaching and learning a little about everything. I found my passion for <strong>web development</strong> and I feel that it is the place where I can contribute the most to the community. Every day I am more impressed by the rapid progress that this has.",
    "about-me.description.3": "In my day to day, I try to teach and give back some of what this incredible world has given me in my life, both to work colleagues, friends and family. I love sharing knowledge and learning from others. This world of technology fascinates me because we share everything and we have the same goal: <strong>learn, improve and teach</strong>."
  },
  es: {
    "title": "Desarrollador de software Full Stack",
    description: "Desarrollador de software Full Stack con experiencia en tecnologías como React, Node.js, Express, MongoDB, PostgreSQL, entre otras.",
    "hero.title": "Juan Pablo Sánchez Villegas",
    "hero.subtitle": "Desarrollador Full Stack",
    "hero.description.1": "<strong>Desarrollador de software Full Stack</strong> con más de dos años de experiencia en el desarrollo web, especializado en la creación de sistemas complejos, APIs, diseño web, soluciones en la nube, DevOps y más.",
    "hero.description.2": "Poseo habilidades sólidas en <strong>trabajo en equipo</strong>, liderazgo y la implementación de tecnologías modernas para impulsar proyectos <strong>exitosos y escalables.</strong>",
    "experience": "Experiencia laboral",
    "about-me": "Sobre mi",
    "projects": "Proyectos",
    "contact": "Contacto",
    "open-source": "Código abierto",
    "credits": `© ${CURRENT_YEAR} Basado en el diseño de <a href="https://midu.dev/" class="hover:underline font-bold" >midudev</a>. Licencia <a href="https://github.com/midudev/porfolio.dev/tree/main" class="hover:underline font-bold">CC BY-NC 4.0.</a>`,
    "current": "Actual",
    "experience.spider-security": "Aquí en Spider Security",
    "experience.dna-universe": "Aquí en DNA",
    "exotik-zoo": "Exotik Zoo es una landing page que se realizó para una empresa la cual vende y propociona servicios de cuidado de animales exóticos. La página fue realizada con React y TailwindCSS.",
    "deep-empire-bros": "Deep Empire Bros es una asociación de abogados y financieros los cuales proporcionan servicios de asesoría legal y financiera para todo tipo de empresa. La página fue realizada con Next y TailwindCSS.",
    "about-me.description.1": `Me llamo Juan Pablo Sanchez, tengo ${AGE} años, soy <strong>Ingeniero de Sistemas</strong> de la Universidad de Medellín, aquí en Colombia. Desde pequeño me ha interesado el mundo de la tecnología, principalmente el funcionamiento del mundo moderno: cómo funciona el internet, las señales, la electricidad y cómo es posible que un computador pueda hacer tantas cosas mediante <strong>1 y 0</strong>.`,
    "about-me.description.2": "Soy un <strong>programador entusiasta</strong>, me encanta apoyar proyectos, enseñar y aprender un poco sobre todo. Encontré mi pasión por el <strong>desarrollo web</strong> y siento que es el lugar donde puedo aportar más a la comunidad. Cada día me impresiona más el rápido progreso que tiene este.",
    "about-me.description.3": "En mi día a día, trato de enseñar y devolver algo de lo que este increíble mundo me ha aportado en mi vida, tanto a compañeros de trabajo, amigos y familiares. Me encanta compartir conocimiento y aprender de los demás. Este mundo de la tecnología me fascina porque compartimos todo y tenemos un mismo objetivo: <strong>aprender, mejorar y enseñar</strong>."
  }
};

function useTranslations(lang = defaultLang) {
  return function t(key) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

const $$Astro$q = createAstro("https://juanpablosanchez.vercel.app/");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Sun.astro", void 0);

const $$Astro$p = createAstro("https://juanpablosanchez.vercel.app/");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Moon.astro", void 0);

const $$Astro$o = createAstro("https://juanpablosanchez.vercel.app/");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", () => themesMenu.classList.remove("open"))

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenu.classList.contains("open")
    themesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/ThemeToggle.astro", "self");

const $$Astro$n = createAstro("https://juanpablosanchez.vercel.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  const navItems = [
    {
      title: t("experience"),
      label: "experience",
      url: "#experience"
    },
    {
      title: t("projects"),
      label: "projects",
      url: "#projects"
    },
    {
      title: t("open-source"),
      label: "open-source",
      url: "#open-source"
    },
    {
      title: t("about-me"),
      label: "about-me",
      url: "#about-me"
    },
    {
      title: t("contact"),
      label: "contact",
      url: "mailto:juanpablo@yconsultores.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Header.astro", void 0);

const $$Astro$m = createAstro("https://juanpablosanchez.vercel.app/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">${unescapeHTML(t("credits"))}</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0 text-center"> <li> <a href="#about-me" class="hover:underline me-4 md:me-6">${t("about-me")}</a> </li> <li> <a id="contacto" href="mailto:miduga@gmail.com" class="hover:underline">${t("contact")}</a> </li> </ul> </div> </footer>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Footer.astro", void 0);

const $$Astro$l = createAstro("https://juanpablosanchez.vercel.app/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$k = createAstro("https://juanpablosanchez.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro("https://juanpablosanchez.vercel.app/");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 px-4"> <p>${unescapeHTML(t("about-me.description.1"))}</p> <p>${unescapeHTML(t("about-me.description.2"))}</p> <p>${unescapeHTML(t("about-me.description.3"))}</p> </div> <img width="200" height="200" src="/me.jpg"${addAttribute(ALT_IMAGE_PROFILE, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20" style="object-position: 50% 50%"> </article>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/AboutMe.astro", void 0);

const $$Astro$i = createAstro("https://juanpablosanchez.vercel.app/");
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Briefcase.astro", void 0);

const $$Astro$h = createAstro("https://juanpablosanchez.vercel.app/");
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Code.astro", void 0);

const $$Astro$g = createAstro("https://juanpablosanchez.vercel.app/");
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/LinkInline.astro", void 0);

const $$Astro$f = createAstro("https://juanpablosanchez.vercel.app/");
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> </svg> ` })}`} </div> </div>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/ExperienceItem.astro", void 0);

const $$Astro$e = createAstro("https://juanpablosanchez.vercel.app/");
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Experience;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  const EXPERIENCE = [
    {
      date: "2024/07 - " + t("current"),
      title: "Software Developer",
      company: "Spider Security S.A.S",
      description: t("experience.spider-security")
    },
    {
      date: "2023/08 - 2024/07",
      title: "Software Developer Jr.",
      company: "DNA Universe",
      description: t("experience.dna-universe")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Experience.astro", void 0);

const $$Astro$d = createAstro("https://juanpablosanchez.vercel.app/");
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$c = createAstro("https://juanpablosanchez.vercel.app/");
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/NextJS.astro", void 0);

const $$Astro$b = createAstro("https://juanpablosanchez.vercel.app/");
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Tailwind.astro", void 0);

const $$Astro$a = createAstro("https://juanpablosanchez.vercel.app/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Link.astro", void 0);

const $$Astro$9 = createAstro("https://juanpablosanchez.vercel.app/");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/LinkButton.astro", void 0);

const $$Astro$8 = createAstro("https://juanpablosanchez.vercel.app/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Projects;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    }
  };
  const PROJECTS = [
    {
      title: "Deep Empire Bros.",
      description: t("deep-empire-bros"),
      link: "https://deepempirebros.com/",
      image: "/projects/deep-empire-bros.png",
      tags: [TAGS.NEXT, TAGS.TAILWIND]
    },
    {
      title: "Exotik Zoo Landing Page",
      description: t("exotik-zoo"),
      link: "https://svgl.vercel.app/",
      image: "/projects/exotik-zoo.png",
      tags: [TAGS.NEXT, TAGS.TAILWIND]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16 px-5"> ${PROJECTS.map(({ image, title, description, tags, link }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400"> ${description} </div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Projects.astro", void 0);

const $$Astro$7 = createAstro("https://juanpablosanchez.vercel.app/");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/SectionContainer.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Badge.astro", void 0);

const $$Astro$6 = createAstro("https://juanpablosanchez.vercel.app/");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$5 = createAstro("https://juanpablosanchez.vercel.app/");
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/GitHub.astro", void 0);

const $$Astro$4 = createAstro("https://juanpablosanchez.vercel.app/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/Mail.astro", void 0);

const $$Astro$3 = createAstro("https://juanpablosanchez.vercel.app/");
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/SocialPill.astro", void 0);

const $$Astro$2 = createAstro("https://juanpablosanchez.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="/me.jpg"${addAttribute(ALT_IMAGE_PROFILE, "alt")}> <a${addAttribute(LINKEDIN.ref, "href")} target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`${t("hero.subtitle")}` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"> ${t("hero.title")} </h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">${unescapeHTML(t("hero.description.1"))}</p> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">${unescapeHTML(t("hero.description.2"))}</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": EMAIL.ref }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Email
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": LINKEDIN.ref }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": GITHIUB.ref }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHubIcon", $$GitHub, { "class": "size-4" })}
Github
` })} </nav> </div>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://juanpablosanchez.vercel.app/");
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white pl-2 ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/TitleSection.astro", void 0);

const $$Astro = createAstro("https://juanpablosanchez.vercel.app/");
const $$OpenSource = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OpenSource;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}><path fill="#ffffff" d="M12.001 2c5.523 0 10 4.477 10 10c0 4.4-2.841 8.136-6.789 9.473l-.226.074l-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549l-.225-.074C4.842 20.136 2 16.4 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0l1.479 3.85A8 8 0 0 0 12 4"></path></svg>`;
}, "C:/Users/Juan Pa Sanchez/Desktop/portfolio-migration/src/components/icons/OpenSource.astro", void 0);

export { $$Layout as $, $$SectionContainer as a, $$Hero as b, $$TitleSection as c, $$Briefcase as d, $$Experience as e, $$Code as f, $$Projects as g, $$OpenSource as h, $$ProfileCheck as i, $$AboutMe as j, useTranslations as u };
