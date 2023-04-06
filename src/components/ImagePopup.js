function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image` + (props.isOpen && " popup_opened")}
    >
      <figure className="popup__picture-container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__picture-image"
        />
        <figcaption className="popup__picture-title">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}
export default ImagePopup;