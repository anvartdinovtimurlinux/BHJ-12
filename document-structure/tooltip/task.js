'use strict';


const createTooltip = (text, position) => {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltip tooltip_active';
  tooltip.style.left = position + "px";
  tooltip.innerText = text;

  return tooltip;
}

const linksWithTooltip = document.querySelectorAll('a.has-tooltip');
linksWithTooltip.forEach((link) =>{
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const previousTooltip = document.querySelector('.tooltip');

    if (previousTooltip && link.nextElementSibling == previousTooltip) {
      previousTooltip.remove();
    } else {
      if (previousTooltip) {
        previousTooltip.remove();
      }

      const tooltip = createTooltip(link.title, link.getBoundingClientRect().left);
      link.insertAdjacentElement('afterend', tooltip);
    }
  });
});