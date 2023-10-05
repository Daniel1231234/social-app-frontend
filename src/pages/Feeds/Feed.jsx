import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("LoggedInUser");
    console.log(user);
    setLoggedInUser(user);
  }, []);
  if (!loggedInUser) {
    navigate("/login");
  }
  return <div>This is feed page</div>;
}
export default Feed;
