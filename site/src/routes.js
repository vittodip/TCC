import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Lading from './pages/lading-page/index.js';
import CadastroVoluntario from './pages/cadastro/cadastroVoluntario/index.js';

import PerfilUsuario from './pages/perfil/perfilUsuario/index.js'
import PerfilVoluntario from './pages/perfil/perfilVoluntario/index.js'




export default function Rotas() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Lading /> } />
                <Route path='/cadastro/voluntario' element={ <CadastroVoluntario /> } />

                <Route path='/perfil/usuario/:usuarioParam' element={ <PerfilUsuario/>} />

                <Route path='/perfil/voluntario/:voluntarioParam' element={ <PerfilVoluntario /> } />


            </Routes>
        </BrowserRouter>
    )
}