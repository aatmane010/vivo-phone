const toolTips = document.querySelectorAll('.tt');

toolTips.forEach(tt => {
    new bootstrap.Tooltip(tt);
});