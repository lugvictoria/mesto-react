import React from "react";
import api from "../utils/api";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(console.error);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(person => person._id === currentUser._id);
    api.toggleLike(card._id, isLiked)
      .then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(console.error);
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__table">
          <div className="profile__avatar-outside">
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="Изменить аватар"
              onClick={onEditAvatar}>
              <img
                className="profile__avatar-image"
                src={currentUser.avatar}
                alt="аватар" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__button-edit"
                type="button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}>
          </button>
        </div>
      </section>

      <section className="cards">

        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike = {handleCardLike}
          />
        ))}

      </section>
    </main>
  );
}

export default Main;

