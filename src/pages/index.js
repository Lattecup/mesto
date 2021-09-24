import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/initial-cards.js';
import {
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
} from '../utils/constants.js';

// Валидатор формы добавления карточки
const addCardFormValidator = new FormValidator(formCardElement, validationSettings);
addCardFormValidator.enableValidation();

// Валидатор формы редактирования профиля
const editProfileFormValidator = new FormValidator(formEditElement, validationSettings);
editProfileFormValidator.enableValidation();

// Валидатор формы изменения аватара
const changeAvatarFormValidator = new FormValidator(formChangeElement, validationSettings);
changeAvatarFormValidator.enableValidation();

// Создание экземпляра карточки
function createCard(element) {
  const card = new Card(element, '#card-template', () => {
    cardPreviewPopup.open(element);
  });
  const cardElement = card.generateCard();
  return cardElement;
};

// Получение разметки новой карточки
function renderCard(element) {
  const newCard = createCard(element);
  cardList.addItem(newCard);
};

// Создание коллекции карточек
const cardList = new Section({
  items: initialCards,
  renderer: renderCard
}, '.cards');

// Заполнение страницы исходным массивом карточек
cardList.renderItems();

// Попап превью изображения
const cardPreviewPopup = new PopupWithImage('.popup-image');

// Попап редактирования профиля
const editProfilePopup = new PopupWithForm('.popup-edit', editFormSubmitHandler);

const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userInfoSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__avatar'
});

function editFormSubmitHandler() {
  userInfo.setUserInfo({ name: nameInput.value, info: jobInput.value });
  editProfilePopup.close();
};

function openEditPopup() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;

  editProfileFormValidator.resetFormValidationState();
  editProfilePopup.open();
};

// Попап добавления карточки
const addCardPopup = new PopupWithForm('.popup-add', addFormSubmitHandler);

function addFormSubmitHandler() {
  renderCard({ name: placeInput.value, link: linkInput.value });
  addCardPopup.close();
};

function openAddCardPopup() {
  addCardFormValidator.resetFormValidationState();
  addCardPopup.open();
};

// Попап изменения аватара
const changeAvatarPopup = new PopupWithForm('.popup-avatar', changeFormSubmitHandler);

function changeFormSubmitHandler() {
  userInfo.setUserAvatar({ link: avatarLinkInput.value });
  changeAvatarPopup.close();
};

function openChangeAvatarPopup() {
  changeAvatarFormValidator.resetFormValidationState();
  changeAvatarPopup.open();
};

changeAvatarPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

changeButton.addEventListener('click', openChangeAvatarPopup);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddCardPopup);