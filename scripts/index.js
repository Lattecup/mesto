import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';
export { openPopup };

const editProfilePopup = document.querySelector('.popup-edit');
const addCardPopup = document.querySelector('.popup-add');
//const cardImagePopup = document.querySelector('.popup-image');
const popups = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formEditElement = document.querySelector('.form-edit');
const nameInput = formEditElement.querySelector('.form__input_type_title');
const jobInput = formEditElement.querySelector('.form__input_type_subtitle');
const cardFormElement = document.querySelector('.form-add');
const placeInput = cardFormElement.querySelector('.form__input_type_place');
const linkInput = cardFormElement.querySelector('.form__input_type_link');
//const cardTemplate = document.querySelector('#card-template');
//const cardContent = cardTemplate.content.querySelector('.card');
const cards = document.querySelector('.cards');
//const imagePopup = document.querySelector('.popup__image');
//const imageCaptionPopup = document.querySelector('.popup__image-caption');
const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  disabledButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

// Добавление карточки в контейнер
function renderCard(element) {
  const card = new Card(element, '#card-template');
  cards.prepend(card.createCard());
};

// Заполнение страницы исходным массивом
initialCards.forEach((element) => {
  renderCard(element);
});

// Закрытие попапа по Esc
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

// Открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

// Закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

// Открытие попапа редактирования профиля
function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  const formEditValidator = new FormValidator(formEditElement, validationSettings);
  formEditValidator.validateOpenPopup();

  openPopup(editProfilePopup);
};

// Открытие попапа добавления карточки
const openAddCardPopup = () => {
  cardFormElement.reset();

  const formAddValidator = new FormValidator(cardFormElement, validationSettings);
  formAddValidator.validateOpenPopup();

  openPopup(addCardPopup);
};

// Редактирование данных профиля
function editFormSubmitHandler (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(editProfilePopup);
};

// Добавление новой карточки
function addFormSubmitHandler (evt) {
  evt.preventDefault();

  renderCard({name: placeInput.value, link: linkInput.value}, cards);
  
  closePopup(addCardPopup);
};

// Закрытие всех попапов по крестику
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Закрытие попапа по overlay
const closePopupByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
};

// Закрытие всех попапов по overlay
popups.forEach((popup) => {
  popup.addEventListener('click', closePopupByOverlay);
});

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddCardPopup);
formEditElement.addEventListener('submit', editFormSubmitHandler);
cardFormElement.addEventListener('submit', addFormSubmitHandler);

// Включение валидации форм
function enableFormsValidation() {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(formElement, validationSettings);
    formValidator.enableValidation();
  });
};

enableFormsValidation();