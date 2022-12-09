const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

document.querySelector('#agreement').onfocus = () => {
  var checked = document.querySelector('#agreement').checked;
  if (checked){
    document.querySelector('#agreementButton').disabled = true
    document.querySelector('#agreementButton').className = 'btn-next-allow';
  }else{
    document.querySelector('#agreementButton').disabled = false
    document.querySelector('#agreementButton').className = 'btn-next';
  }
}

document.querySelector('#greenerCalculator').onchange = () =>{
  
  var email = document.querySelector('#email').value
  var name = document.querySelector('#name').value
  var position = document.querySelector('#position').value
  var goal = document.querySelector('#goal').value
  var otherGoal = document.querySelector('#otherGoal').value

  if (goal == "other"){

    document.querySelector("#otherGoal").style.display = "block";

    if ((email.length && name.length && position.length && otherGoal.length) > 0){
      document.querySelector('#nextOne').disabled = false
      document.querySelector('#nextOne').className = 'btn-next';
    }else{
      document.querySelector('#nextOne').disabled = true
      document.querySelector('#nextOne').className = 'btn-next-allow';
    }

  }else{

    if ((email.length && name.length && position.length && goal.length) > 0){
      document.querySelector('#nextOne').disabled = false
      document.querySelector('#nextOne').className = 'btn-next';
    }else{
      document.querySelector('#nextOne').disabled = true
      document.querySelector('#nextOne').className = 'btn-next-allow';
    }

    document.querySelector("#otherGoal").style.display = "none";
  }
}

document.querySelector('#greenerCalculatorTwo').onchange = () => {

  var eventName = document.querySelector('#eventName').value
  var uf = document.querySelector('#uf').value
  var firstDay = document.querySelector('#firstDay').value
  var lastDay = document.querySelector('#lastDay').value

  if((eventName.length && uf.length && firstDay.length && lastDay.length ) > 0){
    document.querySelector('#nextTwo').disabled = false
    document.querySelector('#nextTwo').className = 'btn-next';
  }else{
    document.querySelector('#nextTwo').disabled = true
    document.querySelector('#nextTwo').className = 'btn-next-allow';
  }
}

document.querySelector('#greenerCalculatorThree').onchange = () => {

  var hoursPerDay = document.querySelector('#hoursPerDay').value
  var predictedArea = document.querySelector('#predictedArea').value
  var predictedResponsibleArea = document.querySelector('#predictedResponsibleArea').value

  if((hoursPerDay.length && predictedArea.length && predictedResponsibleArea.length > 0)){
    document.querySelector('#nextThree').disabled = false
    document.querySelector('#nextThree').className = 'btn-next';
  }else{
    document.querySelector('#nextThree').disabled = true
    document.querySelector('#nextThree').className = 'btn-next-allow';
  }
}

document.querySelector('#greenerCalculatorFour').onchange = () => {

  var category = document.querySelector('#category').value
  var otherCategory = document.querySelector('#otherCategory').value

  if (category == "other"){
    document.querySelector("#otherCategory").style.display = "block";
    document.querySelector("#convention").style.display = "none";
    document.querySelector("#show-outdoor").style.display = "none";
    document.querySelector('#nextFour').style.display = "none"
    if((otherCategory.length > 0)){
      document.querySelector('#nextFourOther').style.display = "block";
      document.querySelector('#nextFourOther').disabled = false;
      document.querySelector('#nextFourOther').className = 'btn-next';
    }else{
      document.querySelector('#nextFourOther').style.display = "none";
      document.querySelector('#nextFourOther').disabled = true
      document.querySelector('#nextFourOther').className = 'btn-next-allow';
    }

  }else if(category == "convention"){
    document.querySelector("#otherCategory").style.display = "none";
    document.querySelector('#nextFourOther').style.display = "none";
    document.querySelector("#convention").style.display = "block";
    document.querySelector("#show-outdoor").style.display = "none";
    if((category.length > 0)){
      document.querySelector('#nextFour').style = "block"
      document.querySelector('#nextFour').disabled = false
      document.querySelector('#nextFour').className = 'btn-next';
    }else{
      document.querySelector('#nextFour').style = "none"
      document.querySelector('#nextFour').disabled = true
      document.querySelector('#nextFour').className = 'btn-next-allow';
    }

  }else if(category == "show-outdoor"){
    document.querySelector("#otherCategory").style.display = "none";
    document.querySelector('#nextFourOther').style.display = "none";
    document.querySelector("#convention").style.display = "none";
    document.querySelector("#show-outdoor").style.display = "block";
    if((category.length > 0)){
      document.querySelector('#nextFour').style = "block"
      document.querySelector('#nextFour').disabled = false
      document.querySelector('#nextFour').className = 'btn-next';
    }else{
      document.querySelector('#nextFour').style = "none"
      document.querySelector('#nextFour').disabled = true
      document.querySelector('#nextFour').className = 'btn-next-allow';
    }
  }

}

slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
}

slideTwo = (direction) => {
  direction === "next" ? translate -= translateAmount + 300 : translate += 500 - translateAmount;
    pages.forEach(
      pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

var firstDay = document.getElementById('firstDay')
firstDay.onfocus = function (event) {
    this.type = 'date';
    this.focus();
}

var lastDay = document.getElementById('lastDay')
lastDay.onfocus = function (event) {
    this.type = 'date';
    this.focus();
}