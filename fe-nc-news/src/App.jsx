
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';
import ArticleFull from './Components/ArticleFull';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />
      <main className="main-body">
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleFull />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
