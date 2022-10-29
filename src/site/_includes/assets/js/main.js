/**
 * Main.js
 *
 * @todo Add linting toolkit(s).
 * @todo Rebuild to use WebPack or something which actually PROPERLY supports JavaScript Modules.
 */

/*
	BOOTSTRAP IMPORTS
	JavaScript functions for boostrap Components.

	See https://getbootstrap.com/docs/5.2/getting-started/webpack/#setup
	Options: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover,
  ScrollSpy, Tab, Toast, Tooltip
*/
// import { Alert, Button, Collapse, Dropdown, Popover } from 'bootstrap'

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

/*
    LOAD JS
*/
window.addEventListener('DOMContentLoaded', () => {

    let bodyClass = document.querySelector('body')
    bodyClass.classList.add('loaded');

    // Add Libraries
    konamiCode();
});

function konamiCode() {
  /*
   ********
   * EASTER EGG SECTION
   *******
  */
  const mobile =
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/Blackberry/i) ||
    navigator.userAgent.match(/WebOs/i)
  let pressed = []
  const secretCode = '75,79,78,65,77,73' // k o n a m i
  const konamiCode = '38,38,40,40,37,39,37,39,66,65' // up, up, down, down, left, right, left, right, b, a

  // What if we just type 'konami' in succession at any point?
  function removeEasterEgg () {
    let tattooDruplicon = document.getElementById('druplion-sleep')
    tattooDruplicon.parentNode.removeChild(tattooDruplicon)
  }

  function easterEgg () {
    const tattooDruplicon = document.createElement('img')
    tattooDruplicon.setAttribute(
        'src',
        '../assets/images/tattoo-concept-art.jpg'
    )
    tattooDruplicon.setAttribute('alt', 'Ahh! Druplicon attacks! - A bit of concept art from my Drupal tattoo.')
    tattooDruplicon.setAttribute('role', 'presentation')
    tattooDruplicon.setAttribute('id', 'druplion-sleep')
    document.body.appendChild(tattooDruplicon)

    document.addEventListener('mousemove', removeEasterEgg, false)
    document.addEventListener('mousedown', removeEasterEgg, false)
    document.addEventListener('keypress', removeEasterEgg, false)
    document.addEventListener('touchmove', removeEasterEgg, false)
    document.addEventListener('scroll', removeEasterEgg, false)
  }

  function startEasterEgg () {
    easterEgg()
  }

  if (!mobile) {
    document.addEventListener('keyup', e => {
      pressed.push(e.keyCode)
      if (pressed.toString().indexOf(secretCode) >= 0) {
          easterEgg()
          pressed = []
      }
      if (pressed.toString().indexOf(konamiCode) >= 0) {
          easterEgg()
          pressed = []
      }
    })
  }
}