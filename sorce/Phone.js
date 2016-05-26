/**
 * Created by macmini on 14.05.16.
 */
//var cors = require('cors')
//
//var app = express()
//app.use(cors())


var base = 60;
var clocktimer,dateObj,dm,ds,ms;
var readout='';
var  m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0;
//функция для очистки поля
function clearСlock() {
    clearTimeout(clocktimer);
    m=1;tm=1;s=0;ts=0;ms=0;
    init=0;show=true;
    readout='00:00.00';
    document.TestForm.stopwatch.value=readout;
    ii = 0;
}
//функция для старта секундомера
function startTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
    if (t>999) { s++; }
    if (s>=(m*base)) {
        ts=0;
        m++;
    } else {
        ts=parseInt((ms/100)+s);
        if(ts>=base) { ts=ts-((m-1)*base); }
    }

    ms = Math.round(t/10);
    if (ms>99) {ms=0;}
    if (ms==0) {ms='00';}
    if (ms>0&&ms<=9) { ms = '0'+ms; }
    if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
    dm=tm-1;
    if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }

    readout =  dm + ':' + ds + '.' + ms;
    if (show==true) { document.TestForm.stopwatch.value = readout; }
    clocktimer = setTimeout("startTIME()",1);
}
//функция для паузы
function pause() {
    if (init==0) { dateObj = new Date();
        startTIME();
        init=1;
    } else { if(show==true) {
        show=false;
    } else { show=true; } }
}

function result() {
    document.getElementById("saveResult").innerHTML+= readout;

}

var a = 3;
function REQ(){
    var obj = {};
    obj.name = document.getElementById("name").value;
    obj.sex = document.getElementById("sex").value;
    obj.age = document.getElementById("age").value;
    obj.place = document.getElementById("plase").value;
    var xhr = new XMLHttpRequest();
    var ajax = true;
    var mess = JSON.stringify(obj);
    var time = time;
    xhr.open('GET', 'http://127.0.0.1:8081/awd?ajax='+ajax+"&mess="+mess+"&time="+time, true);
    xhr.send();


    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200 && xhr.response) {
            console.log(xhr.status);
            console.log(xhr.response );



			var bb = xhr.response;
            bb = JSON.parse(bb);
            var i = 0;
            for(var i in bb){
                console.log( "key: " + i + ", value: " + bb[i] );
            }
 



		}
    }
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table1");
    table.deleteRow(index);
}

function support(text) {
    var serverObj = JSON.parse(text);
    var table = document.getElementById("table1");
    var rowCount = table1.rows.length;
    var row = table1.insertRow(rowCount);


    row.insertCell(0).innerHTML= '<input type="button" class="delbutton" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= serverObj.name;
    row.insertCell(2).innerHTML= serverObj.age;
    row.insertCell(3).innerHTML= serverObj.sex;
    row.insertCell(4).innerHTML= serverObj.place;
}






