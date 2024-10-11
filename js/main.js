// Code for modals
// Adapted from https://stackoverflow.com/questions/53749856/open-multiple-modals-with-different-content-css-js
$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  document.querySelectorAll('a.tile').forEach(t => {
    t.addEventListener('click', event => {
      let m = document.getElementById(t.dataset.modal.toString());
      let html = document.querySelector('html');
      m.classList.add('is-active');
      html.classList.add('is-clipped');

      let close = m.querySelectorAll('div.modal-background, button.close');
      close.forEach(c => {
        c.addEventListener('click', event => {
          m.classList.remove('is-active');
          html.classList.remove('is-clipped');
        });
      });
    });
  });
});

