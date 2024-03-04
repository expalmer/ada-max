import { Avatar } from "../../../components/Avatar";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="container">
      <div className="section">
        <h1 className="title">Who’s Watching?</h1>

        <div className="avatars">
          <button className="avatar__item">
            <Avatar image="/images/joel.webp" />
            <div className="avatar__name">New Profile</div>
          </button>
          <button className="avatar__item">
            <Avatar image="/images/ellie.webp" />
            <div className="avatar__name">New Profile</div>
          </button>
          <button className="avatar__item">
            <Avatar image="/images/morty.webp" />
            <div className="avatar__name">New Profile</div>
          </button>

          <Link to="/create-profile" className="avatar__item avatar__item--new">
            <div className="avatar__image">+</div>
            <div className="avatar__name">New Profile</div>
          </Link>
        </div>

        <div className="avatar__actions">
          <button className="btn btn--primary">Edit</button>
        </div>
      </div>
    </div>
  );
};
