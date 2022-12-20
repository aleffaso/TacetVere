const faqBody = document.querySelector(".faqBody")
const translateAmount = 100; 
let translate = 0;

faq = (direction) => {
  if (direction === "faq"){
    faqBody.style.transform = `translateY(${0}%)`
    document.querySelector('#faqBtn').disabled = true
  }else if(direction ==='back'){
    faqBody.style.transform = `translateY(${-100}%)`
    document.querySelector('#faqBtn').disabled = false
  }
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