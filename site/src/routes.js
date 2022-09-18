import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Lading from './pages/lading-page/index.js';
import CadastroVoluntario from './pages/cadastro/cadastroVoluntario/index.js';
import PerfilUsuario from './pages/perfil-usuario/index.js';


export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Lading /> } />
                <Route path='/cadastro/voluntario' element={ <CadastroVoluntario /> } />
                <Route path='/perfil/usuario' element={ <PerfilUsuario/>} />
            </Routes>
        </BrowserRouter>
    )
}