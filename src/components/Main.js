import React from "react";
import api from "../utils/api";


function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState('#');
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.error(err));

    api.getInitialCards()
    .then(res => {
      setCards(res);
    })
    .catch(err => console.error(err));
  }, []);

return (
<main>
<section className="profile">
<div className="profile__table">
  <div className="profile__avatar-outside">
    <button 
    className="profile__avatar-button" 
    type="button" 
    aria-label="Изменить аватар" 
    onClick={props.onEditAvatar}>
      <img
        className="profile__avatar-image"
        src={userAvatar}
        alt="аватар"/>
    </button>
  </div>
  <div className="profile__info">
    <div className="profile__edit">
      <h1 className="profile__title">{userName}</h1>
      <button 
      className="profile__button-edit" 
      type="button" 
      aria-label="Редактировать профиль"
      onClick={props.onEditProfile}></button>
    </div>
    <p className="profile__subtitle">{userDescription}</p>
  </div>
  <button 
  className="profile__button-add" 
  type="button" 
  aria-label="Добавить"
  onClick={props.onAddPlace}>
  </button>
</div>
</section>

<section className="cards">

{cards.map(card => (

<div class="card" key={card._id}>
<img
  src={card.link}
  alt={card.name}
  class="card__image" />
<div class="card__group">
  <h2 class="card__title">{card.name}</h2>
  <div class="card__like-button-group">
    <button
    type="button"
    class="card__like-button"
    aria-label="Добавить в избранное"></button>
    <span class="card__like-count"></span>
  </div>
</div>
<button
  type="button"
  class="card__delete-button"
  aria-label="Удалить"></button>
</div>

))}

</section> 
</main> 
);
}

export default Main;

