import { container } from 'webpack';
import{createSiteMenu} from './view/site-menu.js';

const renderIt = (container, temlate, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.page-body__container');

renderIt(siteHeaderElement, createSiteMenu(), 'beforeend');
