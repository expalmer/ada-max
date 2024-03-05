import { AvatarItem, AvatarType } from "../../../types";
import { getAvatars, postProfile } from "../../../clients/api";
import { useEffect, useState } from "react";

import { Avatar } from "../../../components/Avatar";
import { AvatarPicker } from "../components/avatar-picker";
import { Input } from "../../../components/Input";
import styles from "./index.module.css";

export const CreateProfile = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [avatars, setAvatars] = useState<AvatarItem[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);

  const handleSelectAvatar = (avatar: AvatarType) => {
    console.log(avatar);
    setIsOpen(false);
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await getAvatars();
      setAvatars(data);
    }
    getData();
    console.log("MONTOU O COMPONENTE");
    return () => {
      console.log("DESMONTOU O COMPONENTE");
    };
  }, []);

  const handleSave = async () => {
    const { data } = await postProfile({
      avatarId: selectedAvatar?.id || 0,
      name,
    });
    console.log({ data });
  };

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Create Profile</h1>
            <div className="flex-center" onClick={() => setIsOpen(!isOpen)}>
              <Avatar
                image={
                  selectedAvatar
                    ? `/images/${selectedAvatar?.image}.webp`
                    : undefined
                }
                isEdit
              />
            </div>
            <div>
              <Input
                label="Profile Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className={styles.actions}>
              <button className="btn btn--full btn--white" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn--full btn--primary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker avatars={avatars} onSelectAvatar={handleSelectAvatar} />
      ) : null}
    </>
  );
};
