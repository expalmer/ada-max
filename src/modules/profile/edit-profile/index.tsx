import { Avatar } from "../../../components/Avatar";
import { Input } from "../../../components/Input";
import styles from "./index.module.css";

export const EditProfile = () => {
  return (
    <div className="container">
      <div className={styles.limiter}>
        <div className={styles.container}>
          <h1 className="title">Update Profile</h1>
          <div className="flex-center">
            <Avatar image="/images/joel.webp" />
          </div>
          <div>
            <Input label="Edit Profile" />
          </div>
          <div className={styles.actions}>
            <button className="btn btn--full btn--white">Done</button>
            <button className="btn btn--full btn--primary">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
