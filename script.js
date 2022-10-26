const slider = document.querySelector('.container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX; 
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


var dialog = document.querySelector(".dialog");
var dialogOpen = document.querySelector(".info");
var dialogClose = document.querySelector(".close-dialog");

dialogOpen.addEventListener("click", function() {
  dialog.showModal();
});

dialogClose.addEventListener("click", function() {
  dialog.close();
});


var modalBtns = document.querySelectorAll(".modal-opener");
    modalBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = "block";
      window.addEventListener("scroll", scrollDisable);
    }
  });

  var closeBtns = document.querySelectorAll(".close-button");
  closeBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.closest('.modal');
      modal.style.display = "none";
      window.removeEventListener("scroll", scrollDisable);
    }
  });

  window.onclick = function(event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
      window.removeEventListener("scroll", scrollDisable);
    }
  }

  function scrollDisable() {
    window.scrollTo(0,0);
  }