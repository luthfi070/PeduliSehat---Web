var data = [];

function pindahDiag() {
    window.location.href = "diagnose.html";
}

function pindahRs() {
    window.location.href = "rumahSakit.html";
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
    data.push(x.value);
}

function send(){
    var count = 0;
    console.log(data);
    hasil = "";
    for(i = 0; i < data.length; i++){
        if(data[i] == "ya"){
            count += 1;
        }else{
            count += 0;
        }
    }

    if(count > 2){
        if(data[0] == "ya"){
            hasil = "ya";
        }else if(data[4] == "ya"){
            hasil = "ya";
        }else if(data[3] == "ya"){
            hasil = "ya";
        }else{
            hasil = "hati hati"
        }
    }else{
        if(data[0] == "ya"){
            hasil = "hati hati"
        }else if(data[4] == "ya"){
            hasil = "hati hati"
        }else if(data[3] == "ya"){
            hasil = "hati hati"
        }else{
            hasil = "istirahat"
        }
    }

    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        if(hasil == "ya"){
            liff.sendMessages([{
                'type': 'text',
                'text': 'Ada kemungkinan > 90% anda terkena virus corona !, anda mengalami beberapa gejala kuat indikasi virus corona, segera hubungi rumah sakit rujukan terdekat atau segera lakukan swab test atau test lainnya!'
            }]).then(function() {
                alert('Pesan terkirim, yuk cek PeduliSehat');
            }).catch(function(error) {
                alert('Aduh kok error ya...', error);
            });
        }else if(hasil == "hati hati"){
            liff.sendMessages([{
                'type': 'text',
                'text': 'Ada kemungkinan < 50% anda terkena virus corona !, tetap beristirahat dirumah, jika dalam 4 hari tidak kunjung sembuh maka segera hubungi rumah sakit terdekat, tetap berhati hati dan makan makanan yang sehat ya~'
            }]).then(function() {
                alert('Pesan terkirim, yuk cek PeduliSehat');
            }).catch(function(error) {
                alert('Aduh kok error ya...', error);
            });
        }else if(hasil == "istirahat"){
            liff.sendMessages([{
                'type': 'text',
                'text': 'Anda tidak mengalami gejala kuat corona, namun anda mungkin sedang demam atau kurang istirahat, silahkan istirahat secukupnya, jika gejala bertambah segera hubungi rumah sakit terdekat'
            }]).then(function() {
                alert('Pesan terkirim, yuk cek PeduliSehat');
            }).catch(function(error) {
                alert('Aduh kok error ya...', error);
            });
        }
    }
}