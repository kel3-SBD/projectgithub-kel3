const projects = [
  {
    title: "Car Price Prediction Model",
    type: "Machine Learning",
    description: "Developed a Python-based machine learning model to predict vehicle prices using comprehensive datasets and core algorithm fundamentals.",
    outcome: "Improved data processing and pattern-recognition skills without relying heavily on external libraries."
  },
  {
    title: "Application UI/UX Prototype",
    type: "Design & Prototyping",
    description: "Designed high-fidelity interfaces and prototypes that prioritize intuitive navigation, seamless transitions, and clear visual hierarchy.",
    outcome: "Built using Figma and Canva to communicate strong user-centered design thinking."
  }
];

const experience = [
  ["Head of Documentation", "Ikatan Pelajar Muhammadiyah (IPM)", "2024 – 2025", "Led the documentation team in designing visual concepts and managing multimedia assets for organizational publications and social media."],
  ["Head of PDD (Publication, Decoration, Documentation)", "Taruna Melati", "2023", "Directed the design strategy and social media content, improving event awareness and coordinating visual storytelling across divisions."],
  ["Member of PDD", "Limau Cup", "2023", "Designed promotional banners and murals while executing photo and video documentation from pre-event to post-event wrap-up."],
  ["Human Resources – Recruitment Team", "Ikatan Pelajar Muhammadiyah (IPM)", "2023", "Conducted interviews and evaluated candidates to recruit and onboard new members effectively."]
];

const skills = {
  "Programming & Tech": ["Python", "Java", "Data Science", "Machine Learning", "HTML", "CSS"],
  "UI/UX & Design": ["Figma", "Canva", "High-Fidelity Prototyping", "User Flow", "Visual Hierarchy"],
  "Media & Editing": ["Adobe Premiere Pro", "CapCut", "Photography"],
  "Soft Skills": ["Leadership", "Teamwork", "Event Planning", "Problem Solving", "Communication"]
};

const projectMarkup = projects.map((project) => `
  <article class="project-card">
    <div class="project-tag">${project.type}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <strong>Key takeaway</strong>
    <p>${project.outcome}</p>
  </article>
`).join("");

const skillMarkup = Object.entries(skills).map(([title, items]) => `
  <article class="card">
    <h3>${title}</h3>
    <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  </article>
`).join("");

const experienceMarkup = experience.map(([role, organization, period, description]) => `
  <article class="timeline-item">
    <div class="timeline-dot" aria-hidden="true"></div>
    <div class="timeline-content">
      <div class="timeline-head"><h3>${role}</h3><span>${period}</span></div>
      <p class="organization">${organization}</p>
      <p>${description}</p>
    </div>
  </article>
`).join("");

document.querySelector("#skills-grid").innerHTML = skillMarkup;
document.querySelector("#project-grid").innerHTML = projectMarkup;
document.querySelector("#timeline").innerHTML = experienceMarkup;
