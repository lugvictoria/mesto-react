function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name}` + (props.isOpen && ' popup_opened')}>
    <div className="popup__container">
      <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form popup__form-profile" name={props.name} noValidate>
      {props.children}
          <button className="popup__save-button" type="submit">{props.buttonText}</button>
      </form>
      <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}></button>
    </div>
    </div>
  );
}

export default PopupWithForm;