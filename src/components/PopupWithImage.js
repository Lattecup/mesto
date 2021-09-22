import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__image-caption');
  };

  open(element) {
    this._image.src = element.link;
    this._image.alt = element.name;
    this._caption.textContent = element.name;
    super.open();
  };
};