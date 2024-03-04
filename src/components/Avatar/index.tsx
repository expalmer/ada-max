import { IconEdit } from "../Icons";
import styles from "./index.module.css";
import user from "../../assets/user.svg";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
};

export const Avatar = ({ image, isEdit }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <img src={image || user} alt="" />
      {isEdit && (
        <div className={styles.icon}>
          <IconEdit />
        </div>
      )}
    </div>
  );
};
