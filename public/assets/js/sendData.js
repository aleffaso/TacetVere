const faqBody = document.querySelector(".faqBody")
const translateAmount = 100; 
let translate = 0;

faq = (direction) => {
    direction === "faq" ? translate -= -100: translate += -100;
    faqBody.style.transform = `translateX(${translate}%)`
  }

function renderSuccessMessage(title){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: title,
      confirmButtonColor: '#009dff',
      showConfirmButton: true,
      timer: 1500
    })
  }
  
  function renderFailMessage(title){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: title,
    })
  }