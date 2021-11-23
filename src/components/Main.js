import Card from "./Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, userName, userDescription, userAvatar, userId, cards }) {
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container" onClick={onEditAvatar}>
                    <img className="profile__avatar" alt="Картинка профиля" src={userAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName ? userName : 'Жак-Ив Кусто'}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="pictures">
                {
                    cards.map(card => {
                        return (<Card card={card} key={card._id} onCardClick={onCardClick} userId={userId}/>)
                    })
                }
            </section>
        </main>
    );
}

export default Main;