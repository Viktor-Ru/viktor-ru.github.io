import { isEscapeKey } from "./util.js";

const openBtn = document.querySelector('.search-nav-link-basket');
const closeBtn = document.querySelector('.modal-close-button');
const modalContent = document.querySelector('.modal-container');

document.addEventListener('keydown', onEscapeKeydown);


function openModal (evt) {
  modalContent.classList.remove('modal-container--closed');
  closeBtn.addEventListener('click', closeModal)
}

function closeModal (evt) {
  modalContent.classList.add('modal-container--closed');
  closeBtn.removeEventListener('click', onCloseBtnClick);
}



function onOpenBtnClick (evt) {
  evt.preventDefault();
  openModal();
}

function onCloseBtnClick (evt) {
  evt.preventDefault();
  closeModal();
}


function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}


openBtn.addEventListener('click', onOpenBtnClick);
