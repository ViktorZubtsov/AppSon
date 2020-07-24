(function () {
    let menuIcon =  document.querySelector('.menu-icon'),
    nav = document.querySelector('.navigation'),
    navMenuMobile = document.querySelector('.nav-menu_mobile'),
    body = document.querySelector('.body');
   

    return menuIcon.onclick = function(){
        menuIcon.classList.toggle('menu-icon_active');
        nav.classList.toggle('navigation_active');
        navMenuMobile.classList.toggle('nav-menu_mobile_active');
        body.classList.toggle("hidden");
 
    };
    

})();


