import {createMenuTemp} from './components/menu';
import {createFilterTemp} from './components/filter';
import {createBoardTemp} from './components/board';
import {createCardTemp} from "./components/card";
import {loadMoreTemp} from "./components/loadMore";

const render = (container, elem, place = `beforeend`) => {
  container.insertAdjacentHTML(place, elem);
};

const mainElem = document.querySelector(`.main`);
const mainControlElem = document.querySelector(`.main__control`);

render(mainControlElem, createMenuTemp());
render(mainElem, createFilterTemp());
render(mainElem, createBoardTemp());

const boardElem = document.querySelector(`.board`);
const boardTasksElem = document.querySelector(`.board__tasks`);

const TASK_COUNT = 3;
new Array(TASK_COUNT)
  .fill(``)
  .forEach(()=> render(boardTasksElem, createCardTemp()));

render(boardElem, loadMoreTemp());
