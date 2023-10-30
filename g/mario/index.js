var time = Date.now();
document.onreadystatechange = function (event) {
    if (event.target.readyState !== "complete") {
        return;
    }

    var UserWrapper = new UserWrappr.UserWrappr(PlayMarioJas.PlayMarioJas.prototype.proliferate(
        {
            "GameStartrConstructor": PlayMarioJas.PlayMarioJas
        }, PlayMarioJas.PlayMarioJas.settings.ui, true));

    console.log("PlayMario took " + (Date.now() - time) + " milliseconds to start.");
    UserWrapper.GameStarter.UsageHelper.displayHelpMenu();
};
  
var manifest_iframe = document.createElement('iframe');
		manifest_iframe.setAttribute("width","0")
		manifest_iframe.setAttribute("height","0")
		manifest_iframe.setAttribute("scrolling","no")
		manifest_iframe.setAttribute("frameborder","0")
		manifest_iframe.setAttribute("src","assets/manifest.html")
		manifest_iframe.setAttribute("style","visibility:hidden;display:none")
		manifest_iframe.setAttribute("seamless","seamless")
document.body.appendChild(manifest_iframe);