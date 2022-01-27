function rndmId() {
var letters = 'ABCDEFGHIJKLMNOP'.split('');
var color = '';
for (var i = 0; i < 150; i++ ) {
color += letters[Math.floor(Math.random() * 16)];
} return color;
}

function ask(ask, closeIn, Answer) {
var alertBoxId = rndmId();
var askId = rndmId();
var timerId = rndmId();
var answerId = rndmId();
if (document.getElementById("AskBox")) {
}else{
document.body.innerHTML = '<div id="AskBox" style="text-align:center;"></div>' + document.body.innerHTML;
}
document.getElementById("AskBox").innerHTML += '<div id="'+alertBoxId+'" style="display: inlineblock;padding:10px;font-family:Arial;font-size:10pt;border:1px solid #808080;text-align:center"><p id="'+askId+'">'+ask+'</p><input id="'+answerId+'" type="text" style="text-align:center;"><p id="'+timerId+'"> </p></div>';
timer(closeIn, timerId);
setTimeout(function(){
var userAns = document.getElementById(answerId).value;
if (userAns == Answer) {
display("Correct", 1);
}else{
display("Wrong", 1);
}
document.getElementById(alertBoxId).remove();
 }, closeIn*1000);
}

function display(display, closeIn, type) {
if (document.getElementById("AskBox")) {
}else{
document.body.innerHTML = '<div id="AskBox" style="text-align:center;"></div>' + document.body.innerHTML;
}
if (type) {
document.getElementById("AskBox").innerHTML += '<div id="alertBox" style="display: inlineblock;padding:10px;font-family:Arial;font-size:10pt;border:1px solid #808080;align:center"><'+type+' id="ask">'+display+'</'+type+'></div>';
 }else{
document.getElementById("AskBox").innerHTML += '<div id="alertBox" style="display: inlineblock;padding:10px;font-family:Arial;font-size:10pt;border:1px solid #808080;align:center"><p id="ask">'+display+'</p></div>';
}
setTimeout(function(){
document.getElementById('alertBox').remove();
}, closeIn*1000);
}

function timer(countFrom, displayTo) {
var count=countFrom;
document.getElementById(displayTo).innerHTML='Time Left: '+count+ "s";
function counter() {
setInterval(countBack, 1000);
}
function countBack() {
count=count-1;
 if (count <= -1){
 document.getElementById(displayTo).innerHTML="";
 return;
} else {
document.getElementById(displayTo).innerHTML='Time Left: '+count+ "s";
 }
}
counter();
}
