var body = document.querySelector('body');


if (document.querySelector('.btn-mobile-menu') != null) {
    var btnMobileMenu = document.querySelector('.btn-mobile-menu');
    var sidebarMenu = document.getElementById('sidebar-menu');
    var menuOverlay = document.querySelector('.overlay-back');
    var btnCloseSidebar = document.querySelector('.btn-close-menu');
    btnMobileMenu.onclick = () => {
        menuOverlay.classList.add('active');
        sidebarMenu.classList.add('active');
        body.classList.add('fixedposition');
    }
    menuOverlay.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
        body.classList.remove('fixedposition');
    }
    btnCloseSidebar.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
        body.classList.remove('fixedposition');
    }
    window.addEventListener('resize', function (event) {
        var newWidth = window.innerWidth;
        if (newWidth >= 768) {
            body.classList.remove('fixedposition');
        } else {
            return null
        }
    });
}