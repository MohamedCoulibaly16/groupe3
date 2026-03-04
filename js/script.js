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

function downloadPDF(element) {
    let documentName = element.dataset.documentname;
    const link = document.createElement("a")
    link.href = "../cv/PDF/" + documentName
    link.download = "CV-Ayouba-MORBA.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.style.top = "30px"

    setTimeout(() => {
        toast.style.top = "-80px"
    }, 3500)
}

