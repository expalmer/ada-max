import { useUserData } from "../../hooks/use-user-data";

export const Profile = () => {
  const user = useUserData();

  return (
    <div className="container">
      <div className="home">
        <h1 className="title">PROFILE</h1>
        <p>Aqui é o profle</p>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
  );
};
