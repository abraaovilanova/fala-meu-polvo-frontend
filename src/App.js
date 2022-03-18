import './App.css';
import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from './pages/Home/Home'
import Main from './pages/Main/Main'
import Sentence from './pages/Sentence/Sentence'
import NewSentence from './pages/NewSentence/NewSentence'
import Auth from './pages/Auth/Auth'

// Components
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Auth formType="signin"/>} />
        <Route path="/auth/login" element={<Auth formType="login" />} />
        <Route path="/new-sentence" element={<NewSentence />} />
        <Route path="/comunidade" element={<h1>Aqui será a comunidade</h1>} />
        <Route path="/:language" element={<Main />} />
        <Route path="/:language/:tag" element={<Sentence />} />
      </Routes>
    </div>
  );
}

export default App;
