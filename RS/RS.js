$("#parallax-banner").parallax({
	imageSrc: "../RS/imagens-rs/BANNER.jfif",
});





function pesquisa(input, input_txt){
 input = document.getElementById("input-s3");
 input_txt = input.value;
console.log(input_txt);
if(input_txt === 'santa catarina'){

    let container = $("#div-s3-2")[0];
    container.innerHTML =
    
    '<img src="./imagens-rs/santa-catarina.jfif"></img>'+
    '<div id="div-nome-iframe">'+
    '<div class="d-flex flex-column justify-content-around align-items-center"><h1>Santa Catarina</h1><h4>RS</h4></div>'+
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619417.6231551785!2d-53.33296249118054!3d-27.637288784841893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1670379924443!5m2!1spt-BR!2sbr" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'+
    '</div>'+
    '<button class="btn-outline-dark p-2">ir para a pagina</button>'


}else{
    let container = $("#div-s3-2")[0];
    container.innerHTML =

    '<p>essa cidade não existe</p>'}
};




