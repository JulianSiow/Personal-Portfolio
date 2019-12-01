$(document).ready(() => {
  $("a").on('click', (e) => {
    if(e.hash !== "") {
      event.preventDefault();
      const hash = e.target.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 40
      }, 800, ()=>{
        window.location.hash = hash;
      });
    }
  });
});