import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); // або '#app' — залежно від твоєї HTML-структури

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <div className={styles.info}>
        {image.user?.name && <p><strong>Author:</strong> {image.user.name}</p>}
        {image.likes !== undefined && <p><strong>Likes:</strong> {image.likes}</p>}
        {image.description && <p><strong>Description:</strong> {image.description}</p>}
      </div>
    </Modal>
  );
}
