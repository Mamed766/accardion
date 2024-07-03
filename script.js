const accs = document.querySelectorAll(".acc");
const acStarts = document.querySelectorAll(".acc__start");

acStarts.forEach((acStart) => {
  acStart.addEventListener("click", (e) => {
    e.stopPropagation();
    const acc = acStart.parentElement;
    acc.classList.toggle("active");
  });
});
