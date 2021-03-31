import{createMenu} from './view/site-menu.js';

function renderIt(container, template, place) {
  container.insertAdjacentHTML(place, template);

};

const siteTripMain = document.querySelector('.trip-main');
const siteTripMainControls = siteTripMain.querySelector('.trip-main__trip-controls');

renderIt(siteTripMainControls, createMenu(),'beforeend');

