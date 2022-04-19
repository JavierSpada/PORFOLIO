$(document).ready(function(){
    $('#login').hide();

    $('#open_close').click(function(){
        $('#login').slideToggle();
    })
})

function cambiar_parrafo(){
   document.getElementById("edit-acercade").style.display="block"; 
   let texto = document.getElementById("text-acercade").innerText;
   console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
}

function logMessage(message) {
    console.log(message + "<br>");
}

let textarea=document.getElementById("edit-acercade")
     textarea.addEventListener('keyup', (e) => {
         logMessage('Key "${e.key}" released [event: keyup]');
         if (e.key=="Enter"){
             document.getElementById("edit-acercade").style.display="none"
         }
     });

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 8000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .3s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}