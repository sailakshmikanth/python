const readMoreBtn = document.getElementById('read-more-btn');
const hiddenInfo = document.querySelector('.hidden-info');

readMoreBtn.addEventListener('click', function() {
    if (hiddenInfo.style.display === 'none') {
        hiddenInfo.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        hiddenInfo.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});
