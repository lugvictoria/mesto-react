import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input  popup__input_place_name"
          placeholder="Введите имя и фамилию"
          required />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input  popup__input_place_name"
          placeholder="Введите профессию"
          required />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;