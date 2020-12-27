const dataRs = []

fetch('https://dekontaminasi.com/api/id/covid19/hospitals')
  .then(response => response.json())
  .then(data => console.log(data));
  
window.onload = function() {
    console.log("halo");   
}

function getData(){
    console.log("halo");
}