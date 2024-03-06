import { AvatarItem, AvatarType } from "../../../types";
import { getAvatars, postProfile } from "../../../clients/api";
import { useEffect, useState } from "react";

import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { AvatarPicker } from "../components/avatar-picker";
import { Input } from "../../../components/Input";
import { Loader } from "../../../components/Loader";
import { isAxiosError } from "axios";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const CreateProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [avatars, setAvatars] = useState<AvatarItem[]>([]);

  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSelectAvatar = (avatar: AvatarType) => {
    setIsOpen(false);
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const { data } = await getAvatars();
      setAvatars(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleSave = async () => {
    if (!selectedAvatar || !name) {
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await postProfile({
        avatarId: selectedAvatar?.id || 0,
        name,
      });
      console.log("data", data);
      navigate("/profile");
      return;
    } catch (err) {
      const error = isAxiosError<{ message: string }>(err)
        ? err.response?.data?.message || ""
        : (err as Error)?.message || "";

      setError(error);
    }
    setIsLoading(false);
  };

  const isDisabled = isLoading || !selectedAvatar || !name;

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
                disabled={isLoading}
              />
            </div>
            <div className={styles.actions}>
              <button
                className="btn btn--full btn--white"
                onClick={handleSave}
                disabled={isDisabled}
              >
                Save
              </button>
              <button
                className="btn btn--full btn--primary"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Cancel
              </button>
            </div>
            {error && <Alert>{error}</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker
          avatars={avatars}
          onSelectAvatar={handleSelectAvatar}
          onClose={() => setIsOpen(false)}
        />
      ) : null}

      {isLoading && <Loader />}
    </>
  );
};
