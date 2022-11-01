import './index.scss'
import { alterarSolicitacao, carregarSolicitacaoUsuario } from '../../api/solicitacaoApi'

import { useEffect, useState } from 'react'

// npm

import { ToastContainer, toast } from 'react-toastify'
import Storage from 'local-storage'


export default function AlterarSolicitacao(props) {

    

    const [solicitacao, setSolicitacao] = useState()

    const [assunto, setAssunto] = useState('')
    

    async function carregarSolicitacao() {
        if(Storage('usuario-logado')) {
            const userId = Storage('usuario-logado').id;
            const resposta = await carregarSolicitacaoUsuario(userId, props.solicitacaoId)
            setAssunto(resposta.assunto)
        }
    }

    async function salvarSolicitacao() {
        try {
                await alterarSolicitacao(solicitacao, assunto)
                toast.success('Solicitação alterada com sucesso.')
            
        } catch (err) {
            if (err.response)
            toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            } 
        }
    }



    useEffect(() => {
        carregarSolicitacao()
    }, [])

    


    return (
        <main className='alterar-sol-main'>
             <ToastContainer />
            <h2>Alterar Solicitação</h2>

            <textarea value={assunto} onChange={e => setAssunto(e.target.value)}></textarea>

            <button onClick={salvarSolicitacao}>Salvar</button>
        </main>
    )
}