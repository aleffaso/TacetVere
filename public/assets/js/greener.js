//TODO não permitir mais de um input para o mesmo checkbox
document.querySelector("#eventOrganizer").onchange = () => {
  var checked = document.querySelector("#eventOrganizer").checked;
  if (checked == true) {
    document.querySelector("#eventExposer").disabled = true;

    document.querySelector("#nextZeroOrganizer").disabled = false;
    document.querySelector("#nextZeroOrganizer").style.display = "block";
    document.querySelector("#nextZeroOrganizer").className = "btn-next";
  } else {
    document.querySelector("#eventExposer").disabled = false;
    document.querySelector("#nextZeroOrganizer").disabled = true;
    document.querySelector("#nextZeroOrganizer").style.display = "none";
  }
};

document.querySelector("#eventExposer").onchange = () => {
  var checked = document.querySelector("#eventExposer").checked;
  if (checked == true) {
    document.querySelector("#eventOrganizer").disabled = true;

    document.querySelector("#previousPageFiveOne").style.display = "none";
    document.querySelector("#previousPageFiveOneExposed").style.display =
      "block";

    document.querySelector("#slideExpositor").style.display = "block";
    document.querySelector("#nextFiveOne").style.display = "none";

    document.querySelector("#nextFiveThreePrevious").style.display = "none";
    document.querySelector("#slideExpositorPrevious").style.display = "block";

    document.querySelector("#ExtinguishFire").style.visibility = "hidden";
    document.querySelector("#NetEnergy").style.visibility = "hidden";

    document.querySelector("#eventNameExposer").style.display = "block";

    document.querySelector("#eventNameExposer").onchange = () => {
      var eventNameExposer = document.querySelector("#eventNameExposer").value;
      if (eventNameExposer.length > 0) {
        document.querySelector("#nextZeroExposer").disabled = false;
        document.querySelector("#nextZeroExposer").style.display = "block";
        document.querySelector("#nextZeroExposer").className = "btn-next";
      } else {
        document.querySelector("#nextZeroExposer").disabled = true;
        document.querySelector("#nextZeroExposer").style.display = "none";
      }
    };
  } else {
    document.querySelector("#eventOrganizer").disabled = false;
    document.querySelector("#nextZeroExposer").disabled = true;
    document.querySelector("#nextZeroExposer").style.display = "none";

    document.querySelector("#eventNameExposer").style.display = "none";

    document.querySelector("#previousPageFiveOne").style.display = "block";
    document.querySelector("#previousPageFiveOneExposed").style.display =
      "none";

    document.querySelector("#slideExpositor").style.display = "none";
    document.querySelector("#nextFiveOne").style.display = "block";

    document.querySelector("#nextFiveThreePrevious").style.display = "block";
    document.querySelector("#slideExpositorPrevious").style.display = "none";

    document.querySelector("#ExtinguishFire").style.visibility = "visible";
    document.querySelector("#NetEnergy").style.visibility = "visible";
  }
};

document.querySelector("#event").onchange = () => {
  var checked = document.querySelector("#event").checked;
  if (checked !== true) {
    document.querySelector("#custom").disabled = false;
    document.querySelector("#nextZero").style.display = "none";
    document.querySelector("#nextZero").disabled = true;
    document.querySelector("#nextZero").className = "btn-next-allow";
  } else if (checked !== false) {
    document.querySelector("#custom").disabled = true;
    document.querySelector("#nextZero").style.display = "block";
    document.querySelector("#nextZero").disabled = false;
    document.querySelector("#nextZero").className = "btn-next";

    Swal.fire({
      title: "Antes de iniciarmos",
      html:
        "<div>Você vai precisar ter as seguintes <br>informações em mãos:</div><br>" +
        '<div class="body-text-div">' +
        "- Data e local do evento <br>" +
        "- Tempo de duração por dia <br>" +
        "- Área total do evento <br>" +
        "- Área sob responsabilidade da sua organização <br>" +
        "- A quantidade de combustível usado em veículos de propriedade da organização para a organização e execução do evento <br>" +
        "- A quantidade a quantidade de gás, de botijão ou encanado, para fornos e fogões <br>" +
        "- A quantidade de diesel usado em gerador durante o evento <br>" +
        "- Número de extintores de incêndio <br>" +
        "- Número de geladeiras, refrigeradores e congeladores <br>" +
        "- Conta de energia elétrica <br>" +
        "</div>",
      icon: "warning",
      confirmButtonColor: "#2FAC66",
      confirmButtonText: "Estou pronto para começar!",
      customClass: "btn-next-allow",
      showCancelButton: true,
      cancelButtonText: "Voltar",
      cancelButtonColor: "#BABABA",
    });
  }
};

document.querySelector("#custom").onchange = () => {
  if (document.querySelector("#custom").checked == true) {
    document.querySelector("#event").disabled = true;
    document.querySelector("#nextSeven").style.display = "block";
  } else {
    document.querySelector("#event").disabled = false;
    document.querySelector("#nextSeven").style.display = "none";
  }
};

document.querySelector("#greenerCalculator").onchange = () => {
  var email = document.querySelector("#email").value;
  var name = document.querySelector("#name").value;
  var position = document.querySelector("#position").value;
  var goal = document.querySelector("#goal").value;
  var otherGoal = document.querySelector("#otherGoal").value;

  var checkEmail = document.getElementById("email").validity.valid;

  if (goal == "other") {
    document.querySelector("#otherGoal").style.display = "block";

    if (
      (email.length && name.length && position.length && otherGoal.length) >
        0 &&
      checkEmail
    ) {
      document.querySelector("#nextOne").disabled = false;
      document.querySelector("#nextOne").className = "btn-next";
    } else {
      document.querySelector("#nextOne").disabled = true;
      document.querySelector("#nextOne").className = "btn-next-allow";
    }
  } else {
    if (
      (email.length && name.length && position.length && goal.length) > 0 &&
      checkEmail
    ) {
      document.querySelector("#nextOne").disabled = false;
      document.querySelector("#nextOne").className = "btn-next";
    } else {
      document.querySelector("#nextOne").disabled = true;
      document.querySelector("#nextOne").className = "btn-next-allow";
    }

    document.querySelector("#otherGoal").style.display = "none";
  }
};

document.querySelector("#greenerCalculatorTwo").onchange = () => {
  var eventName = document.querySelector("#eventName").value;
  var uf = document.querySelector("#uf").value;
  var firstDay = document.querySelector("#firstDay").value;
  var lastDay = document.querySelector("#lastDay").value;

  if (
    (eventName.length && uf.length && firstDay.length && lastDay.length) > 0
  ) {
    document.querySelector("#nextTwo").disabled = false;
    document.querySelector("#nextTwo").className = "btn-next";
  } else {
    document.querySelector("#nextTwo").disabled = true;
    document.querySelector("#nextTwo").className = "btn-next-allow";
  }
};

document.querySelector("#greenerCalculatorThree").onchange = () => {
  var hoursPerDay = document.querySelector("#hoursPerDay").value;
  var predictedArea = document.querySelector("#predictedArea").value;
  var predictedResponsibleArea = document.querySelector(
    "#predictedResponsibleArea"
  ).value;

  if (
    hoursPerDay.length &&
    predictedArea.length &&
    predictedResponsibleArea.length > 0
  ) {
    document.querySelector("#nextThree").disabled = false;
    document.querySelector("#nextThree").className = "btn-next";
  } else {
    document.querySelector("#nextThree").disabled = true;
    document.querySelector("#nextThree").className = "btn-next-allow";
  }
};

document.querySelector("#greenerCalculatorFour").onchange = () => {
  var category = document.querySelector("#category").value;
  var otherCategory = document.querySelector("#otherCategory").value;
  var otherCategoryLabel = document.querySelector("#otherCategoryLabel").value;

  if (category == "other") {
    document.querySelector("#otherCategory").style.display = "block";
    document.querySelector("#otherCategoryLabel").style.display = "block";
    document.querySelector("#convention").style.display = "none";
    document.querySelector("#show-outdoor").style.display = "none";
    document.querySelector("#nextFour").style.display = "none";
    if (otherCategory.length > 0) {
      document.querySelector("#nextFourOther").style.display = "block";
      document.querySelector("#nextFourOther").disabled = false;
      document.querySelector("#nextFourOther").className = "btn-next";
    } else {
      document.querySelector("#nextFourOther").style.display = "none";
      document.querySelector("#nextFourOther").disabled = true;
      document.querySelector("#nextFourOther").className = "btn-next-allow";
    }
  } else if (category == "convention") {
    document.querySelector("#otherCategory").style.display = "none";
    document.querySelector("#otherCategoryLabel").style.display = "none";
    document.querySelector("#nextFourOther").style.display = "none";
    document.querySelector("#convention").style.display = "block";
    document.querySelector("#show-outdoor").style.display = "none";
    if (category.length > 0) {
      document.querySelector("#nextFour").style = "block";
      document.querySelector("#nextFour").disabled = false;
      document.querySelector("#nextFour").className = "btn-next";
    } else {
      document.querySelector("#nextFour").style = "none";
      document.querySelector("#nextFour").disabled = true;
      document.querySelector("#nextFour").className = "btn-next-allow";
    }
  } else if (category == "show-outdoor") {
    document.querySelector("#otherCategory").style.display = "none";
    document.querySelector("#otherCategoryLabel").style.display = "none";
    document.querySelector("#nextFourOther").style.display = "none";
    document.querySelector("#convention").style.display = "none";
    document.querySelector("#show-outdoor").style.display = "block";
    if (category.length > 0) {
      document.querySelector("#nextFour").style = "block";
      document.querySelector("#nextFour").disabled = false;
      document.querySelector("#nextFour").className = "btn-next";
    } else {
      document.querySelector("#nextFour").style = "none";
      document.querySelector("#nextFour").disabled = true;
      document.querySelector("#nextFour").className = "btn-next-allow";
    }
  }
};

const pages = document.querySelectorAll(".page");
const faqBody = document.querySelector(".faqBody");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
  direction === "next"
    ? (translate -= translateAmount)
    : (translate += translateAmount);
  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

slideOne = (direction) => {
  if (direction === "next") {
    translate -= translateAmount;
  } else {
    translate += translateAmount;
    document.querySelector("#greener-carbon-management").reset();
    document.querySelector("#nextZeroOrganizer").style.display = "none";
  }

  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

slideTwo = (direction) => {
  direction === "next"
    ? (translate -= translateAmount + 400)
    : (translate += 1200 - translateAmount);
  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

slideThree = (direction) => {
  direction === "next"
    ? (translate -= translateAmount + 1000)
    : (translate += 1200 - translateAmount);
  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

slideZeroStart = (direction) => {
  if (direction === "next") {
    translate -= translateAmount + 400;
  } else {
    translate += 600 - translateAmount;
    document.querySelector("#greener-carbon-management").reset();
    document.querySelector("#nextZeroExposer").style.display = "none";
    document.querySelector("#eventNameExposer").style.display = "none";
  }
  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

slideExpositorFunction = (direction) => {
  direction === "next"
    ? (translate -= translateAmount + 100)
    : (translate += 300 - translateAmount);
  pages.forEach(
    (pages) => (pages.style.transform = `translateX(${translate}%)`)
  );
};

faq = (direction) => {
  if (direction === "faq") {
    faqBody.style.transform = `translateY(${0}%)`;
    document.querySelector("#faqBtn").disabled = true;
  } else if (direction === "back") {
    faqBody.style.transform = `translateY(${-100}%)`;
    document.querySelector("#faqBtn").disabled = false;
  }
};

var firstDay = document.getElementById("firstDay");
firstDay.onfocus = function (event) {
  this.type = "date";
  this.focus();
};

var lastDay = document.getElementById("lastDay");
lastDay.onfocus = function (event) {
  this.type = "date";
  this.focus();
};

document
  .getElementById("submitFormOne")
  .addEventListener("click", function (event) {
    const send = confirm("Você deseja enviar formulário?");
    if (!send) {
      event.preventDefault();
    }
  });

document
  .getElementById("submitFormThree")
  .addEventListener("click", function (event) {
    const send = confirm("Você deseja enviar formulário?");
    if (!send) {
      event.preventDefault();
    }
  });

function renderSuccessMessage(title) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    confirmButtonColor: "#009dff",
    showConfirmButton: true,
    timer: 1500,
  });
}

function renderFailMessage(title) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: title,
  });
}
