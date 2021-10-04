import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._submitButton = this._form.querySelector('.form__submit-button');
    this._submitButtonTextContent = this._submitButton.textContent;
  };

  _getInputValues() {
    this._dataInputs = {};

    this._inputList.forEach((input) => {
      this._dataInputs[input.name] = input.value
    });

    return this._dataInputs;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close() {
    super.close();
    this._form.reset();
  };

  handleLoading(isLoading) {
    if(isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    }
    else {
      this._submitButton.textContent = this._submitButtonTextContent;
    };
  };
};