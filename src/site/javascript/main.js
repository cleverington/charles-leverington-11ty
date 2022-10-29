/**
 * Main.js
 *
 * @todo Add linting toolkit(s).
 */

/*
  IMPORTS
	You can import directly from node_modules here.
*/
import $ from 'jQuery';

/*
	BOOTSTRAP IMPORTS
	JavaScript functions for boostrap Components.

	See https://getbootstrap.com/docs/5.2/getting-started/webpack/#setup
	Options: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover,
  ScrollSpy, Tab, Toast, Tooltip
*/
import { Alert, Button, Collapse, Dropdown, Popover } from 'bootstrap'

/*
    LIBRARY IMPORTS
    Custom (and/or external) libraries for JavaScripty Goodness.
*/
import konamiCode from './libraries/custom/konami-code';

/*
    LOAD JS
*/
window.addEventListener('DOMContentLoaded', () => {

    let bodyClass = document.querySelector('body')
    bodyClass.classList.add('loaded');

    // Add Libraries
    konamiCode();
});
