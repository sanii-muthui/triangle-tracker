function formValidation(){
    var sideA=parseInt(document.getElementById('sideA').value);
    var sideB=parseInt(document.getElementById('sideB').value);
    var sideC=parseInt(document.getElementById('sideC').value);
    var sides=[sideA,sideB,sideC];
    if (sideA==sideB && sideB==sideC){
    alert("Triangle is equilateral");
    }
    else if(sideA==sideB || sideA==sideC || sideB==sideC){
    alert("Triangle is isosceles");
    }else if(sideA <= (sideB + sideC) || sideB <= (sideC + sideA) || sideC <= (sideA + sideB)){
    alert("not a triangle");
    }else{
    aletr("scalene");
    }
    }
    return(formValidation());
    function reset(){
      var sideA=parseInt(document.getElementById('sideC').value);
      var sideB=parseInt(document.getElementById('sideC').value);
      var sideC=parseInt(document.getElementById('sideC').value);
      var answer=document.getElementById('answer');
    }