document.addEventListener('DOMContentLoaded', function() {
  const animatedSections = document.querySelectorAll('.anim-fadein, .anim-slidein');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    animatedSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 60) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Pour l'affichage initial

  // Animation logo à l'arrivée
  const logo = document.getElementById('logo-casasidi');
  if (logo) setTimeout(() => logo.classList.add('visible'), 200);

  // Parallax sur la bannière (version simple, comme avant)
  const banner = document.querySelector('.banner');
  window.addEventListener('scroll', function() {
    if (banner) {
      const y = window.scrollY;
      banner.style.backgroundPosition = `center ${y * 0.2}px`;
      banner.style.transform = '';
    }
  });

  // Transition de page sur navigation interne
  const links = document.querySelectorAll('a[href]');
  const transition = document.querySelector('.transition-page');
  links.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        if (link.target === '' || link.target === undefined) {
          // Si c'est une ancre locale (#...), laisser le scroll natif
          if (link.getAttribute('href').startsWith('#')) {
            // rien à faire, scroll natif
            return;
          }
          e.preventDefault();
          if (transition) {
            transition.classList.add('active');
            setTimeout(() => {
              window.location = link.href;
            }, 500);
          } else {
            window.location = link.href;
          }
        }
      });
    }
  });

  // Sélecteur de langue (fonctionnel)
  const translations = {
    es: {
      slogan: "Sabores auténticos de Marruecos en el corazón de España",
      presentacion: "Bienvenido a Casa Sidi",
      presentacionTxt: "Descubre una experiencia culinaria única con los mejores platos marroquíes, preparados con pasión y tradición.",
      btn_apropos: "Sobre nosotros",
      btn_contact: "Si quieres contactarnos",
      galeria: "Nuestro restaurante",
      equipo: "El equipo",
      equipo_txt: "Casa Sidi es un restaurante creado, gestionado y animado por una sola y misma familia, motivada por compartir la cultura culinaria marroquí y sus auténticos sabores.",
      nav: ["Inicio", "Menú", "Sobre nosotros", "Contacto"],
      especialidades: "Nuestras especialidades",
      plats: [
        "Pollo a la brasa",
        "Pastela de pollo o pescado",
        "Tajín de carne con ciruelas",
        "Cuscús marroquí",
        "Pincho moruno",
        "Té moruno con dulce árabe",
        "Ensalada marroquí"
      ],
      // Page contact
      contacto: "Contacto",
      contact_title: "Contáctanos",
      contact_info: "Información de contacto",
      address: "C. Peroniño, 60, 30205 Cartagena, Murcia, España",
      phone: "Teléfono: +34 632 66 59 18",
      email: "Email: info@casasidi.com",
      hours: "Los horarios pueden variar. Para mayor seguridad, realice su reserva previamente.",
      schedule: "Horario:",
      redes: "Nuestras redes sociales",
      legal_link: "Aviso legal",
      // Page à propos
      sobre: "Sobre nosotros",
      historia: "Nuestra historia",
      historia_txt: "Casa Sidi nace de la pasión por la cocina marroquí y el deseo de compartir sus sabores auténticos en España. Es un restaurante creado, gestionado y animado por una sola y misma familia, lo que le da un ambiente acogedor, cálido y auténtico. Cada plato cuenta una historia, cada especia evoca recuerdos de Marruecos.",
      valores: "Nuestros valores",
      equipo: "El equipo",
      equipo_txt: "Casa Sidi es un restaurante creado, gestionado y animado por una sola y misma familia, motivada por compartir la cultura culinaria marroquí y sus auténticos sabores.",
      valores_list: ["Autenticidad", "Hospitalidad", "Calidad", "Tradición"],
      galeria: "Nuestro restaurante",
      // Page mentions légales
      legal_title: "Aviso legal",
      company_info: "Información de la empresa",
      company_name: "Nombre:",
      legal_form: "Forma jurídica:",
      legal_form_value: "Empresario individual",
      tax_number: "NIF:",
      address: "Dirección:",
      phone: "Teléfono:",
      hosting: "Alojamiento",
      hosting_info: "Este sitio está alojado por Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Estados Unidos.",
      intellectual_property: "Propiedad intelectual",
      intellectual_property_info: "Todo este sitio está sujeto a la legislación española e internacional sobre derechos de autor y propiedad intelectual. Todos los derechos de reproducción están reservados, incluyendo para documentos descargables y representaciones iconográficas y fotográficas.",
      data_protection: "Protección de datos personales",
      data_protection_info: "De acuerdo con el Reglamento General de Protección de Datos (RGPD), tiene derecho a acceder, rectificar y eliminar los datos que le conciernen. Para ejercer estos derechos, contáctenos por teléfono.",
      cookies: "Cookies",
      cookies_info: "Este sitio no utiliza cookies de seguimiento. Solo se pueden usar cookies técnicas para el buen funcionamiento del sitio.",
      external_links: "Enlaces externos",
      external_links_info: "Este sitio puede contener enlaces a sitios externos. Casa Sidi no es responsable del contenido de estos sitios.",
      applicable_law: "Ley aplicable",
      applicable_law_info: "Este aviso legal está sujeto a la ley española. En caso de disputa, solo los tribunales españoles tendrán jurisdicción.",
      contact: "Contacto",
      contact_info_legal: "Para cualquier pregunta sobre este aviso legal, puede contactarnos por teléfono al +34 632 66 59 18.",
      last_update: "Última actualización: Agosto 2025"
    },
    fr: {
      slogan: "Saveurs authentiques du Maroc au cœur de l'Espagne",
      presentacion: "Bienvenue à Casa Sidi",
      presentacionTxt: "Découvrez une expérience culinaire unique avec les meilleurs plats marocains, préparés avec passion et tradition.",
      btn_apropos: "À propos de nous",
      btn_contact: "Si vous voulez nous contacter",
      galeria: "Notre restaurant",
      equipo: "L'équipe",
      equipo_txt: "Casa Sidi est un restaurant créé, géré et animé par une seule et même famille, motivée par le partage de la culture culinaire marocaine et de ses saveurs authentiques.",
      nav: ["Accueil", "Menu", "À propos", "Contact"],
      especialidades: "Nos spécialités",
      plats: [
        "Poulet rôti au feu de bois",
        "Pastilla au poulet ou au poisson",
        "Tajine de viande aux pruneaux",
        "Couscous marocain",
        "Brochette marocaine",
        "Thé marocain avec pâtisserie orientale",
        "Salade marocaine"
      ],
      // Page contact
      contacto: "Contact",
      contact_title: "Contactez-nous",
      contact_info: "Informations de contact",
      address: "C. Peroniño, 60, 30205 Cartagena, Murcia, Espagne",
      phone: "Téléphone : +34 632 66 59 18",
      email: "Email : info@casasidi.com",
      hours: "Les horaires peuvent varier. Pour plus de sécurité, veuillez réserver au préalable.",
      schedule: "Horaires :",
      redes: "Nos réseaux sociaux",
      legal_link: "Mentions légales",
      // Page à propos
      sobre: "À propos",
      historia: "Notre histoire",
      historia_txt: "Casa Sidi est né de la passion pour la cuisine marocaine et du désir de partager ses saveurs authentiques en Espagne. C'est un restaurant créé, géré et animé par une seule et même famille, ce qui lui donne une ambiance chaleureuse et authentique. Chaque plat raconte une histoire, chaque épice évoque des souvenirs du Maroc.",
      valores: "Nos valeurs",
      valores_list: ["Authenticité", "Hospitalité", "Qualité", "Tradition"],
      galeria: "Notre restaurant",
      // Page mentions légales
      legal_title: "Mentions légales",
      company_info: "Informations sur l'entreprise",
      company_name: "Nom :",
      legal_form: "Forme juridique :",
      legal_form_value: "Entrepreneur individuel",
      tax_number: "NIF :",
      address: "Adresse :",
      phone: "Téléphone :",
      hosting: "Hébergement",
      hosting_info: "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      intellectual_property: "Propriété intellectuelle",
      intellectual_property_info: "L'ensemble de ce site relève de la législation espagnole et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
      data_protection: "Protection des données personnelles",
      data_protection_info: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, veuillez nous contacter par téléphone.",
      cookies: "Cookies",
      cookies_info: "Ce site n'utilise pas de cookies de tracking. Seuls des cookies techniques peuvent être utilisés pour le bon fonctionnement du site.",
      external_links: "Liens externes",
      external_links_info: "Ce site peut contenir des liens vers des sites externes. Casa Sidi n'est pas responsable du contenu de ces sites.",
      applicable_law: "Droit applicable",
      applicable_law_info: "Les présentes mentions légales sont soumises au droit espagnol. En cas de litige, les tribunaux espagnols seront seuls compétents.",
      contact: "Contact",
      contact_info_legal: "Pour toute question concernant ces mentions légales, vous pouvez nous contacter par téléphone au +34 632 66 59 18.",
      last_update: "Dernière mise à jour : Août 2025"
    },
    en: {
      slogan: "Authentic Moroccan flavors in the heart of Spain",
      presentacion: "Welcome to Casa Sidi",
      presentacionTxt: "Discover a unique culinary experience with the best Moroccan dishes, prepared with passion and tradition.",
      btn_apropos: "About us",
      btn_contact: "If you want to contact us",
      galeria: "Our restaurant",
      equipo: "The team",
      equipo_txt: "Casa Sidi is a restaurant created, managed and run by a single family, motivated by sharing Moroccan culinary culture and its authentic flavors.",
      nav: ["Home", "Menu", "About us", "Contact"],
      especialidades: "Our specialties",
      plats: [
        "Charcoal grilled chicken",
        "Chicken or fish pastilla",
        "Meat tagine with prunes",
        "Moroccan couscous",
        "Moroccan skewer",
        "Moroccan tea with Arabic pastry",
        "Moroccan salad"
      ],
      // Page contact
      contacto: "Contact",
      contact_title: "Contact us",
      contact_info: "Contact information",
      address: "C. Peroniño, 60, 30205 Cartagena, Murcia, Spain",
      phone: "Phone: +34 632 66 59 18",
      email: "Email: info@casasidi.com",
      hours: "Hours may vary. For certainty, please book in advance.",
      schedule: "Hours:",
      redes: "Our social networks",
      legal_link: "Legal Notice",
      // Page à propos
      sobre: "About us",
      historia: "Our story",
      historia_txt: "Casa Sidi was born from a passion for Moroccan cuisine and the desire to share its authentic flavors in Spain. It is a restaurant created, managed and run by a single family, which gives it a warm and authentic atmosphere. Each dish tells a story, each spice evokes memories of Morocco.",
      valores: "Our values",
      valores_list: ["Authenticity", "Hospitality", "Quality", "Tradition"],
      galeria: "Our restaurant",
      // Page mentions légales
      legal_title: "Legal Notice",
      company_info: "Company Information",
      company_name: "Name:",
      legal_form: "Legal Form:",
      legal_form_value: "Individual Entrepreneur",
      tax_number: "Tax Number:",
      address: "Address:",
      phone: "Phone:",
      hosting: "Hosting",
      hosting_info: "This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
      intellectual_property: "Intellectual Property",
      intellectual_property_info: "This entire site is subject to Spanish and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.",
      data_protection: "Personal Data Protection",
      data_protection_info: "In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify and delete data concerning you. To exercise these rights, please contact us by phone.",
      cookies: "Cookies",
      cookies_info: "This site does not use tracking cookies. Only technical cookies may be used for the proper functioning of the site.",
      external_links: "External Links",
      external_links_info: "This site may contain links to external sites. Casa Sidi is not responsible for the content of these sites.",
      applicable_law: "Applicable Law",
      applicable_law_info: "These legal notices are subject to Spanish law. In case of dispute, only Spanish courts will have jurisdiction.",
      contact: "Contact",
      contact_info_legal: "For any questions regarding these legal notices, you can contact us by phone at +34 632 66 59 18.",
      last_update: "Last update: August 2025"
    }
  };

  function setLang(lang) {
    console.log('Langue appliquée:', lang);
    localStorage.setItem('casasidi-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    const t = translations[lang];
    if (!t) return;
    // Slogan (accueil)
    const slogan = document.querySelector('.slogan');
    if (slogan) slogan.textContent = t.slogan;
    // Nav
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((a, i) => { if (t.nav[i]) a.textContent = t.nav[i]; });
    // Présentation (accueil)
    const pres = document.querySelector('.presentacion h2');
    if (pres) pres.textContent = t.presentacion || '';
    const presTxt = document.querySelector('.presentacion p');
    if (presTxt) presTxt.textContent = t.presentacionTxt || '';
    // Galerie accueil
    // (Suppression de l'exception : on traduit toujours le titre de la galerie)
    // Spécialités/menu (accueil)
    const esp = document.querySelector('.especialidades h2');
    if (esp) esp.textContent = t.especialidades;
    const plats = document.querySelectorAll('.menu-plats li');
    plats.forEach((li, i) => { if (t.plats[i]) li.childNodes[1].nodeValue = ' ' + t.plats[i]; });
    // Titre galerie (accueil)
    const titreGalerie = document.getElementById('titre-galerie');
    if (titreGalerie && t.galeria) titreGalerie.textContent = t.galeria;
    // Titre équipe (accueil)
    const titreEquipe = document.querySelector('.equipo h2');
    if (titreEquipe && t.equipo) titreEquipe.textContent = t.equipo;
    // Texte sous le titre équipe (accueil et acerca.html)
    const equipeTxt = document.querySelector('.equipo p');
    if (equipeTxt && t.equipo_txt) equipeTxt.textContent = t.equipo_txt;
    // Footer
    const footer = document.querySelector('footer p');
    if (footer) footer.innerHTML = t.footer || footer.innerHTML;
    // Boutons du footer (accueil)
    const btnApropos = document.querySelector('.footer-btn[href="acerca.html"]');
    const btnContact = document.querySelector('.footer-btn[href="contacto.html"]');
    if (btnApropos && t.btn_apropos) btnApropos.textContent = t.btn_apropos;
    if (btnContact && t.btn_contact) btnContact.textContent = t.btn_contact;
    // Page contact
    // Contact info (adresse, téléphone, email, horaires)
    if (window.location.pathname.endsWith('contacto.html')) {
      // Traduction des éléments avec data-lang
      const elements = document.querySelectorAll('[data-lang]');
      elements.forEach(el => {
        const key = el.dataset.lang;
        if (t[key]) {
          el.textContent = t[key];
        }
      });
    }
    // Réseaux sociaux
    const contactTitle = document.querySelector('.redes-sociales h3');
    if (contactTitle) contactTitle.textContent = t.redes;
    // Page à propos
    if (window.location.pathname.endsWith('acerca.html')) {
      const sobre = document.querySelector('nav a[href="acerca.html"]');
      if (sobre) sobre.textContent = t.sobre;
      // Traduction précise des titres de section
      const hist = document.querySelector('section.anim-fadein h2');
      if (hist) hist.textContent = t.historia;
      const histTxt = document.querySelector('section.anim-fadein p');
      if (histTxt) histTxt.textContent = t.historia_txt;
      const valores = document.querySelector('section.anim-slidein h2');
      if (valores) {
        console.log('Titre valeurs (fr):', t.valores);
        valores.textContent = t.valores;
      }
      const valoresList = document.querySelector('section.anim-slidein ul');
      if (valoresList && t.valores_list) {
        valoresList.innerHTML = t.valores_list.map(v => `<li>${v}</li>`).join('');
      }
      const eq = document.querySelector('section.equipo h2');
      if (eq) eq.textContent = t.equipo;
      const eqTxt = document.querySelector('section.equipo p');
      if (eqTxt) {
        console.log('Texte équipe (langue):', t.equipo_txt);
        eqTxt.textContent = t.equipo_txt;
      }
    }

    
    // Traduction du lien "Mentions légales" dans le footer (toutes les pages)
    const legalLink = document.querySelector('a[href="mentions-legales.html"]');
    if (legalLink && t.legal_link) {
      legalLink.textContent = t.legal_link;
    }
    // Page mentions légales
    if (window.location.pathname.endsWith('mentions-legales.html')) {
      console.log('Traduction mentions légales pour langue:', lang);
      // Traduction des titres et textes
      const elements = document.querySelectorAll('[data-lang]');
      elements.forEach(el => {
        const key = el.dataset.lang;
        if (t[key]) {
          el.textContent = t[key];
          console.log('Traduit:', key, '->', t[key]);
        }
      });
    }
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setLang(btn.dataset.lang);
    });
  });

  // Appliquer la langue au chargement
  const savedLang = localStorage.getItem('casasidi-lang') || 'es';
  setLang(savedLang);
  document.documentElement.setAttribute('lang', savedLang);

  // Accessibilité : contraste et taille de police
  document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'c') {
      document.body.classList.toggle('access-contraste');
    }
    if (e.altKey && e.key === '+') {
      document.documentElement.style.setProperty('--font-size', '18px');
      document.body.classList.add('access-bigtext');
    }
    if (e.altKey && e.key === '-') {
      document.documentElement.style.setProperty('--font-size', '16px');
      document.body.classList.remove('access-bigtext');
    }
  });

  // Menu burger mobile
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // Fermer le menu quand on clique sur un lien
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }
});

// === PARTICULES ANIMÉES EN FOND ===
(function() {
  const canvas = document.getElementById('bg-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  let dpr = window.devicePixelRatio || 1;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  // Paramètres des particules (plus subtil mais visible)
  const PARTICLE_COUNT = Math.max(38, Math.floor(w/28));
  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.7 + Math.random() * 3.5,
      speed: 0.22 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      drift: (Math.random()-0.5) * 0.22,
      alpha: 0.15 + Math.random() * 0.18
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*2.2);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.4, '#dddddd');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r*2.2, 0, Math.PI*2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
      // Mouvement
      p.y -= p.speed;
      p.x += Math.sin(p.angle) * p.drift;
      p.angle += 0.01 * (Math.random()-0.5);
      if (p.y < -10) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// === ANIMATION D'APPARITION DES SECTIONS (plus visible) ===
(function() {
  const animatedSections = document.querySelectorAll('.anim-fadein, .anim-slidein');
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    animatedSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 60) {
        section.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
})(); 