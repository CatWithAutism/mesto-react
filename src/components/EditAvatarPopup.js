import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatar = React.useRef(0);

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: avatar.current.value,
        });

        evt.target.reset();
    }

    return (
        <PopupWithForm name="UpdateProfilePicture" title="Обновить аватар" submitButtonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input id="avatarUrl" name="newAvatar" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" ref={avatar} />
            <span id="avatarUrl-error" className="popup__error-message"></span>
        </PopupWithForm>
    );
}