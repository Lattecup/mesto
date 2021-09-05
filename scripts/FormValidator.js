export class FormValidator {
  constructor(formElement, validationSettings) {
    this._formElement = formElement;
    this._validationSettings = validationSettings;
  };

  // Показать класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationSettings.errorClass);
  };

  // Удалить класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._validationSettings.inputErrorClass);
    errorElement.classList.remove(this._validationSettings.errorClass);
    errorElement.textContent = '';
  };

  // Проверка валидности поля ввода
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  // Проверка валидности всех полей ввода
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // Переключение кнопки submit
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validationSettings.disabledButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._validationSettings.disabledButtonClass);
      buttonElement.removeAttribute('disabled');
    };
  };

  // Валидация открываемого попапа
  resetFormValidationState() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState(inputList, buttonElement);
  };

  // Добавление обработчиков всем полям формы
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validationSettings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement, this._validationSettings.disabledButtonClass);
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };
};