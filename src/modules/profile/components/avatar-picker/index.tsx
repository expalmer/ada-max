import { Avatar } from "../../../../components/Avatar";
import styles from "./index.module.css";

export const AvatarPicker = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <header className={styles.header}>
              <button className="btn btn--primary">Back</button>
              <h1 className="title">Choose an Avatar</h1>
              <button className="btn btn--primary">Skip</button>
            </header>
            <div className={styles.box}>
              <h4>Nome da trupe</h4>
              <div className={styles.box__items}>
                <Avatar image="/images/joel.webp" />
                <Avatar image="/images/joel.webp" />
                <Avatar image="/images/joel.webp" />
                <Avatar image="/images/joel.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
