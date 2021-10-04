export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  };

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    };

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      headers: this._headers,
    })
    .then(this._handleResponse);
  };

  setUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.info
      })
    })
    .then(this._handleResponse);
  };

  getInitialCards() {
    return fetch(this._url + '/cards', {
      headers: this._headers,
    })
    .then(this._handleResponse);
  };

  postCard(data) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._handleResponse);
  };

  removeCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._handleResponse);
  };

  setLike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._handleResponse);
  };

  removeLike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers, 
    })
    .then(this._handleResponse);
  };

  changeAvatar(link) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then(this._handleResponse);
  };
};