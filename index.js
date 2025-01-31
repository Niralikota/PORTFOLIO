// --- Menu Toggle ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

// Menu toggle logic
hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active');
  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');
});

// Close small menu when a link is clicked
headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// --- Logo Click Redirect ---
document.querySelector('.header__logo-container').addEventListener('click', () => location.href = '/');

// --- Load Projects and Social Media Links ---
document.addEventListener('DOMContentLoaded', () => {
  const userInfo = {
    name: 'Nirali Kota',
    description: 'A Backend Developer building efficient solutions using PHP, Node.js, and Laravel, focusing on scalable and maintainable applications.',
    bioImage: "./assets/jpeg/circular_image.png",
    siteImage: "./assets/jpeg/circular_image.png",
    image: "./assets/jpeg/circular_image.png",
    favicon: "./assets/jpeg/circular_image.png",
    websiteUrl: 'https://niralikota.com',
  };

  const socialLinks= [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nirali-kota-7538a8267",
      icon: "./assets/png/linkedin-ico.png",
      darkIcon: "./assets/svg/linkedin-dark.svg",
      alt: userInfo.name + " LinkedIn Profile"
    },
    {
      name: "GitHub",
      url: "https://https://github.com/Niralikota/",
      icon: "./assets/png/github-ico.png",
      darkIcon: "./assets/svg/github-dark.svg",
      alt: userInfo.name + " GitHub Profile"
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/rammcodes",
    //   icon: "./assets/png/twitter-ico.png",
    //   darkIcon: "./assets/svg/twitter-dark.svg",
    //   alt: userInfo.name + " Twitter Profile"
    // },
    // {
    //   name: "DEV.to",
    //   url: "https://dev.to/rammcodes",
    //   icon: "./assets/png/blog-ico.png",
    //   darkIcon: "./assets/svg/book-dark.svg",
    //   alt: userInfo.name + " DEV.to Blog Profile"
    // },
    {
      name: "YouTube",
      url: "/",
      icon: "./assets/png/yt-ico.png",
      darkIcon: "./assets/svg/yt-dark.svg",
      alt: userInfo.name + " YouTube Channel"
    }
  ]

  const projects = [
    {
      title: "Basic Banking System",
      description: "The project is about getting all bank customer details and adding/deleting users, as well as sending money to other customers.",
      image: "./assets/jpeg/bankingsystem.png",
      ProjectLink: "https://github.com/Niralikota/Basis-Banking-system"
    },
    {
      title: "Payment Gateway Integration",
      description: "The project is about donating payments to needy people using a third-party payment method with Razorpay.",
      image: "./assets/jpeg/payment.png",
      ProjectLink: "https://joyful-churros-d93efa.netlify.app/"
    },
    {
      title: "Responsive Fitness Website",
      description: "• This is a responsive fitness website where users can join fitness gym classes.",
      image: "./assets/jpeg/responsive.png",
      ProjectLink: "https://thriving-horse-e06876.netlify.app/"
    },
    {
      title: "User CRUD Project",
      description: "The project is a Node CRUD app that allows adding, updating, and deleting user data.",
      image: "./assets/jpeg/crudapp.png",
      ProjectLink: "https://github.com/Niralikota/crudapp"
    }
  ];


  const metaData = {
    title: userInfo.name,
    description: userInfo.description,
    author: userInfo.name,
    image: userInfo.siteImage,
    url: "https://niralikota.com"
  };

  const aboutMeData = {
    title: "About Me",
    subtitle: "Discover more about me, my expertise, and skills primarily focused on backend development.",
    content: [
      {
        heading: "Get to know me!",
        paragraphs: [
          `I'm a <strong>Backend Developer</strong> as a fresher building scalable backend solutions using PHP, Laravel, and Node.js. Check out some of my work in the <strong>Projects</strong> section.`,
          `I enjoy sharing my knowledge on backend development and contributing to the Dev Community. Connect with me on <a rel='noreferrer' href='https://linkedin.com/in/nirali-kota-7538a8267' target='_blank'>LinkedIn</a> to see my latest posts and updates.`,
          `I'm open to <strong>Job</strong> opportunities where I can apply my skills and grow professionally. If you have a position that matches my experience, feel free to <strong>contact</strong> me.`
        ],
        contactButtonText: "Contact",
        contactButtonLink: "./#contact"
      }
    ],
    skills: [
      "PHP", "Laravel", "Node.js", "Express.js", "MySQL", "MongoDB",
      "RESTful API", "Git",
    ]
  };

  const contactDetails = [
    {
      icon: "assets/svg/phone-icon.svg",
      label: "Mobile",
      value: "+91 9313439512",
      link: "tel:+919313439512"
    },
    {
      icon: "assets/svg/envelope-icon.svg",
      label: "Email",
      value: "niralikota@gmail.com",
      link: "mailto:niralikota@gmail.com"
    },
    {
      icon: "assets/svg/maps-pin-black-icon.svg",
      label: "Address",
      value: "Gujarat, India"
    },
    {
      icon: "assets/svg/whatsapp-icon.svg",
      label: "WhatsApp",
      value: "Chat with me",
      link: "https://wa.me/919313439512"
    }
  ];

  // Footer Data
  const footerData = {
    name: userInfo.name,
    description: userInfo.description,
    linkName: userInfo.name,
    linkUrl: userInfo.websiteUrl
  };

  function setFavicon(faviconUrl) {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }

  // Set the favicon from userInfo object
  setFavicon(userInfo.favicon);

  // Dynamically set the content for Footer
  document.getElementById('footer-name').textContent = footerData.name;
  document.getElementById('footer-description').textContent = footerData.description;
  document.getElementById('footer-link').textContent = footerData.linkName; // Set link name
  document.getElementById('footer-link').href = footerData.linkUrl; // Set the link URL

  // Render Contact Details
  const contactContainer = document.getElementById("contactDetails");

  contactDetails.forEach((detail, index) => {
    const contactItem = document.createElement("div");
    contactItem.className = "contact-item";

    const icon = document.createElement("img");
    icon.src = detail.icon;
    icon.alt = `${detail.label} Icon`;
    icon.className = "contact-icon";

    const text = document.createElement("p");

    // Add the label with strong tag
    const label = document.createElement("strong");
    label.textContent = `${detail.label}: `;

    text.appendChild(label); // Add the label to the paragraph

    if (detail.link) {
      const link = document.createElement("a");
      link.href = detail.link;
      link.target = "_blank";
      link.textContent = detail.value;
      text.appendChild(link); // Add the link to the paragraph
    } else {
      text.appendChild(document.createTextNode(detail.value)); // Add plain text
    }

    contactItem.appendChild(icon); // Add the icon to the contact item
    contactItem.appendChild(text); // Add the text to the contact item

    contactContainer.appendChild(contactItem); // Add the contact item to the container

    // Add a pipe (|) separator after each item except the last one
    if (index < contactDetails.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " | ";
      contactContainer.appendChild(separator); // Add separator after the contact item
    }
  });

  // Generate HTML for "About Me" section
  const aboutMeHTML = `
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-med">
      <span class="heading-sec__main">${aboutMeData.title}</span>
      <span class="heading-sec__sub">${aboutMeData.subtitle}</span>
    </h2>
    <div class="about__content">
      <div class="about__content-main">
        <h3 class="about__content-title">${aboutMeData.content[0].heading}</h3>
        <div class="about__content-details">
          ${aboutMeData.content[0].paragraphs
      .map(para => `<p class="about__content-details-para">${para}</p>`)
      .join("")}
        </div>
        <a href="${aboutMeData.content[0].contactButtonLink}" class="btn btn--med btn--theme dynamicBgClr">
          ${aboutMeData.content[0].contactButtonText}
        </a>
      </div>
      <div class="about__content-skills">
        <h3 class="about__content-title">My Skills</h3>
        <div class="skills">
          ${aboutMeData.skills
      .map(skill => `<div class="skills__skill">${skill}</div>`)
      .join("")}
        </div>
      </div>
    </div>
  </div>
`;

  // Push the "About Me" section into the DOM
  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    aboutSection.innerHTML = aboutMeHTML;
  }

  // Set dynamic title
  document.title = userInfo.name;

  // Update the header content dynamically
  document.querySelector('.header__logo-sub').textContent = userInfo.name;
  document.querySelector('.header__logo-img').src = userInfo.image;
  document.querySelector('.header__logo-img').alt = `${userInfo.name} Logo Image`;

  // Set the name in the heading
  document.querySelector('.home-hero .heading-primary').textContent = `Hey, I'm ${userInfo.name}`;

  // Set the description in the paragraph
  document.querySelector('.home-hero .text-primary').textContent = userInfo.description;

  // --- Render Projects ---
  const projectsHTML = projects.map(({ title, description, image, ProjectLink }) => `
  <div class="projects__row">
    <div class="projects__row-img-cont">
      <img src="${image}" alt="${title} Screenshot" class="projects__row-img" loading="lazy" />
    </div>
    <div class="projects__row-content">
      <h3 class="projects__row-content-title">${title}</h3>
      <p class="projects__row-content-desc">${description}</p>
      </div>
      </div>
      `).join('');
      document.querySelector('.projects__content').innerHTML = projectsHTML;
      
      // <a class="btn btn--med btn--theme dynamicBgClr" href="${ProjectLink}" target="_blank">Case Study</a>
  // Generate and append HTML for social media links (Footer)
  const socialHTML = socialLinks.map(({ url, icon, alt }) =>
    `<a target="_blank" rel="noreferrer" href="${url}">
    <img class="main-footer__icon" src="${icon}" alt="${alt}" />
  </a>`
  ).join('');
  document.querySelector('.main-footer__social-cont').innerHTML = socialHTML;

  // Generate and append HTML for social media links (Hero section)
  const socialMediaHTML = socialLinks.map(({ url, darkIcon, alt }) =>
    `<div class="home-hero__social">
    <a href="${url}" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
      <img src="${darkIcon}" alt="${alt}" class="home-hero__social-icon" />
    </a>
  </div>`
  ).join('');

  document.querySelector('.home-hero__socials').innerHTML = socialMediaHTML;

  // --- Update Meta Tags ---
  const createMetaTag = (name, content, property = false) => {
    let metaTag = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(property ? 'property' : 'name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  Object.entries(metaData).forEach(([key, value]) => {
    if (key === 'description' || key === 'author') {
      createMetaTag(key, value);
    } else if (key === 'title' || key === 'image' || key === 'url') {
      createMetaTag(`og:${key}`, value, true);
    }
  });

});
