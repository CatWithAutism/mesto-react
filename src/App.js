import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import React, { useEffect } from 'react';
import {api} from './utils/Api.js';
import ImagePopup from './components/ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteSubmitPopupOpen, setIsDeleteSubmitPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(undefined);

  const handleEditAvatarClick = () =>{
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () =>{
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () =>{
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
    setSelectedCard(undefined);
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
        <Header/>
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          userName={currentUser.name}
          userDescription={currentUser.about}
          userAvatar={currentUser.avatar}
          cards={cards}/>
        <Footer/>
      </div>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name='Profile' title='Редактировать профиль' onClose={closeAllPopups}>
        <input id="name" placeholder="Имя" name="newName" type="text" required className="popup__input-field" minLength="2" maxLength="40" />
        <span id="name-error" className="popup__error-message"></span>
        <input id="about" placeholder="Вид деятельности" name="newTitle" type="text" required className="popup__input-field" minLength="2" maxLength="200" />
        <span id="about-error" className="popup__error-message"></span>
        <button className="popup__submit-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} name='AddPicture' title='Новое место' onClose={closeAllPopups}>
        <input id="pictureTitle" name="newTitle" type="text" required className="popup__input-field" placeholder="Название" maxLength="30" minLength="2" />
        <span id="pictureTitle-error" className="popup__error-message"></span>
        <input id="url" name="newUrl" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" />
        <span id="url-error" className="popup__error-message"></span>
        <button className="popup__submit-button" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} name='UpdateProfilePicture' title='Обновить аватар' onClose={closeAllPopups}>
        <input id="avatarUrl" name="newAvatar" type="url" required className="popup__input-field" placeholder="Ссылка на картинку" />
        <span id="avatarUrl-error" className="popup__error-message"></span>
        <button className="popup__submit-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeleteSubmitPopupOpen} name='UpdateRemovingCard' title='Вы уверены?' onClose={closeAllPopups}>
        <button className="popup__submit-button" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
