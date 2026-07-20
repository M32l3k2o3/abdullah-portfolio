let currentLanguage = "ar";

const translations = {
  ar: {
    "loader.text": "جاري تحميل تجربة البيانات",
    "nav.home": "الرئيسية",
    "nav.about": "نبذة",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.timeline": "المسار",
    "nav.contact": "تواصل",
    "hero.eyebrow": "معرض أعمال ذكاء الأعمال",
    "hero.copy": "تحويل البيانات المعقدة إلى رؤى واضحة وقرارات أعمال أفضل.",
    "hero.ctaWork": "استكشف أعمالي",
    "hero.ctaFeatured": "شاهد لوحة البيانات المميزة",
    "hero.ctaContact": "تواصل معي",
    "hero.widgetOneLabel": "التخصص",
    "hero.widgetOneText": "لوحات رؤى تفاعلية",
    "hero.widgetTwoLabel": "منهج العمل",
    "hero.widgetTwoText": "نمذجة ومقاييس تحليلية",
    "about.eyebrow": "نبذة",
    "about.heading": "تفكير تحليلي وتنفيذ يركز على قيمة الأعمال.",
    "about.bodyOne": "اسمي عبدالله محمد، محلل بيانات شغوف بتحويل البيانات إلى رؤى أعمال واضحة وحلول تدعم اتخاذ القرار.",
    "about.bodyTwo": "أكملت أكثر من 540+ ساعة من التعلم والتطبيق العملي في تحليل البيانات، وتطوير لوحات المعلومات، وتصوير البيانات، وذكاء الأعمال.",
    "about.counter": "ساعة تعلم وتطبيق عملي",
    "skills.eyebrow": "المهارات",
    "skills.heading": "أدوات لتنظيف البيانات وبناء النماذج وتقديم لوحات جاهزة لاتخاذ القرار.",
    "stats.learning": "ساعة تعلم",
    "stats.tech": "تقنيات أساسية",
    "stats.projects": "مشاريع حقيقية",
    "stats.passion": "شغف بالبيانات",
    "projects.eyebrow": "المشاريع",
    "projects.heading": "أعمال Power BI حقيقية تجمع بين المقاييس والرؤى وسياق الأعمال.",
    "timeline.eyebrow": "المسار",
    "timeline.heading": "بناء حلول تحليلية حديثة من البيانات الخام إلى ذكاء أعمال جاهز للإدارة.",
    "contact.eyebrow": "تواصل",
    "contact.heading": "دع البيانات تحكي القصة التالية.",
    "contact.copy": "تواصل مع عبدالله محمد لتنفيذ لوحات Power BI، وتقارير ذكاء الأعمال، ونمذجة البيانات، وأتمتة التقارير، وتحليلات دعم القرار.",
    "contact.linkedin": "لينكدإن",
    "contact.email": "البريد الإلكتروني",
    "contact.whatsapp": "واتساب",
    "footer.text": "تصميم وتطوير عبدالله محمد",
    pageTitle: "عبدالله محمد | معرض أعمال محلل بيانات",
    liveDemo: "عرض التقرير",
    open: "فتح"
  },
  en: {
    "loader.text": "Loading data intelligence",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.timeline": "Timeline",
    "nav.contact": "Contact",
    "hero.eyebrow": "Business intelligence portfolio",
    "hero.copy": "Transforming complex data into clear insights and better business decisions.",
    "hero.ctaWork": "Explore My Work",
    "hero.ctaFeatured": "View Featured Dashboard",
    "hero.ctaContact": "Contact Me",
    "hero.widgetOneLabel": "Specialty",
    "hero.widgetOneText": "Insight dashboards",
    "hero.widgetTwoLabel": "Workflow",
    "hero.widgetTwoText": "Modeling and measures",
    "about.eyebrow": "About",
    "about.heading": "Analytical thinking, business-focused execution.",
    "about.bodyOne": "My name is Abdullah Mohamed, a passionate Data Analyst focused on transforming data into clear business insights and decision-support solutions.",
    "about.bodyTwo": "I have completed more than 540+ hours of learning and hands-on practice in data analysis, dashboard development, data visualization, and business intelligence.",
    "about.counter": "Hours of Learning & Practice",
    "skills.eyebrow": "Skills",
    "skills.heading": "Tools for clean data, clear models, and decision-ready dashboards.",
    "stats.learning": "Hours Learning",
    "stats.tech": "Core Technologies",
    "stats.projects": "Real Projects",
    "stats.passion": "Passion for Data",
    "projects.eyebrow": "Projects",
    "projects.heading": "Real Power BI work with metrics, insights, and business context.",
    "timeline.eyebrow": "Timeline",
    "timeline.heading": "Building modern analytics solutions from raw data to executive-ready business intelligence.",
    "contact.eyebrow": "Contact",
    "contact.heading": "Let the data tell the next story.",
    "contact.copy": "Connect with Abdullah Mohamed for Power BI dashboards, business intelligence reports, data modeling, reporting automation, and decision-support analytics.",
    "contact.linkedin": "LinkedIn",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "footer.text": "Designed & Developed by Abdullah Mohamed",
    pageTitle: "Abdullah Mohamed | Data Analyst Portfolio",
    liveDemo: "Live Demo",
    open: "Open"
  }
};

const roles = {
  ar: ["محلل بيانات", "محلل ذكاء أعمال", "مطور Power BI", "مطور SQL", "محلل بيانات Python", "تصميم لوحات البيانات"],
  en: ["Data Analyst", "Business Intelligence Analyst", "Power BI Developer", "SQL Developer", "Python Data Analyst", "Dashboard Design"]
};

const skills = [
  { en: "Power BI", ar: "Power BI", percent: 92, icon: "BI" },
  { en: "Excel", ar: "Excel", percent: 90, icon: "XL" },
  { en: "Power Query", ar: "Power Query", percent: 88, icon: "PQ" },
  { en: "Power Pivot", ar: "Power Pivot", percent: 84, icon: "PP" },
  { en: "SQL", ar: "SQL", percent: 82, icon: "SQL" },
  { en: "Python", ar: "Python", percent: 78, icon: "PY" },
  { en: "Pandas", ar: "Pandas", percent: 76, icon: "PD" },
  { en: "NumPy", ar: "NumPy", percent: 72, icon: "NP" }
];

const projects = [
  {
    title: { en: "Superstore Dashboard", ar: "لوحة بيانات Superstore" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiODdmZWFiY2QtNzcwOC00OTgwLTgyNTktMjNkODJkMDE3Mzc1IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A sales and profit performance dashboard focused on profitability, discount impact, shipping efficiency, product losses, segments, and regional insights.",
      ar: "لوحة أداء للمبيعات والأرباح تركز على الربحية، وتأثير الخصومات، وكفاءة الشحن، والمنتجات الخاسرة، والشرائح، والرؤى الإقليمية."
    },
    metrics: { en: ["Profitability", "Discount Impact", "Shipping Efficiency"], ar: ["الربحية", "تأثير الخصومات", "كفاءة الشحن"] },
    tech: ["Power BI", "DAX", "Power Query", "Business Insights"],
    image: "./assets/superstore-dashboard.jpg"
  },
  {
    title: { en: "E-commerce Customer Analytics Dashboard", ar: "لوحة تحليلات عملاء التجارة الإلكترونية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiZDM3ODIwYTktZjJkNy00ZjEzLWI2YzEtMDUyODY5NTU1ZjFkIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A customer analytics dashboard covering revenue, orders, customer value, loyalty tiers, age groups, geography, and preferred categories.",
      ar: "لوحة تحليلات عملاء تغطي الإيرادات، والطلبات، وقيمة العملاء، ومستويات الولاء، والفئات العمرية، والجغرافيا، والتصنيفات المفضلة."
    },
    metrics: { en: ["1.52M Revenue", "14.512K Orders", "266K Customers"], ar: ["1.52M إيرادات", "14.512K طلب", "266K عميل"] },
    tech: ["Power BI", "DAX", "Customer Analytics", "Data Modeling"],
    image: "./assets/customer-analytics.jpg"
  },
  {
    title: { en: "E-Commerce Sales Dashboard", ar: "لوحة مبيعات التجارة الإلكترونية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDM0MzE1NzgtNzU4Ny00NzIwLWE2NTktYmE1NDc5ODI2NmQ1IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A sales overview dashboard featuring KPI cards, revenue trends, order analysis, mobile vs. desktop performance, and geographic sales insights.",
      ar: "لوحة نظرة عامة على المبيعات تضم بطاقات مؤشرات، واتجاهات الإيرادات، وتحليل الطلبات، وأداء الهاتف مقابل سطح المكتب، ورؤى جغرافية للمبيعات."
    },
    metrics: { en: ["KPI Cards", "Revenue Trends", "Device Analysis"], ar: ["بطاقات مؤشرات", "اتجاهات الإيرادات", "تحليل الأجهزة"] },
    tech: ["Power BI", "DAX", "Power Query"],
    image: "./assets/ecommerce-sales.jpg"
  },
  {
    title: { en: "E-Commerce Sales Performance Dashboard", ar: "لوحة أداء مبيعات التجارة الإلكترونية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDQxZGZiNzAtZTAzNC00YzNjLWI3M2YtYTk4YWFlYjA0MDI1IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A complete Power BI dashboard transforming complex sales data into clear executive, revenue, return, shipping, country, product, and provider insights.",
      ar: "لوحة Power BI متكاملة تحول بيانات المبيعات المعقدة إلى رؤى تنفيذية واضحة حول الإيرادات والمرتجعات والشحن والدول والمنتجات ومزودي الخدمة."
    },
    metrics: { en: ["60.143M Revenue", "57.01M Net Revenue", "5.00% Return Rate"], ar: ["60.143M إيرادات", "57.01M صافي إيرادات", "5.00% معدل إرجاع"] },
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Time Intelligence"],
    image: "./assets/ecommerce-performance.jpg"
  },
  {
    title: { en: "E-Commerce Analysis", ar: "تحليل التجارة الإلكترونية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTM4MWE5OTItNDQwZS00ZTQ2LThlNzgtNTAzZWI3NjU1NDUxIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A five-page analysis of profitability, customer behavior, demographics, and feedback, revealing female customers as the strongest purchasing segment.",
      ar: "تحليل من خمس صفحات للربحية وسلوك العملاء والخصائص الديموغرافية والتقييمات، مع إبراز العميلات كأقوى شريحة شرائية."
    },
    metrics: { en: ["5 Pages", "33 DAX Measures", "Advanced KPIs"], ar: ["5 صفحات", "33 مقياس DAX", "مؤشرات متقدمة"] },
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    image: "./assets/ecommerce-analysis.jpg"
  },
  {
    title: { en: "Samsung Global Sales Intelligence", ar: "تحليل مبيعات سامسونج العالمية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2Q1OTQzYzAtZDczYy00NzFjLWFiMmItZjk2ZWFhMGFmNzFhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "Global Samsung analysis across 40 countries from 2021 to 2024, covering channels, customers, products, and Apple ecosystem overlap.",
      ar: "تحليل عالمي لسامسونج عبر 40 دولة من 2021 إلى 2024 يغطي القنوات والعملاء والمنتجات وتداخل منظومة Apple."
    },
    metrics: { en: ["$22.91M Revenue", "40 Countries", "$627 AOV"], ar: ["$22.91M إيرادات", "40 دولة", "$627 متوسط الطلب"] },
    tech: ["Power BI", "DAX", "Power Query", "Star Schema"],
    image: "./assets/samsung-sales.jpg"
  },
  {
    title: { en: "Automotive Market Analysis", ar: "تحليل سوق السيارات" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiM2QwZjRjM2EtNDEyMS00ZGY0LTkxYTctODZmMDRkZGJjOWU1IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A large-scale automotive market study using more than 558,802 sales records, identifying Ford leadership and strong regional concentration.",
      ar: "دراسة واسعة لسوق السيارات باستخدام أكثر من 558,802 سجل مبيعات، مع تحديد قيادة Ford وتركيز المبيعات في مناطق رئيسية."
    },
    metrics: { en: ["7.49B Sales", "547.7K Cars Sold", "13.68K Avg Price"], ar: ["7.49B مبيعات", "547.7K سيارة", "13.68K متوسط السعر"] },
    tech: ["Power BI", "Power Query", "Data Analysis", "Visualization"],
    image: "./assets/automotive-market.jpg"
  },
  {
    title: { en: "Smartwatch Market Analysis", ar: "تحليل سوق الساعات الذكية" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjEyZjI0NDMtZDQzYy00OWIxLTgxYjktMDljZWU5MDJmMWY1IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "Market intelligence across 30,000+ smartwatch records, highlighting Apple's premium dominance and international shipping opportunity.",
      ar: "تحليل سوقي لأكثر من 30,000 سجل ساعات ذكية يوضح هيمنة Apple في الفئة المميزة وفرص النمو عبر الشحن الدولي."
    },
    metrics: { en: ["$2.228M Revenue", "$618 Avg Price", "61.9% Used"], ar: ["$2.228M إيرادات", "$618 متوسط السعر", "61.9% مستخدم"] },
    tech: ["Power BI", "Power Query", "Data Cleaning", "Data Modeling"],
    image: "./assets/smartwatch-market.jpg"
  },
  {
    title: { en: "Airline Sector Analysis", ar: "تحليل قطاع الطيران" },
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjdjYmYyNDgtNTFjYi00YmJkLTg4MTQtNjQ2OTBmZGI0MDNkIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    description: {
      en: "A 2019-2026 airline sector analysis examining geopolitical events, fuel price shocks, routes, margins, and strategic risk.",
      ar: "تحليل لقطاع الطيران من 2019 إلى 2026 يدرس الأحداث الجيوسياسية وصدمات أسعار الوقود والمسارات والهوامش والمخاطر الاستراتيجية."
    },
    metrics: { en: ["25 Events", "7 Periods", "10.74% Avg Margin"], ar: ["25 حدث", "7 فترات", "10.74% متوسط الهامش"] },
    tech: ["Trend Analysis", "Risk Analysis", "BI", "Decision Support"],
    image: "./assets/airline-sector.jpg"
  }
];

const timeline = {
  en: [
    "Started learning Excel",
    "Learned Power Query",
    "Built Power BI dashboards",
    "Learned DAX and Time Intelligence",
    "Practiced SQL",
    "Started Python and Pandas",
    "Built real-world analysis projects",
    "Created a professional Data Analyst portfolio"
  ],
  ar: [
    "بدأ تعلم Excel",
    "تعلم Power Query",
    "بنى لوحات Power BI",
    "تعلم DAX وذكاء الوقت",
    "تدرب على SQL",
    "بدأ Python وPandas",
    "نفذ مشاريع تحليل واقعية",
    "أنشأ معرض أعمال احترافي لمحلل بيانات"
  ]
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const t = key => translations[currentLanguage][key] || translations.en[key] || key;
let typingTimer;

function applyLanguage(language = currentLanguage) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = t("pageTitle");
  document.body.classList.toggle("rtl", language === "ar");
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll(".social").forEach(link => {
    link.dataset.action = t("open");
  });
  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.textContent = language === "ar" ? "EN" : "AR";
    toggle.setAttribute("aria-label", language === "ar" ? "Switch to English" : "Switch to Arabic");
  }
  buildSkills();
  buildProjects();
  buildTimeline();
  setupReveal();
  setupTilt();
  setupMagnetic();
  typeRoles();
}

function startLoader() {
  const loader = document.getElementById("loader");
  const bar = document.getElementById("loaderBar");
  const percent = document.getElementById("loaderPercent");
  let value = 0;
  const timer = setInterval(() => {
    value += Math.ceil(Math.random() * 9);
    if (value >= 100) {
      value = 100;
      clearInterval(timer);
      setTimeout(() => loader.classList.add("hidden"), 360);
    }
    bar.style.width = `${value}%`;
    percent.textContent = `${value}%`;
  }, reducedMotion ? 10 : 65);
}

function typeRoles() {
  const target = document.getElementById("typedRole");
  if (!target) return;
  clearTimeout(typingTimer);
  let roleIndex = 0;
  let charIndex = 0;
  let mode = "typing";
  target.textContent = "";

  const schedule = delay => {
    typingTimer = setTimeout(tick, reducedMotion ? 500 : delay);
  };
  const tick = () => {
    const role = roles[currentLanguage][roleIndex];

    if (mode === "typing") {
      charIndex += 1;
      target.textContent = role.slice(0, charIndex);
      if (charIndex === role.length) {
        mode = "pause";
        schedule(520);
        return;
      }
      schedule(48);
      return;
    }

    if (mode === "pause") {
      mode = "deleting";
      schedule(34);
      return;
    }

    charIndex -= 1;
    target.textContent = role.slice(0, charIndex);
    if (charIndex === 0) {
      roleIndex = (roleIndex + 1) % roles.length;
      mode = "typing";
      schedule(150);
      return;
    }
    schedule(28);
  };
  tick();
}

function buildSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = skills.map(skill => `
    <article class="skill-card glass tilt reveal">
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-head"><strong>${skill[currentLanguage]}</strong><span>${skill.percent}%</span></div>
      <div class="progress"><i data-width="${skill.percent}%"></i></div>
    </article>
  `).join("");

  const orbit = document.getElementById("orbit");
  orbit.querySelectorAll(".orbit-item").forEach(item => item.remove());
  orbit.querySelector(".orbit-center").textContent = currentLanguage === "ar" ? "بيانات" : "DATA";
  skills.forEach((skill, index) => {
    const node = document.createElement("span");
    node.className = "orbit-item";
    node.textContent = skill[currentLanguage];
    node.style.setProperty("--angle", `${index * 45}deg`);
    node.style.animationDelay = `${index * -3.5}s`;
    orbit.appendChild(node);
  });
}

function buildProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card tilt reveal" id="${index === 0 ? "featured" : `project-${index}`}">
      <figure class="preview">
        <img src="${project.image}" alt="${project.title[currentLanguage]} dashboard screenshot" loading="${index === 0 ? "eager" : "lazy"}" decoding="async">
      </figure>
      <div class="project-body">
        <h3>${project.title[currentLanguage]}</h3>
        <p>${project.description[currentLanguage]}</p>
        <div class="metric-list">${project.metrics[currentLanguage].map(metric => `<span>${metric}</span>`).join("")}</div>
        <div class="tech-list">${project.tech.map(tech => `<span>${tech}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="btn primary magnetic" href="${project.link}" target="_blank" rel="noopener">${t("liveDemo")}</a>
        </div>
      </div>
    </article>
  `).join("");
}

function buildTimeline() {
  const list = document.getElementById("timelineList");
  if (!list) return;
  list.innerHTML = timeline[currentLanguage].map((item, index) => `
    <article class="timeline-item reveal"><strong>${String(index + 1).padStart(2, "0")}</strong>${item}</article>
  `).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".progress i").forEach(bar => bar.style.width = bar.dataset.width);
      if (entry.target.classList.contains("counter")) animateCounter(entry.target);
      entry.target.querySelectorAll(".counter").forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal, .counter").forEach(el => observer.observe(el));
}

function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = "true";
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const duration = reducedMotion ? 1 : 1300;
  const start = performance.now();
  const frame = now => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = `${Math.floor(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

function setupNavigation() {
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const links = [...document.querySelectorAll(".nav-links a")];
  const menu = document.getElementById("navLinks");
  const toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.forEach(link => link.addEventListener("click", () => menu.classList.remove("open")));

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("scrolled", y > 20);
    progress.style.width = `${(y / max) * 100}%`;
    const current = [...document.querySelectorAll("main section[id]")].findLast(section => y >= section.offsetTop - 140);
    links.forEach(link => link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`));
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupCursor() {
  if (matchMedia("(pointer: coarse)").matches) return;
  const outer = document.querySelector(".cursor-outer");
  const dot = document.querySelector(".cursor-dot");
  let x = innerWidth / 2, y = innerHeight / 2, ox = x, oy = y;
  window.addEventListener("mousemove", event => {
    x = event.clientX;
    y = event.clientY;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  }, { passive: true });
  const loop = () => {
    ox += (x - ox) * 0.18;
    oy += (y - oy) * 0.18;
    outer.style.left = `${ox}px`;
    outer.style.top = `${oy}px`;
    requestAnimationFrame(loop);
  };
  document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("mouseenter", () => outer.classList.add("active"));
    item.addEventListener("mouseleave", () => outer.classList.remove("active"));
  });
  loop();
}

function setupTilt() {
  document.querySelectorAll(".tilt").forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "true";
    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -7;
      const ry = ((x / rect.width) - 0.5) * 7;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });
}

function setupMagnetic() {
  document.querySelectorAll(".magnetic").forEach(item => {
    if (item.dataset.magneticBound) return;
    item.dataset.magneticBound = "true";
    item.addEventListener("mousemove", event => {
      const rect = item.getBoundingClientRect();
      item.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.08}px, ${(event.clientY - rect.top - rect.height / 2) * 0.08}px)`;
    });
    item.addEventListener("mouseleave", () => item.style.transform = "");
  });
}

function setupHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const resize = () => {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    particles = Array.from({ length: Math.min(80, Math.floor(innerWidth / 18)) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.45 * devicePixelRatio
    }));
  };
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(34,211,238,.66)";
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 150 * devicePixelRatio) {
          ctx.strokeStyle = `rgba(59,130,246,${0.16 - d / (150 * devicePixelRatio) * 0.16})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    });
    if (!reducedMotion) requestAnimationFrame(render);
  };
  resize();
  render();
  window.addEventListener("resize", resize, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  startLoader();
  applyLanguage("ar");
  setupNavigation();
  setupCursor();
  setupHeroCanvas();
  document.getElementById("languageToggle").addEventListener("click", () => {
    applyLanguage(currentLanguage === "ar" ? "en" : "ar");
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
