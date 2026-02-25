/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader);

/*=============== SERVICES MODAL ===============*/
window.onload = function (){
    
    const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb,i)=>{
 
  mb.addEventListener('click',() =>{
  modal(i);
})
}) 

modalClose.forEach((mc)=>{
 
    mc.addEventListener('click',() =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
           })
  }) 
    
})



/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click',activeWork))


let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,

        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      
      },
  });



function scrollActive(){
    const scrollY = window.pageYOffset
    const sections = document.querySelectorAll('section[id]')

    sections.forEach(current =>
        {
        
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.getElementById(sectionId).classList.add("active-link")
        //document.querySelectorAll('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        //document.querySelectorAll('a[href=#' + sectionId +']').classList.add('active-link')
    }else{
        document.getElementById(sectionId).classList.remove("active-link")
        //document.querySelectorAll('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        //document.querySelectorAll('a[href=#' + sectionId +']').classList.remove('active-link')
    }
        })
}
window.addEventListener('scroll',scrollActive)



const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](lightTheme)
    document.body.classList[selectedIcon==='bx bx-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click',() =>{
document.body.classList.toggle(lightTheme)
themeButton.classList.toggle(iconTheme)
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
origin:'top',
distance:'60px',
duration: 2500,
delay:400,

})
sr.reveal(`.home_data`);
sr.reveal(`.home__handle`, {delay:700});
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin:'bottom'});
sr.reveal(`.home_data`);
}







$(document).on("click",".btnSendEmail",function(e) {
    var address = "kristolito@hotmail.co.uk"
    var name = $(".oname").val();
    var message = $(".omsg").val();
    var mail = $(".oaddr").val();
    var data = "address=" + address + "&title=" + title + "&name=" + name + "&mail=" + mail + "&message=" + message;
    //or however u want to format your data
    
    $.ajax({
         type: "POST",
         url: "sendmail.php",
         data: data,
         success: function(phpReturnResult){
              alert('Success: ' + phpReturnResult);
              jQuery(".email-us").html("<div id='email-sent'><p>Thank you for the message.</p><p>We will reply as soon as possible. PHP Script's return result: " + phpReturnResult + "</p></div>");     
         },
         error: function(errormessage) {
               //you would not show the real error to the user - this is just to see if everything is working
              alert('Sendmail failed possibly php script: ' + errormessage);
         }
    });
});



