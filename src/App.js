import './App.css';
import React from 'react';
import Fotter from './Components/Footer/Fotter';
import Header from './Components/Header/Header';
import { AllCoors } from './Components/Master/Components/AllCoors/AllCoors';
import Master from './Components/Master/Master';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coors from './Static/Coors.json';
import { Models } from './Components/Models/Models';

export const AppContext = React.createContext()

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
                <AppContext.Provider value={handleWhatsAppClick}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Master />} />
                        <Route path='/allCoors' element={<div className='AllCoors'>
                            {
                                Coors.map((value) => (<AllCoors {...value} />))
                            }
                        </div>}></Route>
                        <Route path='/models' element={<Models />}></Route>
                    </Routes>
                    <Fotter />
                </AppContext.Provider>
            </div>
        </Router>
    );
}

export default App;
