import React from "react";

function Card({ card, onCardClick }) {
  return (
    <div className="pictures__element">
        <img className="pictures__picture" alt={card.name} src={card.link} onClick={() => onCardClick(card)}/>
        <div className="pictures__info">
            <h3 className="pictures__title">{card.name}</h3>
            <div className="pictures__like-container">
                <button className="pictures__like" type="button"></button>
                <p className="pictures__like-counter">{card.likes.length}</p>
            </div>
        </div>
        <button className="pictures__remove-button" type="button"></button>
    </div>
  );
}

export default Card;