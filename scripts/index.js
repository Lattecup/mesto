const editProfilePopup = document.querySelector('.popup-edit');
const addCardPopup = document.querySelector('.popup-add');
const cardImagePopup = document.querySelector('.popup-image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form-edit');
const nameInput = formElement.querySelector('.form__input_type_title');
const jobInput = formElement.querySelector('.form__input_type_subtitle');
const cardFormElement = document.querySelector('.form-add');
const placeInput = cardFormElement.querySelector('.form__input_type_place');
const linkInput = cardFormElement.querySelector('.form__input_type_link');
const cardTemplate = document.querySelector('#card-template');
const cardContent = cardTemplate.content.querySelector('.card');
const cards = document.querySelector('.cards');
const imagePopup = document.querySelector('.popup__image');
const imageCaptionPopup = document.querySelector('.popup__image-caption');

// Создание карточки
function createCard(element) {
  const card = cardContent.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardCaption = card.querySelector('.card__caption');

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardCaption.textContent = element.name;

  const likeButton = card.querySelector('.card__like-button');
  const removeButton = card.querySelector('.card__remove-button');

  likeButton.addEventListener('click', handleLikeIcon);
  removeButton.addEventListener('click', handleRemoveCard);
  cardImage.addEventListener('click', handlePreviewImage);

  return card;
};

// Поставить/удалить лайк 
function handleLikeIcon (evt) {
  evt.target.classList.toggle('card__like-button_active');
};

// Удаление карточки
const handleRemoveCard = (evt) => {
  evt.target.closest('.card').remove();
};

// Превью изображения
function handlePreviewImage (evt) {
  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  imageCaptionPopup.textContent = evt.target.alt;

  openPopup(cardImagePopup);
};

// Добавление карточки в контейнер
function renderCard(element, container) {
  container.prepend(createCard(element));
};

// Заполнение страницы исходным массивом
initialCards.forEach((element) => {
  renderCard(element, cards);
});

// Закрытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

// Открытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

// Открытие попапа редактирования профиля
function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  openPopup(editProfilePopup);
};

// Редактирование данных профиля
function formSubmitHandler (evt) {
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
  cardFormElement.reset();
};

// Закрытие всех попапов
closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', function() {
    closePopup(popup);
  });
});

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', () => openPopup(addCardPopup));
formElement.addEventListener('submit', formSubmitHandler);
cardFormElement.addEventListener('submit', addFormSubmitHandler);
