function result(){
    var sideA=parseInt(document.getElementById('sideA').value);
    var sideB=parseInt(document.getElementById('sideB').value);
    var sideC=parseInt(document.getElementById('sideC').value);
    var sides=[sideA,sideB,sideC];
    if (sideA==sideB && sideB==sideC){
    display.innerHTML=("Triangle is equilateral")
    }
    else if(sideA==sideB || sideA==sideC || sideB==sideC){
    display.innerHTML=("Triangle is isosceles")
    }else if(sideA >= (sideB + sideC) || sideB >= (sideC + sideA) || sideC >= (sideA + sideB)){
    display.innerHTML=("Triangle is scalene")
    }else{
    display.innerHTML=("Not  TRIANGLE")
    }
    }
    function reset(){
      location.reload();
    }