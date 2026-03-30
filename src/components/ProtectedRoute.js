import { Navigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import VuiBox from "components/VuiBox";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        Loading...
      </VuiBox>
    );
  }

  if (!user) {
    return <Navigate to="/authentication/sign-in/cover" replace />;
  }

  return children;
};

export default ProtectedRoute;
