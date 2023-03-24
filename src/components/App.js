import '../index.css';
import React from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
<div class="page">
  <Header />
  <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
  />
  <Footer />
  <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        children=""
        isOpen={isEditProfilePopupOpen}
        />
  <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        />
  <PopupWithForm
        name="add-card"
        title="Новое место"
        children=""
        isOpen={isAddPlacePopupOpen}
        />
  <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        children=""
         />
   <div className="popup popup_type_add-card">
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
   <ImagePopup />

   <div className="popup popup_type_change-avatar">
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

   <div className="popup popup_type_confirm">
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
