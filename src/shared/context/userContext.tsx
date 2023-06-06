import { IUserContextData } from '../../types/interfaces';
import React, { createContext } from 'react';
import { useUserData } from '../../hooks/useUserData';

export const userContext = createContext<IUserContextData>({});

export function UserContextProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: String;
}) {
  const [data] = useUserData(token);
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
