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