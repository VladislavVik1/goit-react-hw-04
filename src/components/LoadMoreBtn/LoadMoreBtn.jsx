import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
