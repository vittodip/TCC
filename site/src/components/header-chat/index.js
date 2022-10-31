import './index.scss'
import BotaoBranco from '../botao'

export default function HeaderChat(props) {
    return(
        <main>
            <div className='header-contatos'>
                    <h2>Conversas</h2>
                    <BotaoBranco botao='Perfil'/>
                    
                    <BotaoBranco botao='Solicitações'/>
                </div>
        </main>
    )
}