let hamburgerEl=document.getElementById("hamburger");
let navLinks=document.getElementById("nav-links");






hamburgerEl.addEventListener("click",()=>{
    hamburgerEl.classList.toggle("active");
    navLinks.classList.toggle("active")
})




const servicesSection = document.querySelector('.services');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                servicesSection.classList.add('scrolled');
            }
        });
    },
    {
        threshold: 0.3, // Trigger when 30% of the section is visible
    }
);

observer.observe(servicesSection);


function sendMessage(event) {
    event.preventDefault(); // Prevents the page from reloading

    // Get form values (optional, for validation or backend processing)
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("✅ Message Sent Successfully!");
    } else {
        alert("⚠️ Please fill out all fields before sending!");
    }

    // Optional: Reset form after submission
    document.querySelector(".contact-form").reset();
}
