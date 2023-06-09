import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((person) => person._id === currentUser._id);
  const activeLikeButtonClassName = "card__like-button_active";

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-button-group">
          <button
            type="button"
            className={
              "card__like-button " + (isLiked && activeLikeButtonClassName)
            }
            aria-label="Добавить в избранное"
            onClick={handleCardLike}
          ></button>
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && (
        <button
          aria-label="Удалить"
          type="button"
          className="card__delete-button"
          onClick={handleCardDelete}
        />
      )}
    </div>
  );
}

export default Card;


