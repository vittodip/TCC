import './index.scss'

import BotaoBranco from '../../components/botao'

export default function MensagensPage() {
    return (
        <main>
            <div className='lateral-contatos'>
                <div className='header-contatos'>
                    <h3>Conversas</h3>
                    <BotaoBranco botao='Perfil'/>
                    <BotaoBranco botao='Solicitações'/>
                </div>
                <div className='contatos'>
                    <div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}