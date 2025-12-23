document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.header__menu li');
    
    menuItems[0].classList.add('active');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const activeItem = document.querySelector('.header__menu li.active');
            if (activeItem && activeItem !== this) {
                activeItem.classList.remove('active');
            }
        });
    });
});


function toggleMenu() {
  document.querySelector('.header__nav').classList.toggle('active');
}

