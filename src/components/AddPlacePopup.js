import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddNewCard }) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddNewCard({ name, link });
    }

    React.useEffect(() => {
        setName("");
        setLink("");
    }, [isOpen]);

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name='AddPicture' title='Новое место' submitButtonText="Создать">
            <input id="pictureTitle" name="newTitle" type="text" required className="popup__input-field" placeholder="Название" maxLength="30" minLength="2" value={name} onChange={(evt) => setName(evt.target.value)}/>
            <span id="pictureTitle-error" className="popup__error-message"></span>
            <input id="url" name="newUrl" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" value={link} onChange={(evt) => setLink(evt.target.value)}/>
            <span id="url-error" className="popup__error-message"></span>
        </PopupWithForm>
    );
}