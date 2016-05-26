/**
 * Created by macmini on 14.05.16.
 */
function REQ(time){

    var obj={};
    obj.age = document.getElementById("age").value;
    obj.name = document.getElementById("name").value;

    var xhr = new XMLHttpRequest();
    var ajax=true;
    var mess = JSON.stringify(obj);
    var time = time;

    xhr.open(Get, "http://localhost/photo.html", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText){

            support(xhr.responseText)
        }

    }
};

function support (text){
    var servesObj = JSON.parse(text);
    for (var a in servesObj){
        var domElement = document.createElement("div");
        domElement.body.appendChild(domElement);
        


    }
}

