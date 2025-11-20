import './App.css';
import Client from './Components/Client/Client';
import Fotter from './Components/Footer/Fotter';
import Header from './Components/Header/Header';
import Master from './Components/Master/Master';
import Allcoors from './Components/Allcoors/Allcoors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    const handleWhatsAppClick = () => {
        // const message =
        //   location.pathname === '/'
        //     ? 'Здравствуйте! Я хочу узнать подробнее о ваших курсах'
        //     : 'Здраствуйте! Я хочу узнать подробнее о процедурее ...';
        const message = 'Здравствуйте! Я хочу узнать подробнее о ваших курсах';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/79677803580?text=${encodedMessage}`, '_blank');
    };

    return (
        <Router>
            <div className='App'>
                <Header handleWhatsAppClick={handleWhatsAppClick} />
                <Routes>
                    <Route path='/' element={<Master handleWhatsAppClick={handleWhatsAppClick} />} />
                    {/* <Route path='/client' element={<Client />} /> */}
                    <Route path='/allcoors' element={<Allcoors />} />
                </Routes>
                <Fotter />
            </div>
        </Router>
    );
}

export default App;
