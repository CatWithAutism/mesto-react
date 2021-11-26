import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../context/CurrentUserContext";


export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm isOpen={isOpen} name='Profile' title='Редактировать профиль' onClose={onClose} submitButtonText="Сохранить" onSubmit={handleSubmit}>
            <input
                id="name"
                placeholder="Имя"
                name="newName"
                type="text"
                required
                className="popup__input-field"
                minLength="2"
                maxLength="40"
                value={name ? name : ""}
                onChange={(evt) => setName(evt.target.value)} />

            <span id="name-error" className="popup__error-message"></span>

            <input
                id="about"
                placeholder="Вид деятельности"
                name="newTitle"
                type="text"
                required
                className="popup__input-field"
                minLength="2"
                maxLength="200"
                value={description ? description : ""}
                onChange={(evt) => setDescription(evt.target.value)} />

            <span id="about-error" className="popup__error-message"></span>
        </PopupWithForm>
    )
}