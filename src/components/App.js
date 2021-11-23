import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import React, { useEffect } from 'react';
import { api } from '../utils/Api.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteSubmitPopupOpen, setIsDeleteSubmitPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteSubmitPopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          userName={currentUser.name}
          userDescription={currentUser.about}
          userAvatar={currentUser.avatar}
          userId={currentUser._id}
          cards={cards} />
        <Footer />
      </div>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name='Profile' title='Редактировать профиль' onClose={closeAllPopups} submitButtonText="Сохранить">
        <input id="name" placeholder="Имя" name="newName" type="text" required className="popup__input-field" minLength="2" maxLength="40" />
        <span id="name-error" className="popup__error-message"></span>
        <input id="about" placeholder="Вид деятельности" name="newTitle" type="text" required className="popup__input-field" minLength="2" maxLength="200" />
        <span id="about-error" className="popup__error-message"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} name='AddPicture' title='Новое место' onClose={closeAllPopups} submitButtonText="Создать">
        <input id="pictureTitle" name="newTitle" type="text" required className="popup__input-field" placeholder="Название" maxLength="30" minLength="2" />
        <span id="pictureTitle-error" className="popup__error-message"></span>
        <input id="url" name="newUrl" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" />
        <span id="url-error" className="popup__error-message"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name='UpdateProfilePicture' title='Обновить аватар' onClose={closeAllPopups} submitButtonText="Сохранить">
        <input id="avatarUrl" name="newAvatar" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" />
        <span id="avatarUrl-error" className="popup__error-message"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeleteSubmitPopupOpen} name='UpdateRemovingCard' title='Вы уверены?' onClose={closeAllPopups} submitButtonText="Да"/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
