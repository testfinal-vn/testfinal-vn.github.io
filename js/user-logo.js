var i =0;
function addElem() {
    var x = Math.random();
    if (x < 0.33){var color = 'red'} else if(x < 0.66 && x > 0.33){color = 'blue'} else {color = 'white'}
    i++;
    var div = document.createElement("div");
    document.body.appendChild(div);
    $(div).css({"width":'200px','height': '200px', 'background':"#000", "position": "absolute",
        "font-size":"22px", "line-height":"200px", 'text-align':"center", "z-index": "999",
        "border-radius":"50%", "top" : Math.random()*screen.height, "left": Math.random()*screen.width-210, "color":color});
    $(div).text("Final Test =)");
    if (i < 9999) {setTimeout(addElem, 30);}
}

$('.brand').on('click', function(){
	addElem();
});

