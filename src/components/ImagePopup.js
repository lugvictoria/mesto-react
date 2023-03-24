function ImagePopup() {

  return (
<div className="popup popup_picture" id="popup__picture">
<div className="popup__picture-container">
  <button
    className="popup__button-close"
    type="button"
    aria-label="Закрыть"></button>
  <img
    src="#"
    alt="#"
    className="popup__picture-image"/>
  <figcaption className="popup__picture-title">#</figcaption>
</div>
</div>
  );
}


export default ImagePopup;