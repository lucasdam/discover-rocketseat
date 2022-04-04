function switcher() {
    if (document.body.classList.contains('bg-dark')) {
        document.body.classList.remove('bg-dark')
        document.querySelector('.ball').style.transform = "translateX(0px)"
    } else {
        document.body.classList.add('bg-dark')
        document.querySelector('.ball').style.transform = "translateX(132.5px)"
    }
}