import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Lading from './pages/lading-page/index.js';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Lading/> } />
            </Routes>
        </BrowserRouter>
    )
}