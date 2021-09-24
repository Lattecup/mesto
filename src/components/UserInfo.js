export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._info = document.querySelector(userInfoSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent,
    };
  };

  setUserInfo({ name, info}) {
    this._name.textContent = name;
    this._info.textContent = info;
  };

  setUserAvatar({ link }) {
    this._avatar.src = link;
  };
};