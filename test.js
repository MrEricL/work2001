var canv = document.getElementById('slate');
var ctx = canv.getContext("2d");
ctx.fillStyle = 'red';



var stop = document.getElementById("stop");

var clear = document.getElementById("clear");

var dvd = document.getElementById("dvd");
var size = document.getElementById("size");


//0 true
//1 false
var mode = true;


//vars
var requestID;
var rad = 30;
var xcor = 250;
var ycor = 250;
var maxRad = (canv.width)*0.5;
var xinc = 3;
var yinc = 3;
var angle = Math.random()*Math.PI*2;



var clear_canv = function(e){
    ctx.beginPath();
    ctx.clearRect(0,0,500,500);

};

clear.addEventListener("click",clear_canv);


var stopit = function(){
    window.cancelAnimationFrame(requestID)

};

stop.addEventListener('click',stopit)


var changeDVD = function(e){
	rad = 30;
	stopit();
	clear_canv();
	window.mode = false;
	console.log(mode);
}

dvd.addEventListener('click',changeDVD)

var changeSize = function(e){
	xcor = 250;
	ycor = 250;
	stopit();
	clear_canv();
	window.mode = true;
	console.log(mode);
}

size.addEventListener('click',changeSize)


//DRAWS THE CIRCLE


var draw_circ = function(e){
	
	stopit();
	var big = true;


	var draw = function(){

		clear_canv();
	    ctx.beginPath();
	    ctx.arc(xcor,ycor,rad,0,2*Math.PI);
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


//DOES THE DVD BOUNCE

var dvdBounce = function (e) {

	stopit();
	var draw = function() {
		clear_canv();

		ctx.beginPath();
		ctx.arc(xcor,ycor,rad,0,2*Math.PI);
		ctx.fill();


		if ((xcor+rad)>=canv.width || (xcor-rad) <=0){
			xinc*=-1;
		}
		if ((ycor+rad)>=canv.height || (ycor-rad)<=0){
			yinc*=-1;
		}

		xcor+=(xinc*(Math.abs(Math.cos(angle))));
		ycor+=(yinc*(Math.abs(Math.sin(angle))));

		requestID = window.requestAnimationFrame(draw);	
		console.log(xcor+" "+ycor)
	}
	draw();
}

//Canvas click action
clickAction = function(e){
	if (mode){
		draw_circ(e);
	}
	else{
		dvdBounce(e);
	}
}

canv.addEventListener('click',clickAction)

