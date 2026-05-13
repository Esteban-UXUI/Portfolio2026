/* ============================================
   TRANSLATIONS — EN / ES
   ============================================ */

export const translations = {
  en: {
    'nav.about':'About','nav.skills':'Skills','nav.clients':'Clients','nav.experience':'Experience','nav.contact':'Contact',
    'hero.badge':'Available for senior roles',
    'hero.title':'Senior<br/>UX/UI <em>Designer</em><br/>&amp; Strategist',
    'hero.desc':'Transforming complex requirements into intuitive and elegant digital experiences — across banking, e-commerce, and streaming.',
    'hero.stat1':'Years exp.','hero.stat2':'Sectors','hero.stat3':'Senior roles','hero.scroll':'Scroll',
    'about.label':'01 — About',
    'about.title':'Design that\'s<br/><em>measured,</em><br/>not guessed.',
    'about.avail':'Open to senior opportunities · Bogotá / Remote',
    'about.p1':'I\'m a Senior UX/UI Designer with 6+ years of experience building digital products for banking, e-commerce, and streaming. My work lives at the intersection of user research, data-driven decisions, and elegant execution.',
    'about.p2':'I specialize in leading cross-functional design teams, architecting design systems, and translating business strategy into experiences that convert and retain. I\'ve worked directly with VPs and product leaders, presenting outcomes in terms that matter: metrics, retention, and revenue.',
    'about.p3':'Whether building from zero or scaling what exists — I bring structure, craft, and speed.',
    'about.photo':'Esteban · UXUI Designer',
    'skills.label':'02 — Skills',
    'projects.label':'03 — Projects','projects.title':'Selected<br/><em>work</em>','projects.count':'6 projects · hover to explore',
    'clients.label':'04 — Clients','clients.title':'Brands that<br/><em>trusted</em> the process.','clients.note':'Selected client work across banking, retail, tech & more.',
    'exp.label':'05 — Experience',
    'exp.hibrids.role':'Senior UX UI Designer','exp.hibrids.desc':'Led UX strategy, coordinated the design team, and maintained design systems. Validated solutions through research and testing. Collaborated across product, dev, and business teams.',
    'exp.imaginamos.role':'Senior UX UI Designer','exp.imaginamos.desc':'Defined cross-functional design strategies integrating AI models. Led and mentored high-performance UX teams. Reported outcomes to VPs. Architected design systems with advanced tokenization.',
    'exp.novatec.role':'UX UI Designer','exp.novatec.desc':'Designed front-end apps under Santander\'s design system. Led usability tests, A/B tests, and card sorting. Worked closely with devs, POs, and stakeholders.',
    'exp.inventto.role':'Graphic UX UI Designer','exp.inventto.desc':'User research through in-person interviews. Website optimization based on data and business goals. Built customer journey strategies and validated prototypes with end users.',
    'exp.storeon.role':'UX UI Designer','exp.storeon.desc':'E-commerce web design for tech brands including Samsung, Apple, and Black & Decker. Managed UI kits, wireframes, and functional prototypes. Applied Design Sprint and Lean methodologies.',
    'contact.eyebrow':'Let\'s work together','contact.title':'Ready for<br/>the <em>next</em><br/>challenge.','contact.location':'📍 Bogotá, Colombia · Open to remote & relocation',
    'footer.copy':'© 2026 Esteban UXUI · All rights reserved','footer.made':'Senior UX/UI Designer · Bogotá, Colombia',
    'theme.dark':'Light','theme.light':'Dark',
  },
  es: {
    'nav.about':'Sobre mí','nav.skills':'Habilidades','nav.clients':'Clientes','nav.experience':'Experiencia','nav.contact':'Contacto',
    'hero.badge':'Disponible para roles senior',
    'hero.title':'Diseñador<br/>UX/UI <em>Senior</em><br/>&amp; Estratega',
    'hero.desc':'Transformo requerimientos complejos en experiencias digitales intuitivas y elegantes — en banca, e-commerce y streaming.',
    'hero.stat1':'Años exp.','hero.stat2':'Sectores','hero.stat3':'Roles senior','hero.scroll':'Scroll',
    'about.label':'01 — Sobre mí',
    'about.title':'Diseño que se<br/><em>mide,</em><br/>no se adivina.',
    'about.avail':'Abierto a oportunidades senior · Bogotá / Remoto',
    'about.p1':'Soy un Diseñador UX/UI Senior con más de 6 años de experiencia creando productos digitales para banca, e-commerce y streaming. Mi trabajo vive en la intersección entre investigación de usuarios, decisiones basadas en datos y ejecución elegante.',
    'about.p2':'Me especializo en liderar equipos de diseño multifuncionales, arquitectar sistemas de diseño y traducir estrategia de negocio en experiencias que convierten y retienen. He trabajado directamente con VPs y líderes de producto, presentando resultados en términos que importan: métricas, retención e ingresos.',
    'about.p3':'Ya sea construyendo desde cero o escalando lo existente — aporto estructura, oficio y velocidad.',
    'about.photo':'Esteban · Diseñador UXUI',
    'skills.label':'02 — Habilidades',
    'projects.label':'03 — Proyectos','projects.title':'Trabajo<br/><em>selecto</em>','projects.count':'6 proyectos · hover para explorar',
    'clients.label':'04 — Clientes','clients.title':'Marcas que<br/><em>confiaron</em> en el proceso.','clients.note':'Trabajo selecto en banca, retail, tecnología y más.',
    'exp.label':'05 — Experiencia',
    'exp.hibrids.role':'Diseñador UX UI Senior','exp.hibrids.desc':'Lideré la estrategia UX, coordiné el equipo de diseño y mantuve los sistemas de diseño. Validé soluciones mediante investigación y pruebas.',
    'exp.imaginamos.role':'Diseñador UX UI Senior','exp.imaginamos.desc':'Definí estrategias de diseño multifuncionales integrando modelos de IA. Lideré equipos UX de alto rendimiento. Reporté resultados a VPs. Arquitecté sistemas de diseño con tokenización avanzada.',
    'exp.novatec.role':'Diseñador UX UI','exp.novatec.desc':'Diseñé apps front-end bajo el sistema de diseño de Santander. Lideré pruebas de usabilidad, A/B y card sorting.',
    'exp.inventto.role':'Diseñador Gráfico UX UI','exp.inventto.desc':'Investigación de usuarios mediante entrevistas presenciales. Optimización de sitios web basada en datos y objetivos de negocio.',
    'exp.storeon.role':'Diseñador UX UI','exp.storeon.desc':'Diseño web de e-commerce para marcas tech como Samsung, Apple y Black & Decker. Gestión de UI kits, wireframes y prototipos funcionales.',
    'contact.eyebrow':'Trabajemos juntos','contact.title':'Listo para<br/>el <em>próximo</em><br/>desafío.','contact.location':'📍 Bogotá, Colombia · Disponible remoto y reubicación',
    'footer.copy':'© 2026 Esteban UXUI · Todos los derechos reservados','footer.made':'Diseñador UX/UI Senior · Bogotá, Colombia',
    'theme.dark':'Claro','theme.light':'Oscuro',
  }
};

export function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update active state on lang buttons in nav
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.title = lang === 'es' ? 'Esteban · Diseñador UX/UI Senior' : 'Esteban · Senior UX/UI Designer';
}
