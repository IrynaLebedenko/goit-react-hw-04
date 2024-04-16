import css from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal, getCard }) => {
  const handleClick = () => {
    getCard(photo);
    openModal();
    console.log(photo);
  };

  return (
    <div>
      <img
        className={css.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;