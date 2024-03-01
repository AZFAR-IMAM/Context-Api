import { useState, useContext } from "react";
import UserContext from "../context/Usercontext";

function Loging() {
  const { setUser } = useContext(UserContext);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter userName"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Loging;
