document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('.school');

    const animateSections = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - window.innerHeight;
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });
    };

    const animateFirstTitle = () => {
        let firstTitle = sections[0];
        firstTitle.classList.add('show-animate');
    };

    animateSections();
    window.addEventListener('scroll', animateSections);

    animateFirstTitle();
});