import './App.css';
import Client from './Components/Client/Client';
import Fotter from './Components/Footer/Fotter';
import Header from './Components/Header/Header';
import Master from './Components/Master/Master';
import Allcoors from './Components/Allcoors/Allcoors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<Master />} />
                    {/* <Route path='/client' element={<Client />} /> */}
                    <Route path='/allcoors' element={<Allcoors />} />
                </Routes>
                <Fotter />
            </div>
        </Router>
    );
}

export default App;
