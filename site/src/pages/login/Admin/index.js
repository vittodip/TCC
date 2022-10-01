import './index.scss'
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import  LoadingBar from 'react-top-loading-bar'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { loginAdm } from '../../../api/adminApi';


export default function LoginADM(){
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate();
    const ref = useRef

    async function entrarClick(){
        try {
            const r = await loginAdm(email, senha);
            setTimeout(() =>{
                navigate('/home/login');
            }, 3000);
            
        } catch (err) {
            ref.current.complete();
            setCarregando(false)
            if(err.response.status === 401){
                setErro(err.response.data.erro)
            }
        }
    }

    return(
        <main>
            <ToastContainer/>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <input type='text' value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"/>
            <button onClick={entrarClick}>Login</button>


        </main>

    )
}