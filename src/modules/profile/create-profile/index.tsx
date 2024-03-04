import { Avatar } from "../../../components/Avatar";
import { AvatarPicker } from "../components/avatar-picker";
import { Input } from "../../../components/Input";
import styles from "./index.module.css";

export const CreateProfile = () => {
  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Create Profile</h1>
            <div className="flex-center">
              <Avatar image="" />
            </div>
            <div>
              <Input label="Profile Name" />
            </div>
            <div className={styles.actions}>
              <button className="btn btn--full btn--white">Save</button>
              <button className="btn btn--full btn--primary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <AvatarPicker />
    </>
  );
};
