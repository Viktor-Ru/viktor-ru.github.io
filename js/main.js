import { isJs } from "./is-js.js";
import { toggleMenu } from "./nav.js";

let navMain = document.querySelector('.navigation-list');
let navToggle = document.querySelector('.navigation__toggle');

isJs(navMain, navToggle);
toggleMenu(navMain, navToggle);
