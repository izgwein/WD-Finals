document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.container img');
    const overlay = document.querySelector('.overlay');
    const closeOverlayButton = document.getElementById('close-overlay');
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');
    const overlayContent = document.querySelector('.overlay-content');
    const contentData = {
        content1: {
            title: 'LINGER Studios',
            description: 'This is a High-Fidelity wireframe made with Adobe Photoshop that is a requirement alongside with the main project of making a logo using the golden ratio.',
            images: [
                './assets/img/Home Page.png',
                './assets/img/About Us.png',
                './assets/img/Products.png'
            ]
        },
        content2: {
            title: 'Infographic Resume',
            description: 'A project for making an infographic design of my resume.',
            images: [
                './assets/img/infographicres.jpg'
            ]
        },
        content3: {
            title: 'Photo Manipulation',
            description: 'A project of using masking in Photoshop.',
            images: [
                './assets/img/Lab3_Gevero.jpg'
            ]
        },
        content4: {
            title: 'Magazine Cover',
            description: 'A project for making a simple Magazine Cover.',
            images: [
                './assets/img/LE01_Gevero_Gwyneth.jpg'
            ]
        },
        content5: {
            title: 'High-Fidelity Wireframe: SharePlate',
            description: 'A project of making a high-fidelity wireframe for our app.',
            images: [
                './assets/img/Landing.png',
                './assets/img/Home.png',
                './assets/img/Signup.png',
                './assets/img/Login.png',
                './assets/img/Profile.png',
                './assets/img/Donation.png',
                './assets/img/FindPlate.png',
                './assets/img/Community.png'
            ]
        },
    };
    let currentIndex = 0;

    images.forEach(image => {
        image.addEventListener('click', () => {
            const contentKey = image.dataset.content;
            updateOverlayContent(contentData[contentKey]);
            overlay.style.display = 'flex';
        });
    });

    closeOverlayButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        moveCarousel(-1);
    });

    nextButton.addEventListener('click', () => {
        moveCarousel(1);
    });

    function moveCarousel(direction) {
        const totalSlides = carouselTrack.children.length;
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    function updateOverlayContent(content) {
        const { title, description, images } = content;
        overlayContent.querySelector('h1').textContent = title;
        overlayContent.querySelector('p').textContent = description;
        carouselTrack.innerHTML = images.map(src => `<li class="slide"><img src="${src}" alt=""></li>`).join('');
        currentIndex = 0;
        moveCarousel(0);
    }
});
