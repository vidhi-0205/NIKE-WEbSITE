import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const UseLandingAnim = (scopeRef) => {

    useLayoutEffect(()=>{
         let ctx;
         ctx=gsap.context(()=>{
            const tl=gsap.timeline({defaults:{ease:"power4.out",duration:1.2}});

            tl.from(".bg-image",{
                xPercent:-100,
                scale:1.2,
                duration:1.5
            })
            .from(".sub-text",{
                x:-50,
                opacity:0
            },"-=0.8")
            .from(".hero-title div , .hero-title span",{
                y:80,
                opacity:0,
                stagger:0.1
            },"-=1")
            .from(".cta-buttons",{
                y:40,
                opacity:0,
                stagger:0.2
            },"-=0.8");

            gsap.to(".hero-content",{
                scrollTrigger:{
                    trigger:".top",
                    start:"top top",
                    end:"bottom center",
                    scrub:true,
                },
                opacity:0,
                y:-50,
                scale:0.7
            });

            const tl2=gsap.timeline({
                scrollTrigger:{
                    trigger:".second-page",
                    start:"top 60%",
                    end:"bottom 20%",
                    toggleActions:"play none none reverse",
                    
                }
            });
            tl2.from(".tech p",{
                x:-100,
                opacity:0,
                duration:0.8,
                ease:"power2.out",
              
            })
            .from(".tech h1 div,.tech h1 span",{
                scale:0.5,
                opacity:0,
                stagger:0.2,
                duration:1,
                ease:"back.out(1.7)",
               
            },"-=0.5")
            .from(".sneaker-img",{
                scale:0,
                opacity:0,
                duration:1.2,
                ease:"elastic.out(1,0.5)",
               
            },"-=1")
            .from(".stat-box",{
                scale:0,
                opacity:0,
                stagger:0.2,
                duration:0.8,
                ease:"back.out(2)",
              
            },"-=0.8");

            const tl3=gsap.timeline({
                scrollTrigger: {
                   trigger: ".third-page",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
    }
            });
            tl3.from(".collection-text", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
})
.from(".product-card", {
    x: 150,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3, 
    ease: "power3.out"
}, "-=0.8");

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-page",
        start: "top 5`0%",
        toggleActions: "play none none reverse",
    }
});
tl4.from(".fourth-bg", {
    xPercent: 100, 
    scale: 1.3,
    duration: 1.5,
    ease: "power4.out"
})
.from(".fourth-sub", {
    x: -50,
    opacity: 0,
    duration: 0.8
}, "-=1")
.from(".fourth-title div", {
    y: 80,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power4.out"
}, "-=0.8")
.from(".fourth-desc", {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.5")
.from(".fourth-btn", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)"
}, "-=0.6");

        },scopeRef);

        return ()=>ctx.revert();

    },[scopeRef]);

};

export default UseLandingAnim
