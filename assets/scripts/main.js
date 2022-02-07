//      MAIN JS      //

$(document).ready(function () {
	let owl = $(".owl-carousel").owlCarousel({
		autoplay: false,
		dots: true,
		dotsData: true,
		loop: true,
		nav: false,
		items: 1
	});


	$('.owl-dot').click(function () {
		owl.trigger('to.owl.carousel', [$(this).index(), 1000])
	})
});

//  slides
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    dots[index].classList.add("active");

  

}


//about me





// //------------- SIDEBAR MENU START --------------//


// function openNav() {
// 	document.querySelector(".nav-list").classList.add("nav-active");


//  }


//  function closeNav() {
// 	document.querySelector(".nav-list").classList.remove("nav-active");
	
//  }



// //----------- SIDEBAR MENU END -------//
//------------- SIDEBAR MENU START --------------//


 function openNav() {
	document.querySelector(".navbar-list").classList.add("nav-active");


 }


 function closeNav() {
	document.querySelector(".navbar-list").classList.remove("nav-active");
	
 }



//----------- SIDEBAR MENU END -------//

