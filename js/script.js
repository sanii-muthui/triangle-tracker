function result(){
    var sideA=parseInt(document.getElementById('sideA').value);
    var sideB=parseInt(document.getElementById('sideB').value);
    var sideC=parseInt(document.getElementById('sideC').value);
    var sides=[sideA,sideB,sideC];
    if (sideA==sideB && sideB==sideC){
    output.innerHTML=("Triangle is equilateral")
    }
    else if(sideA==sideB || sideA==sideC || sideB==sideC){
    output.innerHTML=("Triangle is isosceles")
    }else if(sideA <= (sideB + sideC) || sideB <= (sideC + sideA) || sideC <= (sideA + sideB)){
    output.innerHTML=("Not A Triangle")
    }else{
    output.innerHTML=("Triangle is Scalene")
    }
    }
    /*function reset(){
      var sideA=parseInt(document.getElementById('sideC').value);
      var sideB=parseInt(document.getElementById('sideC').value);
      var sideC=parseInt(document.getElementById('sideC').value);
      var answer=document.getElementById('answer');
    }*/