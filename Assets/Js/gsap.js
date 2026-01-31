let tl = gsap.timeline();

tl.from("header .menu .header-menu  ,header span , header .btn-talk", {
    y: -100,
    opacity: 0,
    duration: 0.45,
    stagger: 0.2
})
tl.from("header .btn-talk a", {
    y: 40,
    opacity: 0,
    duration: 0.45
})

tl.from(".hero-section h2", {
    y: -100,
    opacity: 0,
    duration: 0.45,
    stagger: 0.2
}, "-=1")

function breakH1Text() {
    let h1 = document.querySelector(".hero-section .hero-designer");
    let h1Text = h1.textContent;
    let splitText = h1Text.split("");
    let halfText = Math.floor(splitText.length / 2)
    let clutter = "";

    splitText.forEach((e, idx) => {
        if (idx < halfText) {
            clutter += `<span class="left">${e}</span>`
        } else {
            clutter += `<span class="right">${e}</span>`
        }
    })

    h1.innerHTML = clutter;
}
breakH1Text();
function breakH3Text() {
    let h3 = document.querySelector(".hero-section h3");
    let h3Text = h3.textContent;
    let splitText = h3Text.split(" ");
    let clutter = "";

    splitText.forEach((e) => {
        clutter += `<span>${e}</span> `
    })

    h3.innerHTML = clutter;

}
breakH3Text()
function breakPtext() {
    let p = document.querySelector(".hero-section p");
    let pText = p.textContent;
    let splitText = pText.split(" ");
    let clutter = "";

    splitText.forEach((e) => {
        clutter += `<span>${e}</span> `
    })

    p.innerHTML = clutter;
}
breakPtext();
gsap.from(".hero-section h3 span,.hero-section p span", {
    y: 50,
    duration: 0.45,
    stagger: 0.3,
    opacity: 0
})
gsap.from(".hero-section .hero-designer .left", {
    y: 90,
    opacity: 0,
    duration: 0.45,
    delay: 0.3,
    stagger: 0.3
})
gsap.from(".hero-section .hero-designer .right", {
    y: 90,
    opacity: 0,
    duration: 0.45,
    delay: 0.3,
    stagger: -0.3
})


tl.from(".hero-section .info .left", {
    x: -50,
    duration: 0.35,
    opacity: 0
}, "-=1")
tl.from(".hero-section .info .middle", {
    y: -50,
    duration: 0.4,
    opacity: 0
}, "-=1")
tl.from(".hero-section .info .right", {
    x: 50,
    duration: 0.4,
    opacity: 0
}, "-=1")

tl.from(".hero-section .arrow", {
    y: -40,
    opacity: 0,
    duration: 0.35
}, "-=1")
tl.from(".hero-section .arrow i", {
    opacity: 0,
    rotate: 360,
    duration: 0.4
}, "-=1")



