import logo from './images/header-logo.svg';
import './index.css';
import React from 'react';


function App() {
  return (
<div class="page">
     <header className="header">
     <img className="header__logo" src={logo}  alt="Логотип Место"/>
     </header>
  <main>
    <section className="profile">
      <div className="profile__table">
        <div className="profile__avatar-outside">
          <button className="profile__avatar-button" type="button" aria-label="Изменить аватар">
            <img
              className="profile__avatar-image"
              src="#"
              alt="аватар"/>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">Жак-Ив&nbsp;Кусто</h1>
            <button className="profile__button-edit" type="button" aria-label="Редактировать"></button>
          </div>
          <p className="profile__subtitle">Исследователь&nbsp;океана</p>
        </div>
        <button className="profile__button-add" type="button" aria-label="Добавить"></button>
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

   <div className="popup popup_profile-edit">
    <div className="popup__container">
      <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form popup__form-profile" name="form_profile-edit" novalidate>
        <input
          id="name-input"
          type="text"
          className="popup__input popup__input_data_name"
          placeholder="Введите имя и фамилию"
          name="name"
          minlength="2"
          maxlength="40"
          required/>
        <span className="popup__input-error name-input-error"></span>
        <input
          id="job-input"
          type="text"
          className="popup__input popup__input_data_profession"
          placeholder="Введите профессию"
          name="profession"
          minlength="2"
          maxlength="200"
          required/>
        <span className="popup__input-error job-input-error"></span>
        <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
      </form>
    </div>
   </div>
   <div className="popup popup_card-add">
    <div className="popup__container">
      <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form popup__form-card" name="form_card-add" novalidate>
        <input
          id="title-input"
          type="text"
          className="popup__input  popup__input_place_name"
          placeholder="Название"
          name="name"
          minlength="2"
          maxlength="30"
          required/>
        <span className="popup__input-error title-input-error"></span>
        <input
          id="link-input"
          type="url"
          className="popup__input  popup__input_place_link"
          placeholder="Ссылка на картинку"
          name="link"
          required/>
        <span className="popup__input-error link-input-error"></span>
        <button className="popup__save-button" type="submit" aria-label="Создать">Создать</button>
      </form>
    </div>
   </div>
   <div className="popup popup_picture" id="popup__picture">
    <div className="popup__picture-container">
      <button
        className="popup__button-close"
        type="button"
        aria-label="Закрыть"></button>
      <img
        src="#"
        alt="#"
        className="popup__picture-image"/>
      <figcaption className="popup__picture-title">#</figcaption>
    </div>
   </div>
   <div className="popup popup_picture" id="popup__picture">
    <div className="popup__picture-container">
      <button
        className="popup__button-close"
        type="button"
        aria-label="Закрыть"></button>
      <img
        src="#"
        alt="#"
        className="popup__picture-image"/>
      <figcaption className="popup__picture-title">#</figcaption>
    </div>
   </div>

   <div className="popup popup_avatar">
    <div className="popup__container">
      <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="form_change_avatar" novalidate>
        <input
          id="avatar-input"
          type="url"
          className="popup__input  popup__input_place_name"
          placeholder="Ссылка на аватар"
          name="avatarURL"
          required/>
        <span className="popup__input-error avatar-input-error"></span>
        <button className="popup__save-button" type="submit" aria-label="Создать">Обновить</button>
      </form>
    </div>
   </div>

   <div className="popup popup_delete">
      <div className="popup__container">
        <form action="#" className="popup__form" name="deleteCard" novalidate>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__save-button" type="submit" aria-label="Подтвердить">Да</button>
        </form>
      </div>
   </div>

  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
  </footer>
</div>
  );
}  

export default App;
