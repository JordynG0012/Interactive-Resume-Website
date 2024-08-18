// Section Fade-In
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.introdiv, .skills, .workexp-section, .contact-section');

    sections.forEach((section, index) => {
        setTimeout(() => {
            if (index % 2 === 0) {
                section.classList.add('fade-in-left');
            } else {
                section.classList.add('fade-in-right');
            }
        }, index * 500); 
    });
});

// Thank User for download
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button input[type="button"]');

    downloadButton.addEventListener('click', function() {
        alert('Thank you for downloading my resume, I appreciate your interest!');
    });
});

// BackToTop Btn
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});