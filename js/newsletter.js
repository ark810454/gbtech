 
let inputNews = document.querySelector('.inputNews') 
let connexion = false;
 
  inputNews.children[0].addEventListener('change', (e) => {
    try {
      const regex = /^[a-z0-9._%+-]{3,}@[a-z0-9_-]{2,}\.[a-z]{2,}$/;
      let result = regex.test(e.target.value)
      if (result === true) {
        showMess()
        connexion= true 
      }  else{
        showMess("Email invalide!", "#A0004F") 
        connexion = false
      }

    } catch (errors) {
      showMess("Une erreur s'est produite, veillez rafraichir la page est ressayer SVP!", "#A0004F")
    }
  });
  inputNews.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (inputNews.children[0].value === "") {
      showMess("Le champ est vide !", "#A0004F")
    }
    if (connexion === true) {
      showMess("Veillez patienter SVP!")
      const email = inputNews.children[0].value.trim()
      
      let send=await  fetch("./news.php  ",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email  })
    })
    try {
          let response= await send.json()
     
            if (response['success']) { 
                inputNews.innerText = "Merci pour la confiance!" 
                inputNews.style = "width: max-content; font-weight: 600"
                showMess('')
            } else  { 
                showMess('Email incorecte ou existe dejà!', "#A0004F")
            }
    } catch (errors) {
        console.log(errors) 
        showMess('Une erreur s\'est produite!', "#A0004F")
    }
  
    
      
    }  
  });

function showMess(message="", color="#CFD8DC33") { 
    let nn =document.querySelector(".newsletter")
    if (nn.querySelector("span")) {
     nn.removeChild(nn.querySelector("span"))   
    }
  let span = document.createElement('span')
  span.textContent = message 
  span.style.color = color
  inputNews.style.borderColor = color 
  nn.appendChild(span)
}