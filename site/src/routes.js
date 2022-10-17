import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Lading from './pages/lading-page/index.js';
import CadastroVoluntario from './pages/cadastro/cadastroVoluntario/index.js';
import PerfilUsuario from './pages/perfil/perfilUsuario/index.js'
import PerfilVoluntario from './pages/perfil/perfilVoluntario/index.js'
import Cadastro1 from './pages/cadastro/cadastroUsuario/index.js';
import HomeLogin from './pages/login/home/index.js';
import LoginPaciente from './pages/login/paciente/index.js';
import LoginDoVoluntario from './pages/login/voluntario/index.js';
import LoginDoADM from './pages/login/Admin/index.js';
import SolicitacoesPsic from './pages/solicitacoes/index.js';
import PoliticaPrivacidade from './pages/termos/index.js';
import Home from './pages/adm/home/index.js';
import CadastrosPendentes from './pages/adm/cadastros/index.js';



export default function Rotas() {
    
    return(
        <BrowserRouter>
            <Routes>
                {/* Landing Page */}
                <Route path='/' element={ <Lading /> } />
                {/* Cadastros */}
                <Route path='/cadastro/voluntario' element={ <CadastroVoluntario /> } />
                <Route path='/cadastro/paciente' element={ <Cadastro1 /> } />
                {/* Logins */}
                <Route path='/home/login' element={ <HomeLogin /> } />
                <Route path='/login/paciente' element={ <LoginPaciente /> } />
                <Route path='/login/voluntario' element={ <LoginDoVoluntario /> } />
                <Route path='/login/ADM' element={ <LoginDoADM /> } />
                {/* Perfis */}
                <Route path='/perfil/usuario/' element={ <PerfilUsuario/>} />
                <Route path='/perfil/voluntario' element={ <PerfilVoluntario /> } />
                {/* Solicitações */}
                <Route path='/solicitacoes' element={ <SolicitacoesPsic />} />
                {/* Termos */}
                <Route path='/politica-privacidade' element={ <PoliticaPrivacidade />} />
                {/* Admin */}
                <Route path='/admin' element={<Home />} />
                <Route path='/admin/cadastros' element={<CadastrosPendentes />} />


                
            </Routes>
        </BrowserRouter>
    )
}