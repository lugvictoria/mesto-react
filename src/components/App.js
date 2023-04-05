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

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(console.error);
    }, []);

    React.useEffect(() => {
      api.getInitialCards()
        .then(res => {
          setCards(res);
        })
        .catch(console.error);
    }, []);

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
      .catch(console.error);
    }
  
    function handleUpdateAvatar({avatar}) {
      api.changeAvatar(avatar)
        .then(newUserInfo => {
          setCurrentUser(newUserInfo);
          closeAllPopups();
        })
        .catch(console.error);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(person => person._id === currentUser._id);
    api.toggleLike(card._id, isLiked)
      .then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    const cardId = card._id;
    api.deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter(card => card._id !== cardId));
      })
      .catch(console.error);
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />
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
