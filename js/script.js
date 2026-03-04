// const message = document.getElementById("message");

// function showMessage() {
//   message.classList.add("show");

//   setTimeout(() => {
//     message.classList.remove("show");
//   }, 3000); // disparaît après 3 secondes
// }
// console.log("hesdfnjdfqdcfdf");

// // Appelle la fonction quand tu veux
// showMessage();

ratio = 0.3;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("anim");
      observer.unobserve(entry.target);
    }
  });
};
const t = new IntersectionObserver(callback, options);
document.querySelectorAll(".anim").forEach((el) => t.observe(el));

ratio1 = 0.2;
const options1 = {
  root: null,
  rootMargin: "15%",
  threshold: ratio,
};
const callback1 = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("anim-card");
      observer.unobserve(entry.target);
    }
  });
};
const t1 = new IntersectionObserver(callback1, options1);
document.querySelectorAll(".anim-card").forEach((el) => t1.observe(el));
