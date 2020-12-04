const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
/*
function pageTransition(){
    var tl= gsap.timeline();

    tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

  function delay(n){
    n = n || 2000;
    return new Promise(done =>{
        setTimeout(() =>{
            done();
        },n);
    });
}



barba.init({
    sync: true,
    transitions: [{
        async leave(data){
            const done = this.async();
            
            pageTransition();
            await delay(1500);
            done();
        }
    }]
})*/

function delay(n){
    n = n || 2000;
    return new Promise(done =>{
        setTimeout(() =>{
            done();
        },n);
    });
}
function pageTransition(){
    var tl= gsap.timeline();

    tl.to(".loading-screen",{
        duration: 1, width: "100%" , left: "0%",ease: "Expo.easeInOut"
    });
    tl.to(".loading-screen",{
        duration: 0.8, width: "100%" , left: "100%",ease: "Expo.easeInOut", delay: 0.3
    });
    tl.set(".loading-screen",{left: "-100%"});
}

function contentAnimation(){
    var tl= gsap.timeline();

    tl.to('.home-img',{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", delay: 0.3})
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data){
            const done = this.async();
            
            pageTransition();
            await delay(1500);
            done();
        },
        async enter(data){
            contentAnimation();
        },
        async once(data){
            contentAnimation();
        }
    }]
})


/*
$(".info-content").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
})*/