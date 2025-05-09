const cvData = {
  profile: {
    name: "Touabi Yanis",
    socialLinks: [
      {
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/yanis-touabi-529274197/",
        name: "/yanis-touabi-529274197",
      },
      {
        icon: "fab fa-github",
        url: "https://github.com/the-king-of-pirate",
        name: "/yanistouabi",
      },
      {
        icon: "fab fa-facebook",
        url: "https://www.facebook.com/yanis.touabi.2025/",
        name: "/yanistouabi00",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:yanis.touabi@gmail.com",
        name: "yanis.touabi@gmail.com",
      },
      {
        icon: "fas fa-phone",
        url: "tel:+213658294692",
        name: "+213658294692",
      },
    ],
  },
  about: {
    description:
      "Web developer with 2+ years of experience developing different backend and full-stack solutions in short periods of time. Extensive experience in developing projects from architecture to launch. I enjoy challenges and adapt quickly to different environments, always ready to explore new technologies. With strong motivation and a curious mindset, I strive to bring fresh ideas and deliver solutions that make a difference. ",
    skills: [
      // "Dart",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "jQuery",
      "React.js",
      "Next.js",
      "PHP",
      // "Flutter",
      "NestJS",
      "Docker",
      "Redis",
      "JWT",
      "SQL/NoSQL",
      "Nginx",
      "Traefik",
      "Tailwind CSS",
      "Git",
      "WebSocket",
      "Bash/shell",
      "Powershell",
      "CI/CD",
      "Software Architecture & Design",
    ],
  },
  experience: [
    {
      company: "Sarl Finnetude",
      position: "web developper",
      duration: "Sept 2023 - March 2025",
      description:
        "I developed an educational trading platform featuring financial markets such as spot, mmk, and forward. The platform is designed to handle thousands of transactions seamlessly, offering a robust and scalable solution for users. Additionally, during my time at the company, I contributed to the creation of several websites and worked extensively with Node.js and NestJS, building high-performance APIs and scalable backend solutions.",
    },
    {
      company: "Fentech",
      position: "Software developper",
      duration: "Sept 2023 - March 2024",
      description:
        "I developed robust APIs using Python and FastAPI, managed data with PostgreSQL, and helped design a distributed microservices architecture to enhance scalability and resilience.",
    },
    {
      company: "Freelance",
      position: "Tech Lead",
      duration: "Duration --> 3 Months (2025)",
      description:
        "I worked on the backend of a jewelry e-commerce store using NestJS and PostgreSQL, handling product listings, orders, and payments. I was also responsible for deploying the platform on a VPS using Docker, ensuring a smooth and reliable shopping experience.",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "Duration --> 3 Months (2023)",
      description:
        "I created a search platform for doctors and pharmacists, handling both the frontend and backend using HTML, CSS, JavaScript, jQuery, and PHP.",
    },
  ],
  education: {
    description:
      "Self-taught developer with online platforms such as Udemy and Udacity.",
    keyReadings: ["Clean Code", "Design Patterns"],
  },
  skills: {
    technical: [
      "Full Stack Web Development (Mainly Backend)",
      "mobile Development (Mainly Android)",
      "desktop Development (Mainly Windows/Linux)",
      "SQL/NoSQL Databases",
      "Data Analysis",
      "Software Architecture & Design",
    ],
  },
  languages: [
    {
      name: "French",
      proficiency: "Proficient",
    },
    {
      name: "Arabic",
      proficiency: "Proficient",
    },
    {
      name: "English",
      proficiency: "Proficient",
    },
  ],
};

function loadCVData() {
  return cvData;
}

function populateProfile(data) {
  const profileHeader = document.querySelector("h1");
  profileHeader.textContent = data.profile.name;

  const socialLinks = document.querySelector(".social-links");
  socialLinks.innerHTML = data.profile.socialLinks
    .map(
      (link) => `
    <a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>
  `
    )
    .join("");
}

function populateAbout(data) {
  const aboutSection = document.querySelector(".container > .section-card");
  aboutSection.querySelector("p").textContent = data.about.description;

  const skillsContainer = aboutSection.querySelector(".skills");
  skillsContainer.innerHTML = data.about.skills
    .map(
      (skill) => `
    <span class="badge skill-badge">${skill}</span>
  `
    )
    .join("");
}

function populateExperience(data) {
  const experienceSection = document.querySelectorAll(".section-card")[1];
  experienceSection.innerHTML = `
    <h2><i class="fas fa-briefcase me-2"></i>Experience</h2>
    ${data.experience
      .map(
        (exp) => `
      <div class="timeline-item">
        <h5>${exp.position} @ ${exp.company}</h5>
        <small>${exp.duration}</small>
        <p class="mt-2">${exp.description}</p>
      </div>
    `
      )
      .join("")}
  `;
}

function populateEducation(data) {
  const educationSection = document.querySelectorAll(".section-card")[2];
  educationSection.innerHTML = `
    <h2><i class="fas fa-graduation-cap me-2"></i>Education</h2>
    <p>${data.education.description}</p>
    <p>
      <i class="fas fa-book me-2"></i>Key Readings: ${data.education.keyReadings.join(
        ", "
      )}
    </p>
  `;
}

function populateSkills(data) {
  const skillsSection = document.querySelector("#skills-section");
  skillsSection.innerHTML = `
    <h2><i class="fas fa-tools me-2"></i>Technical Expertise</h2>
    <ul class="skills-list">
      ${data.skills.technical
        .map(
          (skill) => `
        <li>${skill}</li>
      `
        )
        .join("")}
    </ul>
  `;
}

function init() {
  // Language bars animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".language-bar").forEach((bar) => {
    observer.observe(bar);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const data = loadCVData();
    populateProfile(data);
    populateAbout(data);
    populateExperience(data);
    populateEducation(data);
    populateSkills(data);

    document.querySelector(".download-cv-btn").addEventListener("click", () => {
      const data = loadCVData();
      generateCV(data);
    });
  });
}
function generateCV(cvData) {
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cvData.profile.name} - Backend Developer</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
      /* Set the printed page to A4 size with no default margin */
      @page {
          size: A4;
          margin: 0;
      }

      body {
          margin: 0;
          /* Remove extra body padding and use a dedicated content container */
          font-family: 'Calibri', sans-serif;
          color: #333;
          line-height: 1.6;
      }

      /* Fixed header to appear on every printed page */
      header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 1cm;
          background-color: #f8f9fa;
          border-bottom: 1px solid #3498db;
          padding: 0.5rem;
          text-align: center;
          z-index: 1000;
      }

      /* Fixed footer to appear on every printed page */
      footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1cm;
          background-color: #f8f9fa;
          border-top: 1px solid #3498db;
          padding: 0.5rem;
          text-align: center;
          z-index: 1000;
          font-size: 0.9rem;
      }

      /* Wrapper for the page content with extra spacing for header and footer */
      .page-content {
          padding: 1cm;
          /* Add extra top and bottom spacing to avoid fixed header and footer */
          min-height: 20cm; /* A4 height minus header/footer & extra padding */

      }

      .container {
          display: flex;
          /* This container now fills the remaining space in the page-content */
      }

      .sidebar {
          width: 30%;
          background-color: #f8f9fa;
          padding: 2rem;
      }

      .main-content {
          width: 70%;
          padding: 2rem;
      }

      h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
      }

      h2 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.3rem;
          font-size: 1.4rem;
          margin-top: 1.5rem;
      }

      .social-links {
          margin: 1rem 0;
      }

      .social-links a {
          color: #3498db;
          margin-right: 1rem;
          font-size: 1.2rem;
      }

      .skills {
          list-style: none;
          padding-left: 0;
          columns: 2;
          list-style-type: disc;
      }
      .tech-skills {
          list-style: none;
        list-style-type: disc;
          padding-left: 0;
          columns: 1;
            }
      .skills li {
          margin-bottom: 0.5rem;
      }

      .experience-item {
          margin-bottom: 1.5rem;
      }

      .company {
          font-weight: bold;
          color: #2c3e50;
      }

      .position {
          color: #3498db;
          margin: 0.3rem 0;
      }

      .duration {
          color: #7f8c8d;
          font-size: 0.9rem;
      }

      .description {
          margin: 0.5rem 0;
          font-size: 0.95rem;
      }

      .languages {
          columns: 1;
          list-style: none;
          padding-left: 0;
      }

      .language {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
      }
  </style>
</head>
<body>
  <!-- Header that will appear on every printed page -->
  <header>
      <h1 style="margin: 0; font-size: 1.8rem;">${
        cvData.profile.name
      } - Tech Lead</h1>
  </header>

  <!-- Footer that will appear on every printed page -->
  <footer>
      <span>Contact: ${cvData.profile.email || "rafafaycal@gmail.com"}</span>
      <span style="margin-left: 1rem;">&copy; ${new Date().getFullYear()} ${
    cvData.profile.name
  }</span>
  </footer>

  <!-- Main content wrapper to provide spacing away from header and footer -->
  <div class="page-content">
    <div class="container">
        <div class="sidebar">
            <h1>${cvData.profile.name}</h1>
            
            <div class="social-links">
                ${cvData.profile.socialLinks
                  .map(
                    (link) =>
                      `
                       <a href="${link.url}"style="text-decoration: none;">
                       <i class="${link.icon}"></i> 
                       <span style="style:unset; color: black;font-size: 14px;font-family: bold;">${link.name}</span>
                       </a><br>
                       
                      `
                  )
                  .join(" ")}
            </div>

            <h2>Skills</h2>
            <ul class="skills">
                ${cvData.about.skills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
            </ul>

            <h2>Languages</h2>
            <ul class="languages">
                ${cvData.languages
                  .map(
                    (lang) => `
                    <li class="language">
                        <span>${lang.name}</span>
                        <span>${lang.proficiency}</span>
                    </li>`
                  )
                  .join("")}
            </ul>
        </div>

        <div class="main-content">
            <h2>Professional Experience</h2>
            <div class="experience">
            ${cvData.experience
              .map(
                (exp, index) => `
              ${(index + 1) % 5 === 0 ? '<div style="height: 7cm;"></div>' : ""}
                <div class="experience-item" >
                    <div class="company">${exp.company}</div>
                    <div class="position">${exp.position}</div>
                    <div class="duration">${exp.duration}</div>
                    <div class="description">${exp.description}</div>
                </div>
              `
              )
              .join("")}
            
            </div>

            <h2>Education</h2>
            <div class="education">
                <div class="description">
                    ${cvData.education.description}
                </div>
                <div style="margin-top: 1rem;">
                    <strong>Key Readings:</strong> ${cvData.education.keyReadings.join(
                      ", "
                    )}
                </div>
            </div>

            <h2>Technical Expertise</h2>
            <ul class="tech-skills">
                ${cvData.skills.technical
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
            </ul>
        </div>
    </div>
  </div>
</body>
</html>`;

  // Open in new window and print
  const printWindow = window.open("", "_blank");
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.addEventListener("load", function () {
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1000);
  });
}

init();
