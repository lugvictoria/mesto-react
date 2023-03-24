import logo from './images/header-logo.svg';
import './index.css';
import React from 'react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";

function App() {
  return (
<div class="page">
  <Header />
  <Main />
  <Footer />
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

   
</div>
  );
}  

export default App;
