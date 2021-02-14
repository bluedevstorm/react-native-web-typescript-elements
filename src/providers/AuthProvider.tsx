import React, { useState } from 'react';
import firebase from 'firebase';
import { fbAuth } from 'service/firebase';
import createCtx from 'utils/createCtx';

interface IProps {
  children?: React.ReactElement;
  initialAuthUser?: firebase.User;
}

interface IContext {
  user: firebase.User | undefined;
  setUser(user: firebase.User | undefined): void;
}

const [useCtx, Provider] = createCtx<IContext>();

function AuthProvider(props: IProps): React.ReactElement {
  const { children } = props;
  const [user, setUser] = useState<firebase.User | undefined>(
    props.initialAuthUser,
  );

  const actions = {
    setUser: (_user: firebase.User | undefined) => {
      setUser(_user);
    },
    signin: async (email: string, password: string) => {
      return fbAuth
        .signInWithEmailAndPassword(email, password)
        .then((response: firebase.auth.UserCredential) => {
          if (response.user) {
            setUser(response.user);
            return response.user;
          }
        });
    },
    signout: async () => {
      return fbAuth.signOut().then(() => {
        setUser(undefined);
      });
    },
  };

  return <Provider value={{ user, ...actions }}>{children}</Provider>;
}

const AuthContext = {
  useAuthContext: useCtx,
  AuthProvider,
};

export { useCtx as useAuthContext, AuthProvider };
export default AuthContext;
