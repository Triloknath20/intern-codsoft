// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Skill Progress Animation
const skillSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.skill-progress');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.width;
        progressBar.style.width = `${value}%`;
    });
}

// Scroll Animation
function checkScroll() {
    const skillsPosition = skillSection.getBoundingClientRect().top;
    const screenPosition=window.innerHeight / 1.3;
    
    if (skillsPosition < screenPosition) {
        showProgress();
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Download CV
const downloadBtn = document.getElementById('downloadCV');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple PDF with resume data
    const { jsPDF }= window.jspdf;
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(22);
    doc.text("Triloknath Reddy K - Resume", 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.text("Personal Details", 20, 40);
    
    doc.setFontSize(12);
    doc.text("Name: Kudumu Triloknath Reddy", 20, 50);
    doc.text("Email: triloknath7795@gmail.com", 20, 60);
    doc.text("Phone: 9110291415", 20, 70);
    doc.text("Address: Near water tank Veerasandra, 560100 Electronic City", 20, 80);
    doc.text("Date of Birth: September 18, 2004", 20, 90);
    
    doc.setFontSize(16);
    doc.text("Education", 20, 110);
    
    doc.setFontSize(12);
    doc.text("BCA - ISBR College, Electronic City (2022-2025)", 20, 120);
    doc.text("Acquired skills in web development utilizing HTML, CSS, JavaScript", 20, 130);
    
    doc.setFontSize(16);
    doc.text("Skills", 20, 150);
    
    doc.setFontSize(12);
    doc.text("HTML - 80%", 20, 160);
    doc.text("CSS - 70%", 20, 170);
    doc.text("Python - 60%", 20, 180);
    doc.text("MS Office - 85%", 20, 190);
    
    doc.setFontSize(16);
    doc.text("Certificates", 20, 210);
    
    doc.setFontSize(12);
    doc.text("MDCA (Master Diploma Computer Application) - April 2022", 20, 220);
    doc.text("MS Office, PowerPoint, Basics in Accounting Package Tally ERP 9 and Internet", 20, 230);
    
    // Save the PDF
    doc.save("Triloknath_Reddy_K_Resume.pdf");
});

// Add jsPDF library for PDF generation
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
document.body.appendChild(script);