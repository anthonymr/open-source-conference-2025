function goTo(id) {
    var element = document.getElementById(id);
    window.scroll({
        top: element.offsetTop - 43,
        behavior: 'smooth'
    });
}