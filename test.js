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

	var x = 250;
	var y = 250;
	var rad = 0;
	var maxRad = 250;

	var draw = function(){

		clear_canv();
	    ctx.beginPath();
	    ctx.arc(x,y,rad,0,2*Math.PI);
	    ctx.fill();
	    ctx.stroke();

	    if (big){
	    	rad++;
	    	if (rad>=maxRad){
    			big = false;
    		}
	    }
	    else{
	    	rad--;
	    	if (rad==0){
	    		big = true;
	    	}
	    }


    	requestID = window.requestAnimationFrame(draw);	    
	};
	draw();
};


canv.addEventListener('click',draw_circ)


var stopit = function(){
    window.cancelAnimationFrame(requestID)
};

stop.addEventListener('click',stopit)



