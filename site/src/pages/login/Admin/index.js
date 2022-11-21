import './index.scss'
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Storage from 'local-storage'


import { loginAdm } from '../../../api/adminApi.js';


export default function LoginADM() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate();
    const ref = useRef();

    const idadmin = localStorage.getItem("id");

    useEffect(() => {
        if (Storage('admin-logado')) {
            navigate(`/admin`);
        }
    }, [])


    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);
        try {
            const r = await loginAdm(email, senha);
            const id = r.id;
            Storage('admin-logado', r);
            localStorage.setItem("id", id)
            setTimeout(() => {
                navigate(`/admin`);
            }, 3000)



        } catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const btn = document.querySelector("#send");
            btn.click();
        }
    })

    return (
        <main className='pagADMlog'>
            <LoadingBar color='#79458B' ref={ref} />
            <img src='/assets/images/logonat.png' className='logoNat' />
            <img src='/assets/images/hominhodeescada.png' className='img' />
            <img src='/assets/images/programador.png' className='img2' />
            <Link to='/' className='botaozin'>Página Inicial</Link>
            <div className='inputs'>
                <h1>Login - Administrador</h1>
                <div className='credenciais'>
                    <label>E-mail</label><input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className='credenciais'>
                    <label>Senha</label><input type='password' value={senha} onChange={e => setSenha(e.target.value)} placeholder="**************" />
                </div>
                <button onClick={entrarClick} id='send' ><img src='/assets/images/portaentrar.png' /></button>
            </div>


        </main>

    )
}