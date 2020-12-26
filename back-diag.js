var data = [];

function pindahDiag() {
    window.location.href = "diagnose.html";
}

function nextS(namaElement, tujuanPage) {
    var radio = document.getElementsByName(namaElement);

    for (var i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            data.push(radio[i].value);
            break
        }
    }

    

    var total = 5;
    for(var i=1; i<=total; i++){

        if (document.getElementById('question'+i)) {

            document.getElementById('question'+i).style.display='none';
            document.getElementById('hasil').style.display='none';
        }

    }

    if(tujuanPage == "hasil"){
        console.log(data);
        document.getElementById('hasil').style.display='block';
        // window.location.href = "hasil.html";
    }

        if (document.getElementById('question'+tujuanPage)) {

            document.getElementById('question'+tujuanPage).style.display='block';
            document
        }
}

function finish() {
    x = document.getElementsByName('radioBau');
    console.log(x.value);
    data.push(x.value);
    console.log(data);
}

function send(){
    console.log(data);
    // if (!liff.isInClient()) {
    //     sendAlertIfNotInClient();
    // } else {
        
    //     liff.sendMessages([{
    //         'type': 'text',
    //         'text': 'asd'
    //     }]).then(function() {
    //         alert('Catatan Tersimpan');
    //     }).catch(function(error) {
    //         alert('Aduh kok error ya...', error);
    //     });
    // }
}