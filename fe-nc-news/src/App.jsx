import { useState } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';

function App() {

  return (
    <>
      <Header />
      <main className="main-body">
        <Nav />
        <ArticleList />
      </main>
    </>
  );
}

export default App;
