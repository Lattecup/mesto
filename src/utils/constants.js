export { 
  editButton,
  addButton,
  changeButton,
  formChangeElement,
  avatarLinkInput,
  formEditElement,
  nameInput,
  jobInput,
  formCardElement,
  placeInput,
  linkInput,
  validationSettings
};

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const changeButton = document.querySelector('.profile__avatar-change-button');
const formChangeElement = document.querySelector('.form-avatar');
const avatarLinkInput = formChangeElement.querySelector('.form__input_type_link');
const formEditElement = document.querySelector('.form-edit');
const nameInput = formEditElement.querySelector('.form__input_type_title');
const jobInput = formEditElement.querySelector('.form__input_type_subtitle');
const formCardElement = document.querySelector('.form-add');
const placeInput = formCardElement.querySelector('.form__input_type_place');
const linkInput = formCardElement.querySelector('.form__input_type_link');
const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  disabledButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};