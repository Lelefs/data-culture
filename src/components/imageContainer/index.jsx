import Image from "next/image";
import styles from "./image.module.css";

export default function ImageContainer({ src, alt, width }) {
  return (
    <div className={styles.container} style={width ? { maxWidth: width } : {}}>
      <Image src={src} alt={alt} fill className={styles.image} />
    </div>
  );
}
