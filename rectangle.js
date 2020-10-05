module.exports = (x,y,callback) => {

  if(x<=0 || y<=0){
    console.log("in if: "+x);
    console.log("in if: "+y);

    setTimeout(() =>
    callback(new Error("Rectangle dimensions should be greater than 0."+x),
    null),
    2000);
  }else{

    console.log("in else: "+x);
    console.log("in else: "+y);
    setTimeout(()=>
    callback(null,
      {
         perimeter:() => (2*(x+y)),
         area:() => (x*y)

         // console.log("in else: "+x);
         // console.log("in else: "+y);
     }),
     2000);
  }
  }
