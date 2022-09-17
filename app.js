const slides = window.document.querySelectorAll(".slide");
const nextBtn = window.document.querySelector(".nextBtn");
const prevBtn = window.document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  getCounterNumber();
  console.log("clicked the next btn");
});
prevBtn.addEventListener("click", function () {
  counter--;
  getCounterNumber();
  console.log("clicked the prev btn");
});
function getCounterNumber() {
  //   if (counter < slides.length - 1) {
  //     nextBtn.style.display = "block";
  //   } else {
  //     nextBtn.style.display = "none";
  //   }
  //   if (counter > 0) {
  //     prevBtn.style.display = "block";
  //   } else {
  //     prevBtn.style.display = "none";
  //   }
  //   slides.forEach(function (slide) {
  //     slide.style.tranform = `translateX(-${counter * 100}%)`;
  //   });
  //   console.log("the function is working");
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
