
function loading(){
  setTimeout( () => {
  $('#load').css('display','none');
}, 2000);
setTimeout( () => {
    alert("para o correto funcionamento do site é preciso habilitar no google flags a propriedade scroll-behavior e seus atributos, estamos trabalhando para que isso seja facilitado! Caso não queira habilitar a qual, o site funcionará, mas terá algumas limitações. aperte o botão OK para prosseguir");
}, 2000);
}

const mapaBrasil = document.getElementById("mapaBrasil");const ladomapa = document.getElementById("ladomapa");
function mapaanimate(){
mapaBrasil.style.cssText = "transform: translateX(-300px);"
}


var Nav = document.querySelector("nav.menu");
var topoNav = Nav.offsetTop;

//sticky
function myFunction (topoWindow){
    topoWindow = document.querySelector("div.container_principal").scrollTop;
    console.log(topoNav);
    console.log(topoWindow);
    if(topoWindow >= topoNav){
        Nav.classList.add("fixed")
    }else{Nav.classList.remove("fixed")}
    
}


//identificador de container
const  li = document.querySelectorAll(".menu a");
function section_2(){
    setTimeout( () => {
        mapaBrasil.style.cssText = "transform: translateX(0px);animation: rotate 1.5s ease-out;"
    }, 200)

    setTimeout( ()=> {
      
    li[0].style.cssText = "color: var(--texto_3);" + "opacity: 0.5" + "transition: 1s"
    li[1].style.cssText = "color: var(--texto_3);" + "opacity: 1;" + "text-decoration: underline;" + "transition: 500ms"
    li[2].style.cssText = "color: var(--texto_3);" + "opacity: 0.5" + "transition: 1s"}, 500)
}
function section_3(footerDiv){
    setTimeout( ()=> {
    footerDiv = document.getElementById("footerDiv");
    li[0].style.cssText = "color: var(--texto_1_2);" + "opacity: 0,5;" + "text-decoration: none;"
    li[1].style.cssText = "color: var(--texto_1_2);" + "opacity: 0,5;" + "text-decoration: none;"
    li[2].style.cssText = "color: var(--texto_1_2);" + "opacity: 1;" + "text-decoration: underline;"
    footerDiv.style.cssText = "animation: visibility 1s ease-in-out;" + "opacity: 1;"}, 500)
}
function section_1(){
    setTimeout( ()=> {
    li[0].style.cssText = "color: var(--texto_1_2);" + "opacity: 1;" + "text-decoration: underline;"
    li[1].style.cssText = "color: var(--texto_1_2);" + "opacity: 0,5;" + "text-decoration: none;"
    li[2].style.cssText = "color: var(--texto_1_2);" + "opacity: 0,5;" + "text-decoration: none;"}, 500)
}

//mapa



function amazonas(){
    document.querySelector("#svg-map #RS path").id = 'not-active'
    document.querySelector("#svg-map #bahia path").id = 'not-active'
    document.querySelector("#svg-map #amazonas path").id = 'active'
    ladomapa.style.cssText = "opacity: 1;"
  
//<button type="button" class="btn btn-outline-dark w-100 m-1" style="margin: 0 auto" ><a href = "../Amazonas/amazonas.html" style="color: inherit; text-decoration: none;">ir para a página</a></button>'+
    
    ladomapa.innerHTML = 
    '<div class="d-block w-100 p-1" id="fc-ladomapa">'+
    '<h1>AMAZONAS</h1>'+
    '<img src="imagem/amazonas-card.jpg" id="img-card">'+
    '<h2>porque o amazonas?</h2>'+
    '<ul>'+
    '<li>passeios em rios</li>'+
    '<li>resorts com atividades variadas</li>'+
    '<li>uma vasta natureza</li>'+
    '</ul>'+
    '</div>'
    
}
function RS(){
    document.querySelector("#svg-map #RS path").id = 'active'
    document.querySelector("#svg-map #bahia path").id = 'not-active'
    document.querySelector("#svg-map #amazonas path").id = 'not-active'
    ladomapa.style.cssText = "opacity: 1;"
  
//<button type="button" class="btn btn-outline-dark w-100 m-1" style="margin: 0 auto" ><a href = "../Amazonas/amazonas.html" style="color: inherit; text-decoration: none;">ir para a página</a></button>'+
    
    ladomapa.innerHTML = 
    '<div class="d-block w-100 p-1" id="fc-ladomapa">'+
    '<h1>RIO GRANDE DO SUL</h1>'+
    '<img src="imagem/rsgramado.jfif" id="img-card">'+
    '<h2>porque o Rio Grande do Sul?</h2>'+
    '<ul>'+
    '<li>atividades variadas</li>'+
    '<li>vários parques</li>'+
    '<li>atrações inusitadas</li>'+
    '</ul>'+
    '</div>'
    
}
function BH(){
    document.querySelector("#svg-map #RS path").id = 'not-active'
    document.querySelector("#svg-map #bahia path").id = 'active'
    document.querySelector("#svg-map #amazonas path").id = 'not-active'
    ladomapa.style.cssText = "opacity: 1;"
  
//<button type="button" class="btn btn-outline-dark w-100 m-1" style="margin: 0 auto" ><a href = "../Amazonas/amazonas.html" style="color: inherit; text-decoration: none;">ir para a página</a></button>'+
    
    ladomapa.innerHTML = 
    '<div class="d-block w-100 p-1" id="fc-ladomapa">'+
    '<h1>BAHIA</h1>'+
    '<img src="imagem/bailheus.jfif" id="img-card">'+
    '<h2>porque a Bahia?</h2>'+
    '<ul>'+
    '<li>belas praias</li>'+
    '<li>atrações históricas</li>'+
    '<li>paisagens variadas</li>'+
    '</ul>'+
    '</div>'
    
}

function out(){
    document.querySelector("#svg-map #RS path").id = 'not-active'
    document.querySelector("#svg-map #bahia path").id = 'not-active'
    document.querySelector("#svg-map #amazonas path").id = 'not-active'
    ladomapa.style.cssText = "opacity: 0;"

    ladomapa.innerHTML = ''

}

//eventos
const container_principal = document.querySelector(".container_principal")
container_principal.addEventListener("scroll" , () => {
    myFunction();
}
    );

window.addEventListener("load" ,() => {
        myFunction();
        section_1();
        mapaanimate();
        loading();
        
    } );




    
   



