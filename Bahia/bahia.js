$("#parallax-banner").parallax({
	imageSrc: "../Bahia/Conteúdos Pág.Bahia/Imagens/Banner.jpg",
});





function pesquisa(input, input_txt){
 input = document.getElementById("input-s3");
 input_txt = input.value;
console.log(input_txt);
if(input_txt === 'salvador'){

    let container = $("#div-s3-2")[0];
    container.innerHTML =
    
    '<img src="./bg/salvador.jfif"></img>'+
    '<div id="div-nome-iframe">'+
    '<div class="d-flex flex-column justify-content-around align-items-center"><h1>Salvador</h1><h4>Bahia</h4></div>'+
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948677.335899019!2d-46.47056163796642!3d-13.400552419004365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2sBahia!5e0!3m2!1spt-BR!2sbr!4v1670384527346!5m2!1spt-BR!2sbr" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'+
    '</div>'+
    '<button class="btn-outline-dark p-2">ir para a pagina</button>'


}else{
    let container = $("#div-s3-2")[0];
    container.innerHTML =

    '<p>essa cidade não existe</p>'}
};




