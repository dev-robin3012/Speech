import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { user } from '../redux/reducers/user.reducer';

const ProtectedPage = ({ children }) => {
  const loggedUser = useSelector(user);
  const router = useRouter();

  useEffect(() => {
    if (!loggedUser) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser]);

  return children;
};

export default ProtectedPage;
