
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
    const aboutImage = document.querySelector(".about-image-wrapper img");
    const aboutContent = document.querySelector(".about-content");

    const observer = new IntersectionObserver(
      (entries)=> {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutImage.style.opacity = "1";
            aboutImage.style.transform = "translateX(0)";
            aboutContent.style.opacity = "1";
            aboutContent.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutSection);
  });

  // Hover effect for buttons in the "About" section
  const buttons = document.querySelectorAll(".about-buttons button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const processCards = document.querySelectorAll(".process-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.5 }
    );
  
    processCards.forEach((card) => {
      observer.observe(card);
    });
  });
  
  const processCards = document.querySelectorAll(".process-card");
  processCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add click event listeners to each link
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
  
        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Social Media Button Click Tracking
    const socialLinks = document.querySelectorAll(".social-icon");
    socialLinks.forEach((button) => {
      button.addEventListener("click", (event) => {
        const platform = event.currentTarget.querySelector("i").classList[1];
        console.log(`Social media button clicked: ${platform}`);
      });
    });
  
    // Copy-to-Clipboard for Contact Details
    const contactValues = document.querySelectorAll(".contact-value");
    contactValues.forEach((value) => {
      value.addEventListener("click", () => {
        navigator.clipboard.writeText(value.textContent).then(() => {
          alert(`Copied to clipboard: ${value.textContent}`);
        });
      });
    });
  
    // Hover Effects for Contact Cards
    const contactCards = document.querySelectorAll(".contact-card");
    contactCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("hovered");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
      });
    });
  });
  