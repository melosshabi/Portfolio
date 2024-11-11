window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.introduction-h2').classList.add('visible-elements')
})

const aboutMe = document.querySelector('.about-me')
const projectsSection = document.querySelector('.projects-section')
const projects = document.querySelectorAll('.projects')
const contact = document.querySelector('.contact')

window.addEventListener('scroll', () => {
    const scrollY = window.innerWidth > 430 ? window.scrollY + 200 : window.scrollY + 350
    if(scrollY > aboutMe.offsetTop) aboutMe.classList.add('visible-elements')
    if(scrollY > projectsSection.offsetTop) projectsSection.classList.add('visible-elements')
    if(scrollY > projects[0].offsetTop) projects[0].classList.add('visible-elements')
    if(scrollY > projects[1].offsetTop) projects[1].classList.add('visible-elements')
    if(scrollY > projects[2].offsetTop) projects[2].classList.add('visible-elements')
    if(scrollY > projects[3].offsetTop) projects[3].classList.add('visible-elements')
    if(scrollY > projects[4].offsetTop) projects[4].classList.add('visible-elements')
    if(scrollY > projects[5].offsetTop) projects[5].classList.add('visible-elements')
    // if(scrollY > projects[6].offsetTop) projects[6].classList.add('visible-elements')
    // if(scrollY > projects[7].offsetTop) projects[7].classList.add('visible-elements')
    if(scrollY > contact.offsetTop) contact.classList.add('visible-contact-section')
    
    if(scrollY < aboutMe.offsetTop) aboutMe.classList.remove('visible-elements')
    if(scrollY < projectsSection.offsetTop) projectsSection.classList.remove('visible-elements')
    if(scrollY < projects[0].offsetTop) projects[0].classList.remove('visible-elements')
    if(scrollY < projects[1].offsetTop) projects[1].classList.remove('visible-elements')
    if(scrollY < projects[2].offsetTop) projects[2].classList.remove('visible-elements')
    if(scrollY < projects[3].offsetTop) projects[3].classList.remove('visible-elements')
    if(scrollY < projects[4].offsetTop) projects[4].classList.remove('visible-elements')
    if(scrollY < projects[5].offsetTop) projects[5].classList.remove('visible-elements')
    // if(scrollY < projects[6].offsetTop) projects[6].classList.remove('visible-elements')
    // if(scrollY < projects[7].offsetTop) projects[7].classList.remove('visible-elements')
    if(scrollY < contact.offsetTop) contact.classList.remove('visible-contact-section')
})    

const expandSidebarBtn = document.querySelector('.hamburger-btn');
const shrinkSidebarBtn = document.querySelector('.close-hamburger-btn');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const mobileSidebarLinks = document.querySelectorAll('.mobile-sidebar a');
const darkDiv = document.querySelector('.dark-div');
// The variable below holds the li elements of the mobile sidebar
const sidebarElements = document.querySelectorAll('.mobile-sidebar li');

function toggleSidebar(action) {
    mobileSidebar.classList.toggle('active-mobile-sidebar')
    darkDiv.classList.toggle('activeDark')

    if(action === "hide"){
        document.documentElement.style.overflowY = "visible"
        sidebarElements.forEach((elem, index) => {
            elem.classList.remove('active-li')
        })
    }else{
        document.documentElement.style.overflowY = "hidden"
        sidebarElements.forEach((elem, index) => {
            if(index > 0){
                setTimeout(() => elem.classList.add('active-li'), parseInt(`${index}00`) + 50)
                return
            }
            elem.classList.add('active-li')
        })
    }
}

expandSidebarBtn.addEventListener('click', () => toggleSidebar('show'))
shrinkSidebarBtn.addEventListener('click', () => toggleSidebar('hide'))
darkDiv.addEventListener('click', () => toggleSidebar('hide'))

mobileSidebarLinks.forEach(link => {
    link.addEventListener('click', () => toggleSidebar('hide'))
})

const melaLogo = document.querySelector('.mela-logo')
melaLogo.addEventListener('click', () => window.scrollTo({
    top:0,
    behavior:'smooth'
}))