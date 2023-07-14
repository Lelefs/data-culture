import Image from 'next/image';
import styles from './image.module.css';

export default function ImageContainer({ src, alt }) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} fill className={styles.image} />
    </div>
  );
}
