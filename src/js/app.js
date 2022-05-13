const sliderBtns = document.querySelectorAll('.slider-button')
const slider = document.querySelector('.testimonial-slider')

sliderBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const value = e.target.dataset.value
    slider.setAttribute('id', value)

    for (let i = 0; i < sliderBtns.length; i++) {
      if (sliderBtns[i].dataset.value !== value) {
        sliderBtns[i].classList.remove('selected-slider')
      } else {
        sliderBtns[i].classList.add('selected-slider')
      }
    }
  })
})


const mobileBtn = document.querySelector('.nav-right')
const high = document.querySelector(".top");
const mid = document.querySelector(".mid");
const bot = document.querySelector(".bot");
const backdrop = document.querySelector('.mobile-backdrop')
const menu = document.querySelector('.mobile-menu')

// Open menu and backdrop
mobileBtn.addEventListener('click', e => {
  high.classList.toggle("top-animation");
  mid.classList.toggle("mid-animation");
  bot.classList.toggle("bot-animation");

  backdrop.classList.toggle('mobile-backdrop-animation')
  menu.classList.toggle('mobile-menu-animation')

})

// Close mobile menu if backdrop is clicked
backdrop.addEventListener('click', e => {
  high.classList.toggle("top-animation");
  mid.classList.toggle("mid-animation");
  bot.classList.toggle("bot-animation");

  backdrop.classList.toggle('mobile-backdrop-animation')
  menu.classList.toggle('mobile-menu-animation')

})



