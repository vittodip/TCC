import './index.scss'

//endpoint
import { alterarUsuario, carregarUsuario } from '../../api/usuarioApi'
import { alterarVoluntario, carregarVoluntario } from '../../api/voluntarioApi';

import { useEffect, useState } from 'react'

// npm

import { toast, Toaster } from 'react-hot-toast'

import Storage from 'local-storage'

export default function AlterarInfos(props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    

    
    

    async function carregarInfoUsuario() {
        try{
            if(Storage('usuario-logado')) {
                const idUser = Storage('usuario-logado').id;
                const r = await carregarUsuario(idUser)
                setNome(r.nome)
                setEmail(r.email)
                setTelefone(r.telefone)
            }
        }
        catch(err) {
            toast.error(err.message)
        }

    }

    async function carregarInfoPsicologo() {
        try{
            if(Storage('voluntario-logado')) {
                const idPsic = Storage('voluntario-logado').id;
                const r = await carregarVoluntario(idPsic)
                setNome(r.nome)
                setEmail(r.email)
                setTelefone(r.telefone)
            }
        }
        catch(err) {
            toast.error(err.message)
        }
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
            if(Storage('usuario-logado')) {
                const idUser = Storage('usuario-logado').id;
                
                await alterarUsuario(idUser, nome, email, telefone)
                toast.success('Informações alteradas com sucesso.')
            }
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
            if(Storage('voluntario-logado')) {
                const idPsic = Storage('voluntario-logado').id;
                
                await alterarVoluntario(idPsic, nome, email, telefone)
                toast.success('Informações alteradas com sucesso.')
            }
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

            <Toaster/>
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