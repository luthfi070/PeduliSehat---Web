var data = [];

function pindahDiag() {
    window.location.href = "diagnose.html";
    console.log("halo");
}

function nextS(namaElement, tujuanPage) {
    var radio = document.getElementsByName(namaElement);

    for (var i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            data.push(radio[i].value);
            window.location.href = tujuanPage + ".html";
            break
        }
    }
}