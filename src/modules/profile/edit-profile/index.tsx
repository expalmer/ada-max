import { AvatarItem, AvatarType } from "../../../types";
import { getAvatars, getProfile, putProfile } from "../../../clients/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { AvatarPicker } from "../components/avatar-picker";
import { AxiosError } from "axios";
import { Input } from "../../../components/Input";
import { Loader } from "../../../components/Loader";
import styles from "./index.module.css";

export const EditProfile = () => {
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [avatars, setAvatars] = useState<AvatarItem[]>([]);

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

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
      try {
        const { data: dataAvatar } = await getAvatars();
        const { data: dataProfile } = await getProfile(id);

        setAvatars(dataAvatar);

        setName(dataProfile.name);
        setSelectedAvatar(dataProfile.avatar);

        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(error.response?.data?.message || "Something went wrong");
      }
    }
    getData();
  }, [id]);

  const handleSave = async () => {
    if (!selectedAvatar || !name) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await putProfile(id, {
        avatarId: selectedAvatar?.id || 0,
        name,
      });
      console.log("data", data);
      navigate("/profile");
      return;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  const isDisabled = isLoading || !selectedAvatar || isLoading;

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Edit Profile</h1>
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
                Done
              </button>
              <button
                className="btn btn--full btn--primary"
                onClick={() => navigate(`/delete-profile/${id}`)}
              >
                Delete Profile
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
