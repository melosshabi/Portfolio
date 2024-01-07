window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.introduction-h2').classList.add('visible-elements')
})

const aboutMe = document.querySelector('.about-me')
const projectsSection = document.querySelector('.projects-section')
const projects = document.querySelectorAll('.projects')
const contact = document.querySelector('.contact')

window.addEventListener('scroll', () => {
    const scrollY = window.innerWidth > 430 ? window.scrollY + 200 : window.scrollY + 350
    console.log("ScrollY", scrollY)
    console.log("Contact", contact.offsetTop)
    if(scrollY > aboutMe.offsetTop) aboutMe.classList.add('visible-elements')
    if(scrollY > projectsSection.offsetTop) projectsSection.classList.add('visible-elements')
    if(scrollY > projects[0].offsetTop) projects[0].classList.add('visible-elements')
    if(scrollY > projects[1].offsetTop) projects[1].classList.add('visible-elements')
    if(scrollY > projects[2].offsetTop) projects[2].classList.add('visible-elements')
    if(scrollY > projects[3].offsetTop) projects[3].classList.add('visible-elements')
    if(scrollY > projects[4].offsetTop) projects[4].classList.add('visible-elements')
    if(scrollY > projects[5].offsetTop) projects[5].classList.add('visible-elements')
    if(scrollY > projects[6].offsetTop) projects[6].classList.add('visible-elements')
    if(scrollY > contact.offsetTop) contact.classList.add('visible-contact-section')
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
        sidebarElements.forEach(elem => elem.classList.remove('active-li'))
    }else{
        document.documentElement.style.overflowY = "hidden"
        sidebarElements.forEach(elem => elem.classList.add('active-li'))

    }
}

expandSidebarBtn.addEventListener('click', () => toggleSidebar('show'))
shrinkSidebarBtn.addEventListener('click', () => toggleSidebar('hide'))
darkDiv.addEventListener('click', () => toggleSidebar('hide'))

for(let i = 0; i < mobileSidebarLinks.length; i++){
    mobileSidebarLinks[i].addEventListener('click', ()=>{
        mobileSidebar.classList.remove('active-mobile-sidebar')
        darkDiv.classList.remove('activeDark');
        document.documentElement.style.overflowY = 'scroll'
    })
}