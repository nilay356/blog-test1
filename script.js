// mobile toggle and active nav highlighting
document.addEventListener("DOMContentLoaded", () => {
// Mobile dropdown open/close
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      const menu = btn.nextElementSibling;
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  });
});

 // AUTO HIDE NAVBAR
  let lastScrollTop = 0;
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;

      if (!header) return;

      if (scrollTop > lastScrollTop && scrollTop > 80) {
          header.classList.add("hide");
      } else {
          header.classList.remove("hide");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

});

  /* -------------------------------
      MOBILE MENU
  --------------------------------*/
  const toggle = document.querySelectorAll(".mobile-toggle");
  toggle.forEach((t) => {
    t.addEventListener("click", () => {
      const nav = t.nextElementSibling || document.querySelector(".nav");
      if (!nav) return;
      nav.classList.toggle("open");
      nav.style.display = nav.style.display === "flex" ? "" : "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "8px";
      nav.style.padding = "12px";
      nav.style.background = solid;"rgba(255, 255, 255, 0.7)";
      nav.style.position = "absolute";
      nav.style.right = "18px";
      nav.style.top = "64px";
      nav.style.borderRadius = "8px";
    });
  });

  /* -------------------------------
      ACTIVE NAV LINK
  --------------------------------*/
  const links = document.querySelectorAll(".nav-link");
  links.forEach((a) => {
    if (
      location.pathname.endsWith(a.getAttribute("href")) ||
      (location.pathname === "/" && a.getAttribute("href").includes("index"))
    ) {
      a.classList.add("active");
    }
  });

  /* -------------------------------
      CONTACT FORM HANDLER
  --------------------------------*/
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        school: form.school.value,
        message: form.message.value,
      };

      const res = await fetch("https://blog-s96a.onrender.com/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      


      // SUCCESS POPUP ANIMATION
      if (data.success) {
        const pop = document.getElementById("successPopup");
        pop.innerHTML = "✔ Message sent successfully!";
        pop.classList.add("show");

        setTimeout(() => pop.classList.remove("show"), 3000);

        form.reset();
      } else {
        alert("Error sending message.");
      }
    });
  }


  document.querySelectorAll(".dropdown").forEach(drop => {
    const btn = drop.querySelector(".dropdown-toggle");

    btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            drop.classList.toggle("open");
        }
    });
});


  
// Pick toggle button from ANY page
const toggleBtn =
  document.getElementById("mobileToggle") ||
  document.getElementById("mobileToggle2");

const nav = document.getElementById("mainNav");

// OPEN / CLOSE MENU
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// DROPDOWN BUTTONS
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("open");
  });
});
