document.addEventListener("DOMContentLoaded", function callIt() {
    // var test = document.getElementById('AAAAA');
    // test.addEventListener("click", function(){ 
    //  alert("TESTTESTTESTTESTTEST");
    // });   
    //!     CELLS ANIMATION
    var x = document.getElementsByClassName('col-1-6');
    for (var j=0; j < x.length; j++) {
        x[j].addEventListener("click", function(){miniPage(this.id);});
    }

    // !   ALERT
    var btn_alert = document.getElementById('btn_alert');
    btn_alert.addEventListener("click", function(){ 
        alert("TESTTESTTESTTESTTEST");
    }); 
    
    // !    SEND
    var btn_send = document.getElementById('btn_send');
    var container = document.getElementById('container');
    var pageCounter = 1;
  
    btn_send.addEventListener("click", function() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

    myRequest.onload = function() {
        // console.log(myData); //intero array
        // console.log(myData[0]); //singolo obj/element
        console.log(myRequest.status);
        //* Error handling: connection to server
        if (myRequest.status >= 200 && myRequest.status < 400) {
            var myData = JSON.parse(myRequest.responseText);
            renderHTMLeasy(myData, container);
        } else {

            btn_send.classList.add("blue");

            console.log("We   tryed to connect to the server, but it returned an error.");
        } 
    };

    //* Error handling: connection to server
    myRequest.onerror = function() {
        console.log("Connection error");
    };

    myRequest.send();
    pageCounter++;
    console.log(myRequest);
    
    if ( pageCounter > 3 ) {
        btn_send.classList.add("red");
        var btn = document.querySelector('#btn_send');
        btn.disabled = true;
    }
    });

    // !    SEND ALL
    var btn_send_all = document.getElementById('btn_send_all');
    var container_all = document.getElementById('container_all');
    
    btn_send_all.addEventListener("click", function() {
    var myRequest_all = new XMLHttpRequest();
    myRequest_all.open('GET', 'https://jsonplaceholder.typicode.com/todos');

    myRequest_all.onload = function() {
        
        console.log(myRequest_all.status);
        //* Error handling: connection to server
        if (myRequest_all.status >= 200 && myRequest_all.status < 400) {
            var myData_all = JSON.parse(myRequest_all.responseText);
            renderHTML(myData_all, container_all);
        } else {

            btn_send_all.classList.add("blue");

            console.log("We tryed to connect to the server, but it returned an error.");
        } 
    };

    //* Error handling: connection to server
    myRequest_all.onerror = function() {
        console.log("Connection error");
    };

    myRequest_all.send();
    pageCounter++;
    console.log(myRequest_all);

    });
}); 

// BTN_SEND crea e aggiunge html alla pagina
function renderHTMLeasy(data, container) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
        if (ii == 0) {
            htmlString += data[i].foods.likes[ii];
        } else {
            htmlString += " and " + data[i].foods.likes[ii];
        }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
        if (ii == 0) {
            htmlString += data[i].foods.dislikes[ii];
        } else {
            htmlString += " and " + data[i].foods.dislikes[ii];
        }
        }
        htmlString += '.</p>';
    }
    container.insertAdjacentHTML('afterbegin', htmlString);
}

// BTN_SEND_ALL crea e aggiunge html alla pagina
function renderHTML(data, container) {
    var htmlString = "";
    // console.log(data);
    for (i = 0; i < data.length; i++) {
        htmlString += "<div class ='api_single'>" + "Id : " + data[i].id + "<br>Il titolo è :" + data[i].title + ".</div>";
    }
    // console.log(container);
    container.insertAdjacentHTML('afterend', htmlString);
    btn_send_all.classList.add("blue");

}

// // animazione delle cells
// function miniPage(activeTab) {
//     var active_var = document.getElementById(activeTab);
//     var i, arg;
//     if (active_var.style.width = "50%") {
//         console.log(active_var.style.width);
//     } else if (active_var.style.width = "10%"){
//         console.log("works !");
//     } else {
//         console.log("coglione");
//     }
//     arg = document.getElementsByClassName('col-1-6');
//     for (i = 0; i < arg.length; i++) {
//         arg[i].style.width = "10%";        
//         // console.log(active_var);
//     }
//     active_var.style.width = "50%";
    
// }




