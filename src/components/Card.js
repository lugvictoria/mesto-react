function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div class="card">
    <img
          src={props.card.link}
          alt={props.card.name}
          class="card__image"
          onClick={handleCardClick} />
    <div class="card__group">
    <h2 class="card__title">{props.card.name}</h2>
      <div class="card__like-button-group">
        <button
        type="button"
        class="card__like-button"
        aria-label="Добавить в избранное"></button>
        <span class="card__like-count">{props.card.likes.length}</span>
      </div>
    </div>
    <button
      type="button"
      class="card__delete-button"
      aria-label="Удалить"></button>
    </div>
    
    )}

export default Card;

