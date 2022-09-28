const content = document.querySelectorAll(".content--item");
const markAllRead = document.querySelector(".notification--action");
let notificationNum = document.querySelector(".notification--number");

markAllRead.addEventListener("click", function () {
  content.forEach((el) => el.classList.remove("active"));
  notificationNum.textContent = 0;
});

content.forEach((el) =>
  el.addEventListener("click", function () {
    if (notificationNum.textContent === "0") return;
    el.classList.remove("active");
    notificationNum.textContent = +notificationNum.textContent - 1;
  })
);
