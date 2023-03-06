
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { About } from './Pages/About';
import { Blog } from './Pages/Blog';
import { BlogDetail } from './Pages/BlogDetail';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer >
        <p>Copyrigth 2023 It Academy</p>
      </footer>
    </>
  );
}

export default App;