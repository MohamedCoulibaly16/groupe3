const toast = document.createElement('div');
const toast_message = document.createElement('h3')
toast_message.textContent = "Téléchargement du CV lancé avec succès"
toast.appendChild(toast_message)
toast.id = "toast"
const styles = document.createElement('style')

styles.textContent = `
    #toast {
    top: -80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid var(--secondary-color);
    transition-duration: 400ms;
    position: fixed;
    height: 70px;
    width: 30%;
    color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.74);
    backdrop-filter: blur(10px);
    font-size: 13px;
}
    }`


document.body.appendChild(toast);
document.body.appendChild(styles)

// function downloadPDF() {
//   window.print()

//   toast.style.top = "30px"

//   setTimeout(() => {
//     toast.style.top = "-80px"
//   }, 2000)
// }

pdfModule = document.createElement('script')
pdfModule.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
document.body.appendChild(pdfModule)

// function downloadPDF() {

//   const element = document.getElementById("content");

//   const opt = {
//     margin: 20,
//     filename: "page.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: {
//       scale: 2,
//     },
//     jsPDF: {
//       unit: "mm",
//       format: "a4",
//       orientation: "portrait"
//     }
//   };

//   html2pdf().set(opt).from(element).save();

//   toast.style.top = "30px"

//   setTimeout(() => {
//     toast.style.top = "-80px"
//   }, 2000)
// }

function downloadPDF(element, name) {

  const path = element.dataset.docpath

  const link = document.createElement("a");
  link.href = path;      // chemin du fichier
  link.download = name + '.pdf';  // nom pour le téléchargement
  document.body.appendChild(link);
  link.click();              // simule le clic
  document.body.removeChild(link);

  toast.style.top = "30px"

  setTimeout(() => {
    toast.style.top = "-80px"
  }, 2000)

}



const message = document.getElementById("message");

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
