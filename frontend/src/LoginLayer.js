import { useAuth } from "./context/AuthContext";
import Login from "./landing_page/Login";

const LoginLayer = () => {
  const { showLoginModal, setShowLoginModal } = useAuth();

  return (
    <Login open={showLoginModal} onClose={() => setShowLoginModal(false)} />
  );
};

export default LoginLayer;
