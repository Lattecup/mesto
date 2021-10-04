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
      avatar: this._avatar.src,
    };
  };

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this._avatar.src = data.avatar;
    this.id = data._id;
  };
};