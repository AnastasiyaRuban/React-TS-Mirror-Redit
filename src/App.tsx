import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/components/Layout';
import { Header } from './shared/components/Header';
import { Content } from './shared/components/Content';
import { CardsList } from './shared/components/CardsList';
import { Dropdown } from './shared/components/Dropdown';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
