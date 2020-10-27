function getValue(t,dir){

  if( dir > 0){
   return 0.5*t; /* Y = mx + c  */
  }else{
   return 1-(0.5*t);
  }
  /*
    Here the slope of line m = 0.5.
    t is the time interval.
  */
}


function animator(animasikan){
      if(!(this instanceof animator)) return new animator(animasikan); /* Ignore this */
  var Node = document.getElementById(animasikan),
      start = new Date.getTime(), // The initiation.
      now = 0,
      dir = 1,
      visible = true;
  function step( ){
    now = new Date.getTime();
    var val = getValue( now - start,dir)
    Node.style.opacity = val;
    if( dir > 0 && val > 1 || dir < 0 && val < 0 ){
      visible = !(visible*1);
      // Optionally here u can call the block & none
      if( dir < 0 ) { /* Hiding  and hidden*/
        Node.style.display = 'none'; // So if were repositioning using position:relative; it will         support after hide
      }
      /* Our animation is finished lets end the continous calls */
      return;
    }
    setTimeout(step,100); // Each step is executated in 100seconds
  }
  this.animate = function(){
    Node.style.display = 'block';
    dir *= -1;
    start = new Date.getTime();
    setTimeout(step,100);
  }
}
var magician = new animator('animasikan');
magician.animate();
