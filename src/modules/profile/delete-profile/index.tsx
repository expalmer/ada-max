import { deleteProfile, getProfile } from "../../../clients/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { AxiosError } from "axios";
import { Loader } from "../../../components/Loader";
import { ProfileType } from "../../../types";
import styles from "./index.module.css";

export const DeleteProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data } = await getProfile(id);
        setProfile(data);
        setIsLoading(false);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(error.response?.data?.message || "Something went wrong");
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    if (!profile) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await deleteProfile(id);
      console.log("data", data);
      navigate("/profile");
      return;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <Avatar
            image={
              profile ? `/images/${profile?.avatar.image}.webp` : undefined
            }
            disabled
          />

          <h4>{profile?.name}</h4>
        </div>

        <h1 className="title">Delete Profile ?</h1>

        <p className={styles.p}>
          This will permanently delete all settings and preferences for this
          profile, including My List and Continue Watching.
        </p>

        <div className={styles.actions}>
          <button
            className="btn btn--full btn--white"
            onClick={handleDelete}
            disabled={isLoading}
          >
            Delete Profile
          </button>
          <button
            className="btn btn--full btn--primary"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>
        {error && <Alert>{error}</Alert>}
      </div>

      {isLoading && <Loader />}
    </>
  );
};
