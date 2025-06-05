let crsr = document.getElementById('crsr');

let t1 = gsap.timeline();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    crsr.style.left = `${x}px`;
    crsr.style.top = `${y}px`;
});

t1.from('.nav',{
y:-10,
opacity:0,
duration:1.5,
 ease: Expo.easeInOut,
})
t1.from('.boundingelem',{
     yPercent: 100,
      ease: Expo.easeInOut,
      duration: 2.5,
      delay: -1,
      stagger: 0.2,
})
t1.from('.boundingelem2',{
    y:-100,
    ease:Expo.easeInOut,
    duration:2,
    delay:-2,
    stagger:0.2
})
t1.to('.main-bottom',{
    opacity:1,
    duration:2,
    delay:-0.5
})

let items = document.querySelectorAll('.sec2-item');
var rotate = 0;
var differ = 0;
items.forEach((item)=>{
    let sec2img =item.querySelector('img');
        let viewbtn =item.querySelector('.view');
    item.addEventListener('mousemove',(dets)=>{
        let diff = dets.clientY-item.getBoundingClientRect().top;
        differ = dets.clientX-rotate,
        rotate =dets.clientX;
        
        gsap.to([sec2img,viewbtn],{
            opacity:1,
            left:dets.clientX-250,
            top:diff-100,
            rotate:gsap.utils.clamp(-10,10,differ),
        })
    })
     item.addEventListener('mouseleave',(dets)=>{
        gsap.to([sec2img,viewbtn],{
            opacity:0,
        })
    })
})

