var canv = document.getElementById('slate');
var ctx = canv.getContext("2d");
ctx.fillStyle = 'red';


var stop = document.getElementById("stop");

var clear = document.getElementById("clear");

var circ = document.getElementById("circ");



var clear_canv = function(e){
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);

};

clear.addEventListener("click",clear_canv);

//Get bigger or smaller
var big = true;


var x = 0;

var draw_circ = function(e){
	clear_canv();
	var draw = function(){
	    ctx.beginPath();
	    ctx.arc(250,250,x,0,2*Math.PI);
	    ctx.fill();
	    ctx.stroke();

	    if (big){
	    	x++;
	    }
	    else{
	    	x--;
	    }

	    if (x==0){
	    	big = true;
	    }
    	if (x==250){
    		big = false;
    	}
    	requestID = window.requestAnimationFrame(draw_circ);	    
	};
	draw();

    console.log(requestID);
};


canv.addEventListener('click',draw_circ)


var stopit = function(){
    window.cancelAnimationFrame(requestID)
};

stop.addEventListener('click',stopit)



