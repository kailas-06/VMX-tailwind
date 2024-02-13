const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

const m_btn = document.querySelector(".closebtn");
const m_menu = document.querySelector(".mobile-menu");
m_btn.addEventListener("click", () => {
    m_menu.classList.toggle("show")
});


$(document).on('click', '.navmenu a', function(){
    $('.navmenu a').removeClass('active');
    $(this).addClass('active');
})


$(document).ready(function(){ 
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).addClass('active-a');
     });
});