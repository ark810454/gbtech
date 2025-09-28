let lastScrollY = window.scrollY;
let lastTime = performance.now();
const speedDisplay = document.getElementById('speedDisplay');
const slow = document.querySelector('.home');
const bgVid = document.querySelectorAll('.bgVideo , .bgVideo2');
let animeService = document.querySelectorAll('.first , .second');
let textes = document.querySelectorAll('.text')
let alldiv =  document.querySelectorAll('main img, button, main svg, .card2, .contenupro, chris')
let allP = document.querySelectorAll('p, span, .avis')
let sections = document.querySelectorAll('header, section')
let navSpans = document.querySelectorAll('.btm')
 
function updateScrollSpeed() {
  const currentScrollY = window.scrollY;
  const currentTime = performance.now(); 
  slow.style.transform = `translateY(${currentScrollY * -0.3}px) `; 
  
  bgVid.forEach(element => {
    element.style.transform = `translateY(${currentScrollY * -0.3}px) rotate(${currentScrollY / 20}deg)`;
  });



  animeService.forEach(element => {
    let vid = element.children[0]
    const scrollTop = window.scrollY || window.pageYOffset;
    let elementHeight = vid.offsetHeight;
    const position = vid.getBoundingClientRect().top + scrollTop;
    // Vérifie si la section est visible dans la fenêtre
    if (scrollTop + window.innerHeight >= position + elementHeight) {
      vid.classList.add('smooth_scroll')
      vid.children[0].setAttribute('autoplay', 'true') 
    }

  });

  const deltaY = currentScrollY - lastScrollY;
  const deltaTime = (currentTime - lastTime) / 1000; // Convertir en secondes

  // const speed = Math.abs(deltaY / deltaTime); // Vitesse en px/s

  // speedDisplay.textContent = `Vitesse : ${speed.toFixed(2)} px/s`;

  lastScrollY = currentScrollY;
  lastTime = currentTime;
}
let home
let isScrolling;
window.addEventListener('scroll', () => {
  if (isScrolling) return;


  isScrolling = true;
  requestAnimationFrame(() => {
    textes.forEach(text => {
      if (isScrolledIntoView(text)) {
        text.style = "opacity: 1; transition: all 0.7s ease; transform: scale(1)"
      }
      else {
        text.style = "opacity: 0.8; transition: all 0.7s ease; transform: scale(0.5)"
      }
    });
    alldiv.forEach(div => {
      if (isScrolledIntoView(div)) {
        div.style = "opacity: 1; transition: all 0.7s ease; transform: scale(1)"
      }
      else {
        div.style = "opacity: 0.9; transition: all 0.7s ease; transform: scale(0.8)"
      }
    });
    allP.forEach(text => {
      if (isScrolledIntoView(text)) {
        text.style = "opacity: 1; transition: all 0.7s ease; transform: translateY(0)"
      }
      else {
        text.style = "opacity: ; transition: all 0.7s ease; transform: translateY(-50px)"
      }
      if (window.scrollY === 0) {
        text.style = "opacity: 1; transition: all 0.7s ease; transform: translateY(0)" 
      }
    });
    if (window.scrollY === 0) {
      document.querySelector('.gb').style = "opacity: 1; transition: all 0.7s ease; transform: translateY(0)" 
      document.querySelector('.p').style = "opacity: 1; transition: all 0.7s ease; transform: translateY(0)" 
    }
    updateScrollSpeed();
    isScrolling = false;

  });

});

const svgs = document.querySelectorAll('chris');
svgs.forEach(svg => {
  if (svg.id) {
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')

    svg.addEventListener('mousemove', (event) => {
      document.querySelector(".container").appendChild(tooltip)

       tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY + 16}px`; 
      tooltip.textContent = svg.id
    });

    svg.addEventListener('mouseleave', () => {
      if (tooltip) {
        document.querySelector(".container").removeChild(tooltip)
     }
    });
   

  }
});
window.addEventListener('scroll', ()=>{
let tooltip = document.querySelector('.tooltip')
  if (tooltip) {
     document.querySelector(".container").removeChild(tooltip)
  }
 
})
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  return (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

let etat = false; let menu = document.querySelector('.menutool'); menu.classList.add('hide')
function openMenu(e) {
  e.stopPropagation()
  etat = !etat;
  if (etat) {
    menu.classList.replace('hide', 'show')
  } else {
    menu.classList.replace('show', 'hide')
  }
}
menu.addEventListener('click', (e)=>{
  e.stopPropagation()
  menu.classList.replace('hide', 'show')
})
window.addEventListener('click', (e)=>{
  etat = false
  menu.classList.replace('show', 'hide')
})

let cards = document.querySelectorAll('.card2')
cards.forEach(card => {
  card.addEventListener('mouseenter', ()=>{
    card.children[0].style = "visibility: visible; transition: 0.2s visibility ease-in-out"
    card.children[1].children[0].style = "color: #f7f7f8!important"
       card.children[1].children[1] .style = "display:none!important"
       card.children[1].children[2].style = "display:flex!important"
      card.children[1].children[3].style = "color: #f7f7f8!important"
       card.children[1].children[4].children[1].style = "display:none!important"
       card.children[1].children[4].children[0].style = "display:flex!important"
        card.children[1].children[4].children[2].style = "background: #f7f7f8!important; "
        card.children[1].children[4].children[2].children[0].style = "fill: var(--black)!important"
  })
  card.addEventListener('mouseleave', ()=>{
    card.children[0].style = "visibility: hidden; transition: 0.2s visibility ease-in-out"
    card.children[1].children[0].style = "color: initial!important"
       card.children[1].children[1] .style = "display:flex!important"
       card.children[1].children[2].style = "display:none!important"
      card.children[1].children[3].style = "color: initial!important"
       card.children[1].children[4].children[1].style = "display:flex!important"
       card.children[1].children[4].children[0].style = "display:none!important"
        card.children[1].children[4].children[2].style = "background: var(--black)!important;  "
        card.children[1].children[4].children[2].children[0].style = "fill: var(--white)!important"
  })
});


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7  
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navSpan = document.querySelector(`.btm[data-target="${id}"]`);

      if (entry.isIntersecting) {
          navSpans.forEach(span => span.classList.remove('active'));
          navSpan.classList.add('active');
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Durée de l'animation
  let start = null;

  function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOut(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Fonction easing
  }

  requestAnimationFrame(animation);
}

const menutool = document.querySelector('.menutool')
const gg = document.querySelectorAll('.menutool chris')
setInterval(() => {
  gg.forEach(element => {
    if (element.classList.contains('active')) {
      menutool.previousElementSibling.style = "fill: var(--primary)"
       menutool.previousElementSibling.previousElementSibling.style = "fill: var(--primary)"
    }
  });
}, 50);

const closenav = document.querySelector(".closeNavBar")
let etatNav = false
if (closenav) {
  closenav.addEventListener('click', ()=>{
    etatNav = !etatNav;
    if (etatNav) {
      closenav.parentElement.parentElement.style = "transform: translateY(100%); opacity: 0.5"
      closenav.style = "transform: rotate(180deg)"
    }
    else{
       closenav.parentElement.parentElement.style = "transform: translateY(0); opacity: 1"
      closenav.style = "transform: rotate(0deg)"
    }
  })
}