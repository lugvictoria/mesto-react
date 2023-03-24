import React from "react";
import api from "../utils/api";
import Card from "./Card.js";


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

{cards.map((card) => (
  <Card
   card={card}
   key={card._id}
   onCardClick = {props.onCardClick}
  />
))}

</section> 
</main> 
);
}

export default Main;

