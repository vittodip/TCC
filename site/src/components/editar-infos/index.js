import './index.scss'

//endpoint
import { alterarUsuario, carregarUsuario } from '../../api/usuarioApi'
import { alterarVoluntario, carregarVoluntario } from '../../api/voluntarioApi';

import { useEffect, useState } from 'react'

// npm

import { ToastContainer, toast } from 'react-toastify';

import Storage from 'local-storage'

export default function AlterarInfos(props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const id = Storage('usuario-logado').id;

    

    async function carregarInfoUsuario() {
        const r = await carregarUsuario(id)
        setNome(r.nome)
        setEmail(r.email)
        setTelefone(r.telefone)
    }

    async function carregarInfoPsicologo() {
        const r = await carregarVoluntario(id)
        setNome(r.nome)
        setEmail(r.email)
        setTelefone(r.telefone)
    }

    useEffect(() =>{
        if(props.perfil === "voluntario") {
            carregarInfoPsicologo()
        }
        else{
            carregarInfoUsuario()
        }
    }, [])

    async function salvarInfoUsuario() {
        try {
            await alterarUsuario(id, nome, email, telefone)
            toast.success('Informações alteradas com sucesso.')
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }

    async function salvarInfoPsic() {
        try {
            await alterarVoluntario(id, nome, email, telefone)
            toast.success('Informações alteradas com sucesso.')
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }






    return (

        <main className='pop-alterar'>

            <ToastContainer />
            <h2>Alterar Informações</h2>
            
        <div className="inputs">
            <div className="input-label">
                <label>Nome</label>
                <input type="text" placeholder='Nome e Sobrenome' value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className="input-label">
                <label>E-mail</label>
                <input type="text" placeholder='email@usuario' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="input-label">
                <label>Telefone</label>
                <input type="text" placeholder='(99) 99999-9999' value={telefone} onChange={e => setTelefone(e.target.value)} />
            </div>

            

        </div>

                {props.perfil === 'usuario' &&
                    <button onClick={salvarInfoUsuario} className="botao-salvar" >Salvar</button>
                }
                {props.perfil === 'voluntario' &&
                    <button onClick={salvarInfoPsic} className="botao-salvar" >Salvar</button>
                } 
            

        </main>

    )

}