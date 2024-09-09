let tooltip = document.createElement("div");
tooltip.className = "tooltip";             
document.body.prepend(tooltip);

document
    .querySelectorAll('.has-tooltip')
    .forEach(element => element.addEventListener("click", showTip));

document.addEventListener('scroll', () => {
    tooltip.classList.remove('tooltip_active');
});


function showTip(event) {
    event.preventDefault();

    const target = event.currentTarget;
    const tooltipText = target.getAttribute('title');

    if(tooltip.innerText != tooltipText) {
        tooltip.innerText = tooltipText;        

        const { top, left } = target.getBoundingClientRect();
        const targetHeight = target.offsetHeight;

        tooltip.style.top = `${top+targetHeight}px`;
        tooltip.style.left = `${left}px`;

        tooltip.classList.add('tooltip_active');

    } else {
        tooltip.classList.toggle('tooltip_active');
    }         
};