import '../index.css';
import React from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from "./PopupWithForm";
import EditAvatarPopup from "./EditAvatarPopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

import api from "../utils/api";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(console.error);
  }, [])

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

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <label className="popup__form">
            <input
              type="text"
              className="popup__input  popup__input_place_name"
              placeholder="Название"
              required />
            <span className="popup__input-error link-input-error"></span>
            <input
              id="link-input"
              type="url"
              className="popup__input  popup__input_place_link"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span className="popup__input-error link-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={false}
          onClose={closeAllPopups}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
