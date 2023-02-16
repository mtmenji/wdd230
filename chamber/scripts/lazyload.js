const images = document.querySelectorAll('[data-src]');
const options = {threshold: .5};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    },
    options
);

images.forEach(img => {
    io.observe(img);
})