import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._form.querySelector('.form__submit-button');
    this._submitButtonTextContent = this._submitButton.textContent;
  };

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  };

  setRemoveFormSubmit(action) {
    this._handleFormSubmit = action;
  };

  handleLoading(isLoading) {
    if(isLoading) {
      this._submitButton.textContent = 'Удаление...';
    }
    else {
      this._submitButton.textContent = this._submitButtonTextContent;
    };
  };
};