import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  return (
    <div className="pictures__element">
      <img className="pictures__picture" alt={card.name} src={card.link} onClick={() => onCardClick(card)} />
      <div className="pictures__info">
        <h3 className="pictures__title">{card.name}</h3>
        <div className="pictures__like-container">
          <button className={`pictures__like ${isLiked ? 'pictures__like_active' : ""}`} type="button" onClick={() => onCardLike(card)}></button>
          <p className="pictures__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {card.owner._id === currentUser._id ? (<button className="pictures__remove-button" onClick={() => onCardDelete(card)} type="button"></button>) : ""}
    </div>
  );
}

export default Card;