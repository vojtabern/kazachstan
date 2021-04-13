

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

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("cas").innerHTML ="Čas v kazachstánu je " + (h+4) + ":" + m + ":" + s;
    let t = setTimeout(function(){ startTime() }, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }



