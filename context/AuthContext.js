import React, { useContext, useState, useEffect, useMemo } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "../firebase/config";
import { useRouter } from "next/router";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    displayName: null,
    email: null,
    id: null,
    photo: null,
  });
  const router = useRouter();

  async function signInUser() {
    try {
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (err) {
      console.log("Error signing in with google aith: ", err);
      return null;
    }
  }

  function signOutUser() {
    return signOut(auth).then(() => {
      router.push("/login");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      signInUser,
      signOutUser,
      setCurrentUser,
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
