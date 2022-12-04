let toggleBtn = document.getElementsByClassName('toggle-btn')[0];
let links = document.getElementsByClassName('links')[0];
let navbar = document.getElementsByClassName('navbar')[0];


toggleBtn.addEventListener('click', ()=>{
    links.classList.toggle('active');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
    let aboutText = document.querySelector('.about-me-text');
    let aboutTextPosition = aboutText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    let myProjectsText = document.querySelector('.my-projects');
    let myProjectsTextPosition = myProjectsText.getBoundingClientRect().top;
    let getInTouchText = document.querySelector('.get-in-touch');
    let getInTouchTextPosition = getInTouchText.getBoundingClientRect().top;

    if(aboutTextPosition < screenPosition){
        aboutText.classList.add('active');
    }
    else{
        aboutText.classList.remove('active');
    }
    if(myProjectsTextPosition < screenPosition){
        myProjectsText.classList.add('active');
    }
    else{
        myProjectsText.classList.remove('active');
    }
    if(getInTouchTextPosition < screenPosition){
        getInTouchText.classList.add("active");
    }
    else{
        getInTouchText.classList.remove('active');
    }
})