const popup = document.querySelector('.popup');
const editProfilePopup = document.querySelector('.popup__edit-profile');
const addCardPopup = document.querySelector('.popup__add-card');
const cardImagePopup = document.querySelector('.popup__show-image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form__edit-profile');
const nameInput = formElement.querySelector('.form__input_type_title');
const jobInput = formElement.querySelector('.form__input_type_subtitle');
const cardFormElement = document.querySelector('.form__add-card');
const placeInput = cardFormElement.querySelector('.form__input_type_place');
const linkInput = cardFormElement.querySelector('.form__input_type_link');
const cardTemplate = document.querySelector('#card-template');
const cards = document.querySelector('.cards');
const imagePopup = document.querySelector('.popup__image');
const imageCaptionPopup = document.querySelector('.popup__image-caption');
const initialCards = [
  {
    name: 'Эльбрус',
    link: './images/elements-elbrus.jpg'
  },
  {
    name: 'Шары в Каппадокии',
    link: './images/elements-kappadokiya.jpg'
  },
  {
    name: 'Закат на Камчатке',
    link: './images/elements-kamchatka.jpg'
  },
  {
    name: 'Гималаи',
    link: './images/elements-himalayas.jpg'
  },
  {
    name: 'Маковое поле',
    link: './images/elements-makovoe-pole.jpg'
  },
  {
    name: 'Северное сияние в Исландии',
    link: './images/elements-iceland-northen-lights.jpg'
  }
];

function createCard(element) {
  const cardContent = cardTemplate.content.querySelector('.card');
  const card = cardContent.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardCaption = card.querySelector('.card__caption');

  cardImage.src = element.link;
  cardImage.alt = element.alt;
  cardCaption.textContent = element.name;

  const likeButton = card.querySelector('.card__like-button');
  const removeButton = card.querySelector('.card__remove-button');

  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });

  removeButton.addEventListener('click', (evt) => {
    evt.target.parentElement.remove();
  });

  cardImage.addEventListener('click', function() {
    openImagePopup();

    imagePopup.src = cardImage.src;
    imagePopup.alt = cardImage.alt;
    imageCaptionPopup.textContent = cardCaption.textContent;
  });

  return card;
};

initialCards.forEach(function (element) {
  cards.append(createCard(element));
});

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  openPopup(editProfilePopup);
};

function openAddPopup() {
  openPopup(addCardPopup);
};

function openImagePopup() {
  openPopup(cardImagePopup);
};

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(editProfilePopup);
};

function addFormSubmitHandler (evt) {
  evt.preventDefault();

  cards.prepend(createCard({name: placeInput.value, link: linkInput.value}));

  closePopup(addCardPopup);
};

closeButton.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.closest('.popup').classList.remove('popup_opened');
  });
});

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup)
formElement.addEventListener('submit', formSubmitHandler);
cardFormElement.addEventListener('submit', addFormSubmitHandler);
