/* ================================
   CYBER HIVE
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       NAVIGATION
       ================================ */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    /* ================================
       SCROLL REVEAL
       ================================ */

    const revealElements = document.querySelectorAll(
        ".course-card, .expertise-item, .about-grid div, .contact-box, .special-points div"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


    /* ================================
       HIVE BACKGROUND MOVEMENT
       ================================ */

    const hive = document.querySelector(".hive-background");

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        hive.style.transform =
            `translateY(${scroll * 0.04}px)`;

    });


    /* ================================
       TRIAL BUTTON CHECK
       ================================ */

    const trialButton = document.querySelector(".trial-button");

    trialButton.addEventListener("click", () => {

        const formLink = trialButton.getAttribute("href");

        if (
            !formLink ||
            formLink === "PASTE_YOUR_GOOGLE_FORM_LINK_HERE"
        ) {

            alert(
                "The Cyber Hive trial form link hasn't been added yet."
            );

        }

    });

});