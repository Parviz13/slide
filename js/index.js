let btns = document.querySelectorAll('button[data-modal]')
let modal = document.querySelector('.modal')
let clsbtns = document.querySelectorAll('[data-close]')
let ordbtn = document.querySelector ('button[data-order]')
let ordinps = document.querySelectorAll('.order__input')
let allInps = document.querySelectorAll('input')

let form = document.forms.order





let pattern = {
  name: /^[a-z ,.'-]+$/i,
  phone: /^998[012345789][0-9]{8}$/g,

}




function validate(regex, field) {
  if(regex.test(field.value)) {
      field.parentElement.classList.remove('invalid')
      field.parentElement.classList.add('valid')
  } else {
      field.parentElement.classList.remove('valid')
      field.parentElement.classList.add('invalid')
  }
}

allInps.forEach(inp => {
  inp.onkeyup = () => {

      validate(pattern[inp.name], inp)
  }
})


ordbtn.onclick = () => {
  ordbtn.style.backgroundColor = "blue"
  }
  


form.onsubmit = (event) => {
  event.preventDefault()
  let countErrs = 0

  ordinps.forEach(inp => {
      if(inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
          inp.parentElement.classList.add('invalid')
          countErrs++
      } else {
          inp.parentElement.classList.remove('invalid')
      }
  });


  if(countErrs > 0) {
      console.log('Error')
  } else {
    console.log('Succesfully registered')
  }
}


function submit(formElement) {
  let user = {}

  let fm = new FormData(formElement)

  fm.forEach((value, key) => {
      user[key] = value
  })

  console.log(user);
}






btns.forEach(btn => {
  btn.onclick = () => {
    modal.classList.remove('hide') 
   modal.classList.add('show', 'fade') 
  }
})

clsbtns.forEach(btn => {
  btn.onclick = () => {
    modal.classList.add('hide') 
   modal.classList.remove('show', 'fade') 
  }
})


