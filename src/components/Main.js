import React, { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../context/CurrentUserContext";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete, cards }) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container" onClick={onEditAvatar}>
                    <img className="profile__avatar" alt="Картинка профиля" src={currentUser.avatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="pictures">
                {
                    cards.map(card => {
                        return (<Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                            userId={currentUser._id}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />)
                    })
                }
            </section>
        </main>
    );
}

export default Main;