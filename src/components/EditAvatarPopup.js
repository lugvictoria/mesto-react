import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}>
      <label className="popup__form">
        <input
          type="url"
          className="popup__input  popup__input_place_name"
          id="avatar-input"
          placeholder="Ссылка на картинку"
          name="avatarURL"
          required />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;