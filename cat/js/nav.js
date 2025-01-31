function toggleMenu (list, toggle) {

  function onToggleClick () {
    list.classList.toggle('navigation-list--open');
    toggle.classList.toggle('navigation__toggle--open');
  }

  toggle.addEventListener('click', onToggleClick);
}

export { toggleMenu };
