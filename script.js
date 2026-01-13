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

    const header__right = document.querySelector('.header__right');
    const mobile_content = document.querySelector('.mobile_content');
    const elementsToMove = Array.from(header__right.children);

    function handleResize() {
        if (window.innerWidth <= 600) {
            elementsToMove.forEach(element => {
                if(element.parentNode !== mobile_content) {
                    mobile_content.appendChild(element);
                }
            });
        } else {
            elementsToMove.forEach(element => {
                if(element.parentNode !== header__right) {
                    header__right.appendChild(element);
                }
            })
        }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
});


function toggleMenu() {
  document.querySelector('.header__nav').classList.toggle('active')
    const numbers = document.querySelectorAll('.icon');
  numbers.forEach(num => num.classList.toggle('active'));
}




