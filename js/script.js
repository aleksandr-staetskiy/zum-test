

const accordeonOn = document.querySelectorAll('.accordeon__item');

for (let i = 0; i < accordeonOn.length; i++) {
  accordeonOn[i].addEventListener('click', function(){
    this.classList.toggle('open')
  })
}

(function () {
  const toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();