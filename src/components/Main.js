function Main() {

  function handleEditAvatarClick() {
    const popup = document.querySelector('.popup_avatar');
    popup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popup = document.querySelector('.popup_profile-edit');
    popup.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popup = document.querySelector('.popup_card-add');
    popup.classList.add('popup_opened');
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
      onClick={handleEditAvatarClick}>
        <img
          className="profile__avatar-image"
          src="#"
          alt="аватар"/>
      </button>
    </div>
    <div className="profile__info">
      <div className="profile__edit">
        <h1 className="profile__title">Жак-Ив&nbsp;Кусто</h1>
        <button 
        className="profile__button-edit" 
        type="button" 
        aria-label="Редактировать"
        onClick={handleEditProfileClick}></button>
      </div>
      <p className="profile__subtitle">Исследователь&nbsp;океана</p>
    </div>
    <button 
    className="profile__button-add" 
    type="button" 
    aria-label="Добавить"
    onClick={handleAddPlaceClick}>
    </button>
  </div>
</section>

<section className="elements">

  <template id="card">
    <div className="card">
      <img
        src="#"
        alt="#"
        className="card__image"/>
      <div className="card__group">
        <h2 className="card__title">#</h2>
        <div className="card__like-button-group">
          <button
            type="button"
            className="card__like-button"
            aria-label="Добавить в избранное">
          </button>
          <span className="card__like-count">0</span>
        </div>
      </div>
      <button type="button" className="card__delete-button" aria-label="Удалить"></button>
    </div>
  </template>
  <template id="cardWithoutBasket">
    <div className="card">
      <img
        src="#"
        alt="#"
        className="card__image"/>
      <div className="card__group">
        <h2 className="card__title">#</h2>
        <div className="card__like-button-group">
          <button
            type="button"
            className="card__like-button"
            aria-label="Добавить в избранное">
          </button>
          <span className="card__like-count">0</span>
        </div>
      </div>
    </div>
  </template>
</section> 
</main> 
  );
}

export default Main;