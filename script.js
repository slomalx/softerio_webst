document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.header__menu li');
    
    // Устанавливаем первый пункт активным по умолчанию
    menuItems[0].classList.add('active');
    
    // Обработчик наведения
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Убираем активный класс только если он есть у другого элемента
            const activeItem = document.querySelector('.header__menu li.active');
            if (activeItem && activeItem !== this) {
                activeItem.classList.remove('active');
            }
        });
    });
});