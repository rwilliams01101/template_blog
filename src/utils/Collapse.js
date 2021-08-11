function Collapse() {
    document.getElementById('hamburger-toggle').setAttribute('class', 'navbar-toggler collapsed')
    document.getElementById('hamburger-toggle').setAttribute('aria-expanded', 'false')
    document.getElementById('navbarText').setAttribute('class', 'navbar-collapse collapse')
}

export default Collapse
