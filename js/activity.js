const pf = [
    {
        "img" : "assets/movi.png",
        "title": "moviexpress.com",
        "description": `Aliquam at accumsan nibh. Praesent pretium ut tortor ac commodo. Integer semper quam at rutrum interdum. Mauris eu diam ac urna laoreet mollis et <br><br> Praesent lacus tortor, facilisis non enim eu, luctus semper velit. Curabitur faucibus diam in lectus.`,
        "link" : "https://moviexpress.com",
        "type" : "web"
    },
    
  
  ]
  
  let open = false
  function filterProjet(type) {
    let projets; 
    let contenuPro = document.querySelector('.contenupro')
    contenuPro.innerHTML = ""
    if (type) {
      projets = pf.filter(projet => projet.type === type)
    }
    else{
      projets = pf;
    }
  
    projets.forEach((projet, i) => {
      let div = document.createElement('div') 
      let img = document.createElement('img')
      let p = document.createElement('p')
      let span = document.createElement('span')
      span.innerHTML = projet.description
      p.textContent = `${projet.title} - ` 
      p.appendChild(span)
      img.src = projet.img
      div.appendChild(img)
      div.appendChild(p)
      contenuPro.appendChild(div) 
      contenuPro.children[i].style=" transform: scale(0.7);opacity:0"
      setTimeout(() => {
         contenuPro.children[i].style=" transform: scale(1); opacity:1"
      }, 50);
      contenuPro.children[i].addEventListener('click',(event)=>{
        event.stopPropagation()
        let parent = document.createElement('div')
        let btncon = document.createElement('divv')
        let detail = document.createElement('a')
        let close2 = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
        detail.textContent = "Detail"
        detail.href = projet.link
        detail.target= "_blank"
        let close = document.createElement('btn')
        close.textContent = "Fermer"
        btncon.appendChild(detail)
        btncon.appendChild(close)
        parent.classList.add('parent')
        let parent2 = document.createElement('div')
        parent2.classList.add('parent2')
        parent2.style=`transform: translateY(20dvh);opacity:0.5 `
        let div = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let span = document.createElement('span')
        span.innerHTML = projet.description
        p.textContent = projet.title
        img.src = projet.img
        parent2.innerHTML = close2
        parent2.appendChild(img)
        div.appendChild(p)
        div.appendChild(span)
        div.appendChild(btncon)
        parent2.appendChild(img)
        parent2.appendChild(div) 
        parent.appendChild(parent2)
        document.querySelector('.container').appendChild(parent)
        open = true 
        setTimeout(() => {
           document.querySelector('.parent').style=`background: #10151799; opacity:1; transition: all 0.3s ease-in`
            document.querySelector('.parent2').style=`  transform: translateY(0);opacity:1;transition: all 0.5s ease` 
        }, 50);
      })
    });
  }
  filterProjet()

  let btnpro = document.querySelectorAll('.btnpro button')
  btnpro.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.stopPropagation()
        btnpro.forEach(b => b.classList.remove('proActive'))
        btn.classList.add('proActive')
        filterProjet(btn.id)
    })
  });

  setInterval(() => {
   if (open) {
    document.querySelector("btn").addEventListener('click', (e)=>{
      e.stopPropagation() 
        document.querySelector('.parent').style=`background: #10151700; opacity:0; transition: all 0.3s ease-in-out`
        document.querySelector('.parent2').style=`  transform: translateY(-5dvh);opacity:0.5;transition: all 0.2s ease-in`         
       setTimeout(() => {
      document.querySelector('.container').removeChild(document.querySelector('.parent'))   
      open = false
     }, 500); })
    document.querySelector(".parent2 svg").addEventListener('click', (e)=>{
      e.stopPropagation()
        document.querySelector('.parent').style=`background: #10151700; opacity:0; transition: all 0.3s ease-in-out`
        document.querySelector('.parent2').style=`  transform: translateY(-5dvh);opacity:0.5;transition: all 0.2s ease-in`         
       setTimeout(() => {
      document.querySelector('.container').removeChild(document.querySelector('.parent'))   
      open = false
     }, 500); })

    
     

} 
  }, 1000);

  window.addEventListener('click', ()=>{
  if (open) {
    document.querySelector('.parent').style=`background: #10151700; opacity:0; transition: all 0.3s ease-in-out`
    document.querySelector('.parent2').style=`  transform: translateY(-5dvh);opacity:0.5;transition: all 0.2s ease-in`         
   setTimeout(() => {
  document.querySelector('.container').removeChild(document.querySelector('.parent'))   
  open = false
 }, 500);
  } 
  })