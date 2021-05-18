

const ano = document.getElementById('ano');
const ne = document.getElementById('ne');
const a_odp = document.getElementById('a_ans');
//const n_odp = document.getElementById('n_ans');

ano.addEventListener('click', function(){
    a_odp.innerText='Nachytal jsi se, tuto hymnu stvořil Borat';
    a_odp.innerHTML+='<img src="img/borat.webp">'
})

ne.addEventListener('click', function(){
    a_odp.innerText='Ano máš pravdu!!';

    a_odp.innerHTML+=`<audio controls>
    <source src="hymna/hymna_ano.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>`
})





