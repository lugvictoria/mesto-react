function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name}` + (props.isOpen && ' popup_opened')}>
    <div className="popup__container">
      <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form popup__form-profile" name={props.name} novalidate>
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
  );
}

export default PopupWithForm;