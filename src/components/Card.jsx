function Card({ card_container, children, onClick }) {
  return (
    <div className={card_container} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;