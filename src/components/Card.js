export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardCaption = this._element.querySelector('.card__caption');

    cardImage.src = this._link;
    cardImage.alt = this._alt;
    cardCaption.textContent = this._name;

    return this._element;
  };

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  };

  _handleRemoveCard() {
    this._element.querySelector('.card__remove-button').closest('.card').remove();
  };

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeIcon();
    });

    this._element.querySelector('.card__remove-button').addEventListener('click', () => {
      this._handleRemoveCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', this._handleCardClick);
  };
};