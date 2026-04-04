// ==============================
// Navbar Shrink on Scroll
// ==============================
window.addEventListener('scroll', function(){
    const navbar = document.getElementById('mainNav');
    if(window.scrollY > 50) navbar.classList.add('navbar-shrink');
    else navbar.classList.remove('navbar-shrink');
});

// ==============================
// Smooth Scrolling
// ==============================
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        if(this.hash !== ""){
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({behavior:"smooth"});
        }
    });
});

// ==============================
// EmailJS Contact Form
// ==============================
emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS User ID
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('successMsg').style.display="none";
    document.getElementById('errorMsg').style.display="none";
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',contactForm,'YOUR_EMAILJS_USER_ID')
    .then(() => {
        document.getElementById('successMsg').style.display="block";
        contactForm.reset();
    })
    .catch(() => {
        document.getElementById('errorMsg').style.display="block";
    });
});