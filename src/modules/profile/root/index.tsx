import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Avatar } from "../../../components/Avatar";
import { Loader } from "../../../components/Loader";
import { ProfileType } from "../../../types";
import { getProfiles } from "../../../clients/api";

export const Profile = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { data } = await getProfiles();
      setProfiles(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleClick = (id: number) => {
    navigate(editMode ? `/edit-profile/${id}` : "/");
  };

  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="title">Who’s Watching?</h1>

          <div className="avatars">
            {profiles.map((profile) => (
              <button
                className="avatar__item"
                key={profile.id}
                onClick={() => handleClick(profile.id)}
              >
                <Avatar
                  image={`/images/${profile.avatar.image}.webp`}
                  isEdit={editMode}
                />
                <div className="avatar__name">{profile.name}</div>
              </button>
            ))}
            <Link
              to="/create-profile"
              className="avatar__item avatar__item--new"
            >
              <div className="avatar__image">+</div>
              <div className="avatar__name">New Profile</div>
            </Link>
          </div>

          <div className="avatar__actions">
            <button
              className="btn btn--primary"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Done" : "Edit"}
            </button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
