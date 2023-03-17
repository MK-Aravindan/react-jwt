import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, setIsAuthenticated]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8080/api/v1/auth/logout", null, {
        headers: {
          Authorization: `${token}`,
        },
      });
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <div className="userpage">
      <h1>User Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
