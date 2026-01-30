let tl = gsap.timeline();

tl.from("header .menu .header-menu  ,header span , header .btn-talk",{
    y : -100,
    opacity : 0,
    duration : 0.45,
    stagger : 0.2
})
tl.from("header .btn-talk a",{
    y : 40,
    opacity : 0,
    duration : 0.45
})