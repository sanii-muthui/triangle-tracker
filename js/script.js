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
    }else if(sideA <= (sideB + sideC) || sideB <= (sideC + sideA) || sideC <= (sideA + sideB)){
    display.innerHTML=("Not A Triangle")
    }else{
    display.innerHTML=("Triangle is Scalene")
    }
    }
    function reset(){
      location.reload();
    }