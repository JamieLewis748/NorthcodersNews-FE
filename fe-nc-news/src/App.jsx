
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';
import ArticleFull from './Components/ArticleFull';
import { Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Topic from './Components/Topic';
import Error404 from './Components/Error404';


function App() {

  return (
    <>
      <Header />
      <main className="main-body">
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleFull />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topic/:topic" element={<Topic />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
