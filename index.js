var rect = require('./rectangle');

function solveRect(l,b){
  console.log("Solving for rectangle with l = "+l+" b = "+b);

if(l<=0 || b<=0){
  console.log("Rectangle dimensions should be greater than 0.");
}
else{
  console.log("Area : "+rect.area(l,b));
  console.log("perimeter : "+rect.perimeter(l,b));
}
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,6);
