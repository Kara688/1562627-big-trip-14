
import{createSiteMenu} from './view/site-menu.js';
import{createCostTrip} from './view/cost-trip.js';
import{createFilters} from './view/filters.js';
import{createSorting} from './view/sorting.js';
import{createCreatorForm} from './view/creator-form.js';
import{createEditForm} from './view/edit-form.js';
import{createWayPoint} from './view/waypoint.js';
import { container } from 'webpack';


const renderIt = (container, template, place) => {
  container.insertAdjacentHTML(place, template);W
};

const WAY_POINT = 3;

const mainElement = document.querySelector('.trip-main');


renderIt(mainElement, createCostTrip(),'afterbegin');

const siteNavigation = document.querySelector('.trip-controls__navigation');
renderIt(siteNavigation, createSiteMenu(),'beforeend');

const filterContainer = document.querySelector('.trip-controls__filters');
renderIt(filterContainer, createFilters(),'beforeend');

const sortingContainer  =  document.querySelector('.trip-events');
renderIt(sortingContainer,createSorting (),'afterbegin');

const content = document.querySelector('.trip-events__list');
renderIt(content, createCreatorForm(),'beforeend');


p

for (let i = 0; i < WAY_POINT ; i++) {
  renderIt(content, createWayPoint(), 'beforeend');
}


renderIt(content,createEditForm(),'beforeend');




