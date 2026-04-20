function copySnippet() {
    const text = document.getElementById("command-text").innerText;
    const btn = document.querySelector(".copy-btn");
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "COPIED!";
        btn.style.color = "#00ff41";
        btn.style.borderColor = "#00ff41";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.color = "";
            btn.style.borderColor = "";
        }, 2000);
    });
}

// Subtle Scroll Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .step-card, .phil-item, .registry-col').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(card);
});

console.log("Synax Core: Visual Identity Systems Loaded.");
