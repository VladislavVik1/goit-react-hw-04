import styles from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}
