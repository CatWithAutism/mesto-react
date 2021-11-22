class Api {
    constructor(options) {
        this._headers = options.headers;
        this._baseUrl = options.baseUrl;
    } 

    //#region Common
    _getDeserializedJsonObject(url, queryParams = {}) {
        queryParams.headers = this._headers;
        return fetch(`${this._baseUrl}/${url}`, queryParams)
            .then(result => {
                if (result.ok) {
                    return result.json();
                }

                return Promise.reject(`Ошибка: ${result.status}`);
            })
    }
    //#endregion

    //#region UserInfo
    getUserInfo() {
        return this._getDeserializedJsonObject("users/me");
    }

    getCards() {
        return this._getDeserializedJsonObject("cards");
    }

    updateUserInfo(userInfo) {
        return this._getDeserializedJsonObject("users/me", {
            method: "PATCH",
            body: JSON.stringify({
                name: userInfo.name,
                about: userInfo.about
            })
        });
    }

    updateUserAvatar(link) {
        return this._getDeserializedJsonObject("users/me/avatar", {
            method: "PATCH",
            body: JSON.stringify({
                avatar: link
            })
        });
    }
    //#endregion

    //#region Cards
    sendCard(card) {
        return this._getDeserializedJsonObject("cards", {
            method: "POST",
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        });
    }

    deleteCard(cardId) {
        return this._getDeserializedJsonObject(`cards/${cardId}`, {
            method: "DELETE",
        });
    }

    updateLikeState(cardId, isLiked) {
        return this._getDeserializedJsonObject(`cards/likes/${cardId}`, {
            method: isLiked ? "DELETE" : "PUT",
        });
    }
    //#endregion

} 

export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-28",
    headers: {
        authorization: "b38078dd-f6b0-4e16-83cc-6b71b2124085",
        "Content-Type": "application/json"
    }
});
