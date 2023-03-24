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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
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
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        children={(
          <label class="popup__form">
            <input
              type="url"
              class="popup__input  popup__input_place_name"
              id="avatar-input"
              placeholder="Ссылка на аватар"
              name="avatarURL"
              required />
            <span class="popup__input-error avatar-input-error"></span>
          </label>
        )}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        />
  <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        children={(
          <>
          <label class="popup__field">
            <input
              type="text"
              class="popup__input  popup__input_place_name"
              required />
            <span class="popup__input-error name-input-error"></span>
          </label>
          <label class="popup__field">
            <input
              type="text"
              class="popup__input  popup__input_place_name"             
              required />
            <span class="popup__input-error job-input-error"></span>
          </label>
          </>
        )}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />
<PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
          <label class="popup__form">
            <input
              type="text"
              class="popup__input  popup__input_place_name"
              required />
            <span class="popup__input-error link-input-error"></span>
          </label>
          </>
        )}
        />
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        onClose={closeAllPopups}
        />
      <ImagePopup />

   <ImagePopup />

</div>
  );
}  

export default App;
