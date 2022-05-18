import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useAuth } from '../context/AuthContext';
import { onAuthStateChanged, auth } from '../firebase/config';
import RedirectPage from './RedirectPage';

export default function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(true);
  // const { currentUser } = useAuth();

  function authCheck(url) {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];

    onAuthStateChanged(auth, (user) => {
      if (!user && !publicPaths.includes(path)) {
        setTimeout(() => {
          setAuthorized(false);
          router.push({
            pathname: '/login',
            query: { returnUrl: router.asPath },
          });
        }, 500);
      } else if (user && publicPaths.includes(path)) {
        setAuthorized(true);
        router.push({
          pathname: '/Medications',
        });
      } else {
        setAuthorized(true);
      }
    });
  }

  useEffect(() => {
    authCheck(router.asPath);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
    // currentUser
  }, []);

  return authorized ? children : <RedirectPage />;
}
