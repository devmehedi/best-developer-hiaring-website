import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Marketplace from './components/Marketplace/Marketplace';

function App() {
  useEffect(() => {
    fetch('./tools.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Marketplace></Marketplace>
    </div>
  );
}

export default App;
