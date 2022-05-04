import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
          </Routes>  
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
