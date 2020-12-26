window.onload = function() {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1655528349-8rz3gqDd";   // change the default LIFF value if you are not using a node server
 
    // DO NOT CHANGE THIS
    let myLiffId = "";
 
    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                console.log(error);
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }


};
 
/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        console.log("err");
    } else {
        console.log("start");
        initializeLiff(myLiffId);
    }
}
 
/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            console.log(err);
        });
}
 
/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    displayLiffData();
    displayIsInClientInfo();
    registerButtonHandlers();
 
    // check if the user is logged in/out, and disable inappropriate button
}

/**
* Display data generated by invoking LIFF methods
*/
// function displayLiffData() {
//     document.getElementById('isInClient').textContent = liff.isInClient();
//     document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
// }
 
// /**
// * Toggle the login/logout buttons based on the isInClient status, and display a message accordingly
// */
// function displayIsInClientInfo() {
//     if (liff.isInClient()) {
//         document.getElementById('liffLoginButton').classList.toggle('hidden');
//         document.getElementById('liffLogoutButton').classList.toggle('hidden');
//         document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
//     } else {
//         document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
//     }
// }

function registerButtonHandlers() {
    // document.getElementById('openWindowButton').addEventListener('click', function() {
    //     liff.openWindow({
    //         url: 'https://pedulisehat-web.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
    //         external: true
    //     });
    // });

    // document.getElementById('closeWindowButton').addEventListener('click', function() {
    //     if (!liff.isInClient()) {
    //         sendAlertIfNotInClient();
    //     } else {
    //         liff.closeWindow();
    //     }
    // });

    document.getElementById('sendMessageButton').addEventListener('click', function() {
        console.log("halo")
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "Anda telah menggunakan fitur Send Message!"
            }]).then(function() {
                window.alert('Ini adalah pesan dari fitur Send Message');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
        }
    });
}