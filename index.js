let expandSidebarBtn = document.getElementsByClassName('hamburger-btn')[0];
let shrinkSidebarBtn = document.getElementsByClassName('close-hamburger-btn')[0];
let mobileSidebar = document.getElementsByClassName('mobile-sidebar')[0];
let mobileSidebarLinks = document.querySelectorAll('.mobile-sidebar a');
let darkDiv = document.getElementsByClassName('dark-div')[0];

expandSidebarBtn.addEventListener('click', () =>{
   mobileSidebar.classList.add('active-mobile-sidebar')
   darkDiv.classList.add('activeDark')
   document.documentElement.style.overflow = "hidden";
})
shrinkSidebarBtn.addEventListener('click', () =>{
    mobileSidebar.classList.toggle('active-mobile-sidebar')
    darkDiv.classList.remove('activeDark')
    document.documentElement.style.overflowY = "visible";
})

for(let i = 0; i < mobileSidebarLinks.length; i++){
    mobileSidebarLinks[i].addEventListener('click', ()=>{
        mobileSidebar.classList.remove('active-mobile-sidebar')
        darkDiv.classList.remove('activeDark');
        document.documentElement.style.overflowY = 'scroll'
    })
}