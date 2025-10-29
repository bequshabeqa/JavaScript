const viewHide = document.getElementById(`viewHide`);
const content = document.getElementById(`content`);

viewHide.addEventListener(`click`, function() {
    if (content.classList.contains(`hidden`)) {
        content.classList.remove(`hidden`);
        viewHide.textContent = `კონტენტის დამალვა`;
    } else {
        content.classList.add(`hidden`);
        viewHide.textContent = `კონტენტის ჩვენება`;
    }
});