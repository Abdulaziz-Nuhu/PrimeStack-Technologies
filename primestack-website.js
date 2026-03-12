/* ================= TYPING EFFECT ================= */

document.addEventListener("DOMContentLoaded", function () {

    const text = "Professional IT & Web Solutions for Growing Brands";
    const typingElement = document.getElementById("typing-text");

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();

});


/* ================= BACK TO TOP BUTTON ================= */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ================= CONTACT FORM SUBMISSION ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
    };

    try {
        const response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        alert(result.message);

        contactForm.reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
    }
});