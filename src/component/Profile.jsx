import { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login!</div>;
  return <div>Wellcome {user.userName}</div>;
}
export default Profile;
