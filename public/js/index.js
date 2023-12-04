var modalsBtns = document.querySelectorAll(".program-items-grid__item-btn");
modalsBtns.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var activeModal = item.nextElementSibling;
    activeModal.style.display = "block";
    var closeBtn = activeModal.querySelector(".close");
    closeBtn.addEventListener("click", function (event) {
      activeModal.style.display = "none";
    });
  });
});

var extraBtns = document.querySelectorAll('.title');
extraBtns.forEach(function(item) {
  item.addEventListener('click', function(event){
    var activeExtra = item.nextElementSibling.nextElementSibling;
    console.log(typeof activeExtra.style.display);
    if(activeExtra.style.display == "block"){
      activeExtra.style.display = "none";
    } else {
      activeExtra.style.display = "block";
    }
  })
});