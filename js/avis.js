const avis = [
    {
        "message" : "Un grand plaisir de travailler avec vous, en tout cas, je suis satisfait du boulot, j'espère te revenir vite pour d'autre projet. Merci beaucoup.",
        "client" : "Mr Calvaires D"
    },
    {
        "message" : "Notre équipe a aprecié le travail que vous nous avez rendu. Un site qui correspond à nos attentes étant médias. Surtout sur la gestion des articles. Merci beaucoup à la prochaine occasion.",
        "client" : "Mr Mudimbi Thierry"
    }, 
]
 let aa = document.querySelector(".avis")  
function myavis() {
        avis.forEach(avi => {
            let p = document.createElement('p')
            let div = document.createElement('div')
            p.innerHTML= avi.message
            let span = document.createElement('span')
            span.textContent = `Par ${avi.client}`
            div.appendChild(p)
            div.appendChild(span)
            aa.appendChild(div)
            setTimeout(() => {
                aa.children[0].style=` opacity:1; transition: all 0.3s ease-in` 
             }, 50);
        });
}
myavis()
 
    setInterval(() => {
        if (aa.children.length === 1 || aa.children.length < 1) {
          myavis()  
        }else{
             aa.children[0].style=` opacity:0;transform: translateY(-40px); transition: all 0.5s ease-in` 
            
            setTimeout(() => {
               aa.removeChild(aa.children[0]) 
             }, 500);
        }
   }, 10000);
 