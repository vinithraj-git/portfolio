// ======================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ======================================

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

const hiddenElements = document.querySelectorAll(
    ".skill-card, .experience-card, .project-card, .contact-card, .section-title"
);
hiddenElements.forEach((el) => observer.observe(el));


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// HERO TYPING EFFECT
// ===============================

const subtitle = document.querySelector(".hero-content h2");

const text = "Full Stack Developer & IT Student";

let index = 0;

subtitle.textContent = "";

function typeEffect() {

    if (index < text.length) {

        subtitle.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);
    }
}

window.addEventListener("load", typeEffect);


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "20px";
topButton.style.fontWeight = "bold";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.background = "#428475";
topButton.style.color = "#ffffff";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
topButton.style.transition = "0.3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("mouseenter", () => {
    topButton.style.transform = "translateY(-5px)";
});

topButton.addEventListener("mouseleave", () => {
    topButton.style.transform = "translateY(0)";
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(26, 49, 44, 0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.2)";
    }
    else {

        navbar.style.background =
            "rgba(26, 49, 44, 0.9)";

        navbar.style.boxShadow =
            "none";
    }
});


// ===============================
// PROJECT BUTTON CLICK EFFECT
// ===============================
// ===============================
// LOAD GITHUB REPOSITORIES
// ===============================

const githubUsername = "vinithraj-git";

fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(repos => {

        const container =
            document.getElementById("projects-container");

        // Sort newest first
        repos.sort(
            (a, b) =>
                new Date(b.created_at) -
                new Date(a.created_at)
        );

        repos.forEach(repo => {

            const card =
                document.createElement("div");

            card.classList.add("project-card");

            card.innerHTML = `
                <h3>${repo.name}</h3>

                <p>
                    ${
                        repo.description ||
                        "No description available."
                    }
                </p>

                <a href="${repo.html_url}"
                   target="_blank"
                   class="project-btn">
                    View on GitHub
                </a>
            `;

            container.appendChild(card);

            observer.observe(card);
        });

    })
    .catch(error => {
        console.error(
            "Error loading GitHub repositories:",
            error
        );
    });

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cWelcome to Vinith Raj's Portfolio 🚀",
    "color:#89D7B7; font-size:16px; font-weight:bold;"
);