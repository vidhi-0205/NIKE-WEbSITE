import gsap from "gsap";


export const PreLoaderAnim=(setLoading)=>{
    const tl=gsap.timeline({
    onComplete:()=>{
        setLoading(false);
    }
});
    tl.to(".loader",{
        opacity:0,
        duration:3,
        ease:"power1.out"
    })
    tl.to(".logo",{
    scale:1.4,
    duration:0.6,
    ease:"power2.out"
})

 .to(".logo",{
    scale:4,
    opacity:0,
    duration:1,
    ease:"power3.out"
 })

 .to(".preloader",{
    opacity:0,
    duration:0.3
 })

}

