import './App.css';
import Fotter from './Components/Footer/Fotter';
import Header from './Components/Header/Header';
import { AllCoors } from './Components/Master/Components/AllCoors/AllCoors';
import Master from './Components/Master/Master';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coors from './Static/Coors.json';
import { Models } from './Components/Models/Models';

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
                    <Route path='/allCoors' element={<div className='AllCoors'>
                        {
                            Coors.map((value) => (<AllCoors {...value} />))
                        }
                    </div>}></Route>
                    <Route path='/models' element={<Models />}></Route>
                </Routes>
                <Fotter />
            </div>
        </Router>
    );
}

export default App;
