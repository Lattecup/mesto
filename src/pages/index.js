import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
import {
  editButton,
  addButton,
  changeButton,
  formChangeElement,
  formEditElement,
  nameInput,
  jobInput,
  formCardElement,
  validationSettings,
} from '../utils/constants.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: 'd5f4b13b-5ee9-4277-b0be-f215cd379279',
    'Content-Type': 'application/json'
  }
});

// Получение данных профиля с сервера
const userProfileInfo = api.getUserInfo();

// Получение коллекции карточек с сервера
const initialCards = api.getInitialCards();

Promise.all([userProfileInfo, initialCards])
  .then(([userData, initialCardsData]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCardsData);
  })
  .catch((err) => {
    console.log(err);
  });

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
  const card = new Card(userInfo.id, element, '#card-template', {
    handleCardClick: () => {
      cardPreviewPopup.open(element)
    },

    handleCardRemove: () => {
      confirmRemoveCardPopup.open();
      confirmRemoveCardPopup.setRemoveFormSubmit(() => {
        confirmRemoveCardPopup.handleLoading(true);
        api.removeCard(element._id)
          .then(() => {
            card.handleCardDelete();
            confirmRemoveCardPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            confirmRemoveCardPopup.handleLoading(false);
          });
      });
    },

    handleLikeSet: () => {
      api.setLike(element._id)
        .then((data) => {
          card.handleLikeCounter(data);
          card.handleAddLikeIcon();
        })
        .catch((err) => {
          console.log(err);
        })
    },

    handleLikeRemove: () => {
      api.removeLike(element._id)
        .then((data) => {
          card.handleLikeCounter(data);
          card.handleRemoveLikeIcon();
        })
        .catch((err) => {
          console.log(err);
        })
    },
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
  renderer: renderCard
}, '.cards');

// Попап добавления карточки
const addCardPopup = new PopupWithForm('.popup-add', addFormSubmitHandler);

function addFormSubmitHandler(data) {
  addCardPopup.handleLoading(true);
  api.postCard(data)
    .then((data) => {
      renderCard(data);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.handleLoading(false);
    });
};

function openAddCardPopup() {
  addCardFormValidator.resetFormValidationState();
  addCardPopup.open();
};

// Попап подтверждения удаления карточки
const confirmRemoveCardPopup = new PopupWithConfirmation('.popup-confirm');

// Попап превью изображения
const cardPreviewPopup = new PopupWithImage('.popup-image');

// Попап редактирования профиля
const editProfilePopup = new PopupWithForm('.popup-edit', editFormSubmitHandler);

const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userInfoSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__avatar'
});

function editFormSubmitHandler(data) {
  editProfilePopup.handleLoading(true);
  api.setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.handleLoading(false);
    });
  };

function openEditPopup() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;

  editProfileFormValidator.resetFormValidationState();
  editProfilePopup.open();
};

// Попап обновления аватара
const changeAvatarPopup = new PopupWithForm('.popup-avatar', changeFormSubmitHandler);

function changeFormSubmitHandler(data) {
  changeAvatarPopup.handleLoading(true);
  api.changeAvatar(data.link)
    .then((data) => {
      userInfo.setUserInfo(data);
      changeAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeAvatarPopup.handleLoading(false);
    });
};

function openChangeAvatarPopup() {
  changeAvatarFormValidator.resetFormValidationState();
  changeAvatarPopup.open();
};

changeAvatarPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
confirmRemoveCardPopup.setEventListeners();

changeButton.addEventListener('click', openChangeAvatarPopup);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddCardPopup);