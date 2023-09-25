function scrollToSection(element) {
    const targetId = element.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const startPosition = window.pageYOffset;
        const targetPosition = targetSection.offsetTop;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        const startTime = performance.now();

        function animation(currentTime) {
            const elapsedTime = currentTime - startTime;

            const progress = Math.min(elapsedTime / duration, 1);
            const newPosition = startPosition + distance * progress;

            window.scrollTo(0, newPosition -75);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }
}

const scrollLinks = document.querySelectorAll('a[data-scroll="true"]');
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToSection(link);
    });
});