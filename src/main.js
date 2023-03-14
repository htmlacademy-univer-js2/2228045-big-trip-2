import FiltersView from "./view/filters-view";
import MenuView from "./view/menu-view";
import EventsPresenter from "./presenter/presenter";
import { render } from "./render";

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new EventsPresenter(siteMainElement.querySelector('.trip-events'));

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new MenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenter.init();