import { cardImagePopup, imagePopup, imageCaptionPopup } from '../utils/constants.js';
import { openPopup } from '../utils/utils.js';

export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
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

    cardImage.src = this.link;
    cardImage.alt = this.alt;
    cardCaption.textContent = this.name;

    return this._element;
  };

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  };

  _handleRemoveCard() {
    this._element.querySelector('.card__remove-button').closest('.card').remove();
  };

  _handlePreviewImage() {
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