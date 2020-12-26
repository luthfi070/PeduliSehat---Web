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

function send(){
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': data
        }]).then(function() {
            alert('Catatan Tersimpan');
        }).catch(function(error) {
            alert('Aduh kok error ya...', error);
        });
    }
}