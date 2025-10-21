import './App.css';
import Card from './Components/Card/Card';
import Fotter from './Components/Footer/Fotter';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Stocks from './Components/Stocks/Stocks';
import Whyus from './Components/Whyus/Whyus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Student() {
  return (
    <div>
      <Main />
      <Stocks />
      <Whyus />
      <Card />
      <Fotter />
    </div>
  )
}

function Client() {
  return (
    <div>
      <h1>Тут пока ничего нет приходите позже</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/client' element={<Client />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
