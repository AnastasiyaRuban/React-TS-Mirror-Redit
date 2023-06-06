import { IPostData } from '../../types/interfaces';
import React, { createContext } from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export const postsContext = createContext<Array<IPostData>>([]);

export function PostsContextProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: String;
}) {
  const [data] = usePostsData(token);

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
