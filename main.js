(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleCardRemove,u=o.handleLikeSet,s=o.handleLikeRemove;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=e,this._name=n.name,this._link=n.link,this._likes=n.likes,this._owner=n.owner._id,this._cardSelector=r,this._handleCardClick=i,this._handleCardRemove=a,this._handleLikeSet=u,this._handleLikeRemove=s}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardCaption=this._element.querySelector(".card__caption"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._removeButton=this._element.querySelector(".card__remove-button"),this._likeButton=this._element.querySelector(".card__like-button"),this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._cardCaption.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._setEventListeners(),this._handleLikeState(),this._handleCardOwner(),this._element}},{key:"_handleLikeState",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this.handleAddLikeIcon()}},{key:"_handleCardOwner",value:function(){this._userId===this._owner&&this._removeButton.classList.add("card__remove-button_active")}},{key:"handleAddLikeIcon",value:function(){this._likeButton.classList.add("card__like-button_active")}},{key:"handleRemoveLikeIcon",value:function(){this._likeButton.classList.remove("card__like-button_active")}},{key:"handleLikeCounter",value:function(e){this._likeCounter.textContent=e.likes.length}},{key:"handleCardDelete",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("card__like-button_active")?e._handleLikeRemove():e._handleLikeSet()})),this._removeButton.addEventListener("click",(function(){e._handleCardRemove()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._validationSettings=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationSettings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationSettings.inputErrorClass),n.textContent=t,n.classList.add(this._validationSettings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationSettings.inputErrorClass),t.classList.remove(this._validationSettings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._submitButton.classList.add(this._validationSettings.disabledButtonClass),this._submitButton.setAttribute("disabled",!0)):(this._submitButton.classList.remove(this._validationSettings.disabledButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"resetFormValidationState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState(this._inputList,this._submitButton)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._submitButton,e._validationSettings.disabledButtonClass)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&a(t.prototype,n),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},l(e,t,n||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._caption.textContent=e.name,l(d(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},v(e,t,n||e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".form"),n._inputList=n._form.querySelectorAll(".form__input"),n._submitButton=n._form.querySelector(".form__submit-button"),n._submitButtonTextContent=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._dataInputs={},this._inputList.forEach((function(t){e._dataInputs[t.name]=t.value})),this._dataInputs}},{key:"setEventListeners",value:function(){var e=this;v(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(k(a.prototype),"close",this).call(this),this._form.reset()}},{key:"handleLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonTextContent}}])&&y(t.prototype,n),a}(u);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},w(e,t,n||e)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".form"),t._submitButton=t._form.querySelector(".form__submit-button"),t._submitButtonTextContent=t._submitButton.textContent,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;w(O(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}},{key:"setRemoveFormSubmit",value:function(e){this._handleFormSubmit=e}},{key:"handleLoading",value:function(e){this._submitButton.textContent=e?"Удаление...":this._submitButtonTextContent}}])&&L(t.prototype,n),a}(u);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar,this.id=e._id}}])&&R(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then(this._handleResponse)}},{key:"postCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"removeLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"changeAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}])&&B(t.prototype,n),e}(),q=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__avatar-change-button"),A=document.querySelector(".form-avatar"),D=A.querySelector(".form__input_type_link"),U=document.querySelector(".form-edit"),V=U.querySelector(".form__input_type_title"),F=U.querySelector(".form__input_type_subtitle"),N=document.querySelector(".form-add"),J=N.querySelector(".form__input_type_place"),H=N.querySelector(".form__input_type_link"),M={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",disabledButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new P({url:"https://mesto.nomoreparties.co/v1/cohort-28",headers:{authorization:"d5f4b13b-5ee9-4277-b0be-f215cd379279","Content-Type":"application/json"}}),G=$.getUserInfo(),K=$.getInitialCards();Promise.all([G,K]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];oe.setUserInfo(o),Z.renderItems(i)})).catch((function(e){console.log(e)}));var Q=new i(N,M);Q.enableValidation();var W=new i(U,M);W.enableValidation();var X=new i(A,M);function Y(e){var n=function(e){var n=new t(oe.id,e,"#card-template",{handleCardClick:function(){ne.open(e)},handleCardRemove:function(){te.open(),te.setRemoveFormSubmit((function(){te.handleLoading(!0),$.removeCard(e._id).then((function(){n.handleCardDelete(),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.handleLoading(!1)}))}))},handleLikeSet:function(){$.setLike(e._id).then((function(e){n.handleLikeCounter(e),n.handleAddLikeIcon()})).catch((function(e){console.log(e)}))},handleLikeRemove:function(){$.removeLike(e._id).then((function(e){n.handleLikeCounter(e),n.handleRemoveLikeIcon()})).catch((function(e){console.log(e)}))}});return n.generateCard()}(e);Z.addItem(n)}X.enableValidation();var Z=new r({renderer:Y},".cards"),ee=new g(".popup-add",(function(){ee.handleLoading(!0),$.postCard({name:J.value,link:H.value}).then((function(e){Y(e),ee.close()})).catch((function(e){console.log(e)})).finally((function(){ee.handleLoading(!1)}))})),te=new I(".popup-confirm"),ne=new p(".popup-image"),re=new g(".popup-edit",(function(){re.handleLoading(!0),$.setUserInfo({name:V.value,info:F.value}).then((function(e){oe.setUserInfo(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.handleLoading(!1)}))})),oe=new j({userNameSelector:".profile__title",userInfoSelector:".profile__subtitle",userAvatarSelector:".profile__avatar"}),ie=new g(".popup-avatar",(function(){ie.handleLoading(!0),$.changeAvatar(D.value).then((function(e){oe.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.handleLoading(!1)}))}));ie.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),x.addEventListener("click",(function(){X.resetFormValidationState(),ie.open()})),q.addEventListener("click",(function(){var e=oe.getUserInfo();V.value=e.name,F.value=e.info,W.resetFormValidationState(),re.open()})),T.addEventListener("click",(function(){Q.resetFormValidationState(),ee.open()}))})();