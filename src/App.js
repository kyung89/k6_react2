import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Subway from './components/Subway';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot >
        <div className='w-full h-screen max-w-screen-lg mx-auto'>
          <div className='w-full'>
            <Nav />
          </div>
          <div className='grow overflow-y-auto'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/subway" element={<Subway/>} />
          </Routes>
          </div>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
