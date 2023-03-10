/* eslint-disable no-unused-vars */
import { Dropdown, Popover } from 'bootstrap';
import arrowFunc from './test-es6';

/* Dropdowns */
document
  .querySelectorAll('[data-bs-toggle="dropdown"]')
  .forEach(dropdown => new Dropdown(dropdown));

/* Popovers */
const popoverList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverList].map(popover => new Popover(popover));

// call test func
arrowFunc();
