const inputs = document.querySelectorAll('.input input, form textarea')
inputs.forEach(input => {
    input.addEventListener('focus', ()=>{ 
        let dd =input.nextElementSibling
        dd.style="transform: translateY(-20px); font-size: 14px;left: 5%; animation: 0.4s all ease-in-out forwards;";
          })
    input.addEventListener('blur', ()=>{ 
        if (input.value =="") {
        let dd =input.nextElementSibling
        dd.style="transform: translateY(0px);font-size: 16px;left: 0; animation: 0.4s all ease-in-out forwards;";
         }
    })
});

const openCont = document.querySelectorAll('.openCont')
const pageCont = document.querySelector('.contact')
pageCont.classList.add('hide')
openCont.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.stopPropagation()
        pageCont.classList.replace('hide','show')
        document.body.style = "overflow:hidden;"
       setTimeout(() => {
         pageCont.children[0].style = "transform: translateX(0); ";
       }, 500);
    })
});

function closeContact(e) {
    e.stopPropagation()
         pageCont.children[0].style = "transform: translateX(100%); ";
         pageCont.style="background: #00000000;";
       setTimeout(() => {
    document.body.style = "overflow-y:scroll;"
    pageCont.classList.replace('show','hide');
    pageCont.style="background: #10151788;";
    if (pageCont.classList.contains('hide')) {
         document.querySelector('.contact form button svg').style="margin-left: 0px;"
         document.querySelector('.contact form button svg').style="background: var(--primary);"
         document.querySelector('.contact form button').style="border-color: #265EA922!important;"
    }
       }, 500);
}

    pageCont.children[0].addEventListener('click', (e)=>{
        e.stopPropagation()
    })
    window.addEventListener('click', (e)=>{ 
         if (pageCont.classList.contains("show")) {
            closeContact(e)
         }
    })


 

 form(document.querySelectorAll('form')[1])
 
function form(formId) { 
     
     
        let etat = new Array(inputs.length).fill(false);
        for (let i = 0; i < etat.length; i++) {
            inputs[1].addEventListener('change', (e)=>{  
                try {
                    const regex = /^[a-z0-9._%+-]{3,}@[a-z0-9_-]{2,}\.[a-z]{2,}$/;
                    let result = regex.test(e.target.value)
                    if(result===true){ 
                        etat[1]=true
                    }else{
                       error("Email invalide !") 
                       etat[1]=false
                    }
              
                } catch (error) {
                    console.log("erreur: "+error)
                }  
    });
            inputs[0].addEventListener('change', (e)=>{  
                    try {
                        const regex = /^[a-zA-Z]{3,}$/;
                        let result = regex.test(e.target.value)
                        if(result===true){ 
                            etat[0]=true
                        }else{
                           error("Le nom n'est doit pas contenir des chiffres ou moins de 3 caractères !") 
                           etat[0]=false
                        }
                  
                    } catch (error) {
                        console.log("erreur: "+error)
                    }
        });
     
    }
    formId.addEventListener('submit', async (e)=>{
        e.preventDefault();
        let id = 1
        if (inputs[0].value ==="") {
            error("Le champs nom est vide !") 
        }
        else if (inputs[1].value ==="") {
            error("Le champs email est vide !") 
        }
        else if (inputs[2].value ==="") {
            error("Veillez entrer le sujet du message !") 
        }
        else if (inputs[3].value ==="") {
            error("Veillez entrer votre message !") 
        }
        
        else{
            
            if (etat[0]===true && etat[1]=== true) { 
                document.querySelector('.contact form button svg').style="margin-left: 340px"
                const name = inputs[0].value.trim();
        const email = inputs[1].value;
        const sujet = inputs[2].value;
        const contenu = inputs[3].value; 
        const sendTo = "ark810454@gmail.com"
                    let send=await  fetch("./mail.php  ",{
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name, email, sujet, contenu, sendTo })
                    })
                    try {
                          let response= await send.json()
                     
                            if (response['success']) {
                                 document.querySelector('.contact form button svg').style="background: #1ca2a2"
                                 document.querySelector('.contact form button').style="border-color: #1ca2a2!important "
                                success("Le message a été envoyé avec succès !")
                                 inputs.forEach(input => {
                                    input.value = ""
                                 });
                            } else  {
                                console.log(response)
                                document.querySelector('.contact form button svg').style="background: #A0004F"
                                 document.querySelector('.contact form button').style="border-color: #A0004F!important "
                                error("Nous n'avons pas pu envoyer votre message, veillez ressayer SVP!"); 
                            }
                    } catch (errors) {
                        console.log(errors)
                        document.querySelector('.contact form button svg').style="background: #A0004F"
                         document.querySelector('.contact form button').style="border-color: #A0004F!important "
                        error("Votre message n'a pas pu etre envoyé, veillez ressayer SVP!"); 
                    }
                  
                    
                     }
                    else{
                        document.querySelector('.contact form button svg').style="background: #A0004F"
                         document.querySelector('.contact form button').style="border-color: #A0004F!important"
                        error("Veillez correctement entrer les information et ressayer, merci!")
                    } 
            }
            
    
        }) 
         
       } 
    
       function error(params) {
        setTimeout(logMess(params, '#A0004F'), 2000);
    } 
    function success(params) {
         setTimeout(logMess(params, '#1ca2a2'), 2000); 
    }
    function logMess(message, color, show) {
        let div = document.createElement('div')
        div.style =`background: ${color}; width: 300px height: auto; padding: 24px 32px; position: fixed; top:50px; left:50px; color: var(--light)`
        div.textContent = message
        document.querySelector('.contact').appendChild(div)
        div.classList.add("show")
        setTimeout(() => {
            div.classList.replace('show', 'hide')
        }, 5000);
    }
    
    /* async function getToken() {
        const response = await fetch('https://datintellik.io/gbToken');
        const data = await response.json();
        return data.csrf_token;
    } */