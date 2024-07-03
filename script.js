var crsr = document.querySelector(".cursor");
var br = document.querySelector(".blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y +"px";
    br.style.left = dets.x- 150 +"px";
    br.style.top = dets.y- 150 +"px";
})


gsap.to(".nav",{
    backgroundColor :"#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        // markers: true,
        start: "top -10px",
        end: "top -20px",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        start: "top 18%",
        end:"end -100%",
        // markers: true,
        scrub:1
    }
})


gsap.from(".colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:".colon1",
        scroller: "body",
        start: "top 55%",
        end:"top 45%",
        scrub:5 
    }
})


gsap.from(".colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:".colon2",
        scroller: "body",
        start: "top 100%",
        end:"top 75%",
        scrub:5 
    }
})