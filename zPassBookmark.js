javascript:(function(){javascript:(function(){javascript:var frame = document.createElement('iframe'); 
frame.id = "Mountain Game";
frame.src="https://rebrand.ly/human456"; frame.style.position="fixed"; frame.style.top="0%"; frame.style.right="0%"; frame.style.height="669px"; frame.style.width="812px"; frame.style.zIndex="100000"; document.body.appendChild(frame); var btn= document.createElement("button"); btn.style.position="fixed"; btn.style.top="10%"; btn.style.right="84%"; btn.zIndex="100000"; btn.innerHTML="Close";btn.onclick = function(){boomFrame();};function boomFrame() {var myframe = document.getElementsByTagName("iframe")[0];myframe.parentNode.removeChild(frame);btn.remove();}document.body.appendChild(btn);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
       alert('Bye!')
       var myframe = document.getElementsByTagName("iframe")[0];myframe.parentNode.removeChild(frame);btn.remove();
    }
};


})();})();
