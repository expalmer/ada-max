import { IconEdit } from "../Icons";
import clsx from "clsx";
import styles from "./index.module.css";
import user from "../../assets/user.svg";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
  size?: "medium" | "large";
  disabled?: boolean;
};

export const Avatar = ({
  image,
  isEdit,
  size = "medium",
  disabled,
}: AvatarProps) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.large]: size === "large",
        [styles.disabled]: disabled,
      })}
    >
      <img src={image || user} alt="" />
      {isEdit && (
        <div className={styles.icon}>
          <IconEdit />
        </div>
      )}
    </div>
  );
};
