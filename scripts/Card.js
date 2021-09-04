import { openPopup } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
  };

  _cardTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  };

  createCard() {
    this._element = this._cardTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this.link;
    this._element.querySelector('.card__caption').alt = this.name;
    this._element.querySelector('.card__caption').textContent = this.name;

    return this._element;
  };

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  };

  _handleRemoveCard() {
    this._element.querySelector('.card__remove-button').closest('.card').remove();
  };

  _handlePreviewImage() {
    const cardImagePopup = document.querySelector('.popup-image');
    const imagePopup = document.querySelector('.popup__image');
    const imageCaptionPopup = document.querySelector('.popup__image-caption');

    imagePopup.src = this.link;
    imagePopup.alt = this.name;
    imageCaptionPopup.textContent = this.name;

    openPopup(cardImagePopup);
  };

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeIcon();
    });

    this._element.querySelector('.card__remove-button').addEventListener('click', () => {
      this._handleRemoveCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handlePreviewImage();
    });
  };
};