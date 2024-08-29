document.addEventListener("click", showTip);
document.addEventListener("mouseout", hideTip);

function showTip(event) {
    let target = event.target;
    let x, y
    x = target.getBoundingClientRect().x
    y = target.getBoundingClientRect().y;
   
    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";             
    x = target.getBoundingClientRect().x - tooltip.offsetHeight + 100
    y = target.getBoundingClientRect().y - tooltip.offsetHeight + 20
    tooltip.style.left = x + 'px'
    tooltip.style.top = y + 'px';
   
    document.body.append(tooltip);
         
    if (Array.from(target.classList).includes('has-tooltip')){
        tooltip.textContent = target.title
        tooltip.classList.add('tooltip_active');
    };
    event.preventDefault()
};

function hideTip() {
    let tooltip = document.querySelectorAll('.tooltip');
    for ( let i of (Array.from(tooltip))){
        if (i != null) { 
           i.classList.remove('tooltip_active');
        };
    };
};