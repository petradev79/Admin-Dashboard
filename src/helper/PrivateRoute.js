import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth.user ? children : <Navigate to='/login' />;
}
