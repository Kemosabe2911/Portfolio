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
    var tl= gasp.timeline();

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