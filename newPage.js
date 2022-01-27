function createPage(name, urls) {
document.write( '      <title>'+name+'</title>\n' );
document.write( '    <link rel=\"shortcut icon\"\n' );
document.write( '    type=\"image/jpg\" href=\"'+urls+'.png\"\n' );
document.write( '    />\n' );
document.write( '  </head>\n' );
document.write( '<body>\n' );
document.write( '<script src=\"https://mountain658.github.io/load.js\"><\/script>\n' );
document.write( '  <script src=\"https://mountain658.github.io/display.js\"><\/script>\n' );
document.write( '  <script>\n' );
document.write( '  display(\"BEFORE YOU SPEND A LOT OF TIME ON THIS GAME KNOW IT DOES NOT SAVE\", 5, \"h1\");\n' );
document.write( '  <\/script>\n' );
document.write( '         <a href=\"/\"\n' );
document.write( '       style=\"position:absolute;width;50px;height: 50px;left:20px;top: 50px;\" >Back To Home Page</a>\n' );
document.write( '<iframe title=\"Include gadget (iframe)\" width=\"960\" height=\"640\"scrolling=\"no\" frameborder=\"0\" id=\"518929564\" name=\"518929564\" allowtransparency=\"true\" class=\"igm\" src=\"https://mountain658.github.io/z'+urls+'.html\"></iframe>\n' );
document.write( '\n' );
document.write( '<script src=\"https://mountain658.github.io/fullScreen.js\"><\/script>\n' );
document.write( '<button onclick=\"openFullscreen(\'518929564\')\">Fullscreen Mode</button>\n' );
document.write( '\n' );
document.write( '</body>\n' );
document.write( '\n' );
document.write( '</html>\n' );
}
