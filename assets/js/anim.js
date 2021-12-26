document.addEventListener('DOMContentLoaded', () =>{
    var tl = gsap.timeline();

    tl
    .from(".popup",{
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    })

    .from(".title",{
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
    },"-=0.8")

    .from(".hero",{
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
    },"-=0.8")

    .from(".hero-desc",{
        duration: 1,
        x: -100,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
    },"-=0.8")

    gsap.to(".hero-desc p", {
        duration: 4,
        delay: 0.5,
        text:"O tênis Jordan é fruto de uma velha e forte <br> parceria entre a Nike e o jogador Michael Jordan."
    },"-=0.8")

    tl
    .from(".highlights",{
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".highlights",
        }
    },"-=0.8")

    .from(".shoes div",{
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
        stagger: {each: 0.2}
    },"-=0.8")

    
    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
    

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);


})