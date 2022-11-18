import './index.scss'
import { alterarSolicitacao, carregarSolicitacaoUsuario } from '../../api/solicitacaoApi'

import { useEffect, useState } from 'react'

// npm

import { toast, Toaster } from 'react-hot-toast'
import Storage from 'local-storage'


export default function AlterarSolicitacao({ item, acao, abrir }) {
    const [assunto, setAssunto] = useState(item.texto)
   
    async function carregarSolicitacao() {
        
        try{
            if(Storage('usuario-logado')) {
            const userId = Storage('usuario-logado').id;
            const resposta = await carregarSolicitacaoUsuario(userId, item.solicitacao)
            
            setAssunto(resposta.solicitacao)
            }
        }
        catch(err) {
            toast.error(err.message)
        }
    }

    async function salvarSolicitacao() {
        try {
                await alterarSolicitacao(item.solicitacao, assunto)
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
        carregarSolicitacao();
    }, [])

    


    return ( 
        <main className={`pop-up-main ${abrir}`} >
                <img src="/assets/images/excluir.png" width={30} height={30} onClick={() => acao('fechado', null)} /> 
            <div className='alterar-sol'>
                
                <Toaster />

            
            
                    <h2>Alterar Solicitação</h2>
                    <textarea value={assunto} onChange={e => setAssunto(e.target.value)}></textarea>

                    <button onClick={salvarSolicitacao}>Salvar</button>
            
            </div>
        </main>
    )
}