<script>
  // Fade-in animation for the "About" section
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
    const aboutImage = document.querySelector(".about-image-wrapper img");
    const aboutContent = document.querySelector(".about-content");

    const observer = new IntersectionObserver(
      (entries) => {
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
</script>
