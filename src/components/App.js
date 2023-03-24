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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
<div class="page">
  <Header />
  <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
              placeholder="Введите имя и фамилию"
              required />
            <span class="popup__input-error name-input-error"></span>
          </label>
          <label class="popup__field">
            <input
              type="text"
              class="popup__input  popup__input_place_name"
              placeholder="Введите профессию"    
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
              placeholder="Название"
              required />
            <span class="popup__input-error link-input-error"></span>
            <input
              id="link-input"
              type="url"
              class="popup__input  popup__input_place_link"
              placeholder="Ссылка на картинку"
              name="link"
              required/>
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

       <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
        isOpen = {isImagePopupOpen}
        />

</div>
  );
}  

export default App;
