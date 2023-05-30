function toggleMenu() {
    let menu = document.getElementById(`header`)
    menu.classList.toggle("nav-open")
}

const sectionHeroEl = document.querySelector(".section-hero")

const observer = new IntersectionObserver(function (entries) {
    const ent = entries[0]
    if (!ent.isIntersecting) {
        document.body.classList.add("sticky")
    }

    if (ent.isIntersecting) {
        document.body.classList.remove("sticky")
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: "-100px"
})
observer.observe(sectionHeroEl)