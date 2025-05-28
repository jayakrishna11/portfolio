document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust 60 based on header height
                behavior: 'smooth'
            });

            // Optional: Update active class on nav (more complex)
            document.querySelectorAll('#navbar a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Optional: Add active class on scroll (more complex, needs more code)
