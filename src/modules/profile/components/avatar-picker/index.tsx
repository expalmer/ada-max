import { AvatarItem, AvatarType } from "../../../../types";

import { Avatar } from "../../../../components/Avatar";
import styles from "./index.module.css";

type Props = {
  avatars: AvatarItem[];
  onSelectAvatar: (avatar: AvatarType) => void;
};

export const AvatarPicker = ({ avatars, onSelectAvatar }: Props) => {
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

            {avatars.map((avatar) => {
              return (
                <div className={styles.box} key={avatar.name}>
                  <h4 id={avatar.name}>{avatar.name}</h4>
                  <div className={styles.box__items}>
                    {avatar.items.map((item) => (
                      <span onClick={() => onSelectAvatar(item)} key={item.id}>
                        <Avatar image={`/images/${item.image}.webp`} />
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
