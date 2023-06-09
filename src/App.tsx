import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/components/Layout';
import { Header } from './shared/components/Header';
import { Content } from './shared/components/Content';
import { CardsList } from './shared/components/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postContext';

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider token={token}>
        <Layout>
          <Header />
          <Content>
            <PostsContextProvider token={token}>
              <CardsList />
            </PostsContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
