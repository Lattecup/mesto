export default class Card {
  constructor(userId, data, cardSelector, { handleCardClick, handleCardRemove, handleLikeSet, handleLikeRemove }) {
    this._userId = userId;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._handleLikeSet = handleLikeSet;
    this._handleLikeRemove = handleLikeRemove;
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

    this._cardImage = this._element.querySelector('.card__image');
    this._cardCaption = this._element.querySelector('.card__caption');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._removeButton = this._element.querySelector('.card__remove-button');
    this._likeButton = this._element.querySelector('.card__like-button');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._cardCaption.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    
    this._setEventListeners();
    this._handleLikeState();
    this._handleCardOwner();

    return this._element;
  };

  _handleLikeState() {
    if (this._likes.some(like => like._id === this._userId)) {
      this.handleAddLikeIcon();
    };
  };

  _handleCardOwner() {
    if (this._userId === this._owner) {
      this._removeButton.classList.add('card__remove-button_active');
    };
  };

  handleAddLikeIcon() {
    this._likeButton.classList.add('card__like-button_active');
  };

  handleRemoveLikeIcon() {
    this._likeButton.classList.remove('card__like-button_active');
  };

  handleLikeCounter(data) {
    this._likeCounter.textContent = data.likes.length;
  };

  handleCardDelete() {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__like-button_active')) {
        this._handleLikeRemove();
      } else {
        this._handleLikeSet();
      };
    });

    this._removeButton.addEventListener('click', () => {
      this._handleCardRemove();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  };
};