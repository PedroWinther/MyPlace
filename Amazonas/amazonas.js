$("#parallax-banner").parallax({
	imageSrc: "../Amazonas/imagens-amazonas/manaus.jpg",
});





function pesquisa(input, input_txt){
 input = document.getElementById("input-s3");
 input_txt = input.value;
console.log(input_txt);
if(input_txt === 'MANAUS'){

    let container = $("#div-s3-2")[0];
    container.innerHTML =
    
    '<img src="./imagens-amazonas/manaus-pesquisa.jfif"></img>'+
    '<div id="div-nome-iframe">'+
    '<div class="d-flex flex-column justify-content-around align-items-center"><h1>Manaus</h1><h4>amazonas</h4></div>'+
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254987.93396406065!2d-60.107537008953535!3d-3.044652921808112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1669829745460!5m2!1spt-BR!2sbr" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'+
    '</div>'+
    '<button class="btn-outline-dark p-2">ir para a pagina</button>'


}else{
    if(input_txt === 'IRANDUBA'){

    let container = $("#div-s3-2")[0];
    container.innerHTML =
    
    '<img src="./imagens-amazonas/iranduba-pesquisa.jfif"></img>'+
    '<div id="div-nome-iframe">'+
    '<div class="d-flex flex-column justify-content-around align-items-center"><h1>Iranduba</h1><h4>amazonas</h4></div>'+
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31866.451652094955!2d-60.201495394153675!3d-3.2739557967027175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926bf53d2675f1fb%3A0x8ca94cd0ad200a71!2sIranduba%2C%20AM%2C%2069405-000!5e0!3m2!1spt-BR!2sbr!4v1669832317500!5m2!1spt-BR!2sbr" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'+
    '</div>'+
    '<button class="btn-outline-dark p-2">ir para a pagina</button>'


    }else{
    let container = $("#div-s3-2")[0];
    container.innerHTML =

    '<p>essa cidade não existe</p>'}
};


}

