const icons = document.querySelectorAll('.smm-icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        icon.querySelector('.default-icon').style.display = 'none';
        icon.querySelector('.hover-icon').style.display = 'inline-block';
    });

    icon.addEventListener('mouseleave', function () {
        icon.querySelector('.default-icon').style.display = 'inline-block';
        icon.querySelector('.hover-icon').style.display = 'none';
    });
});