import Menu from '../../../components/home'
import './index.scss'


export default function Index() {
    return (
        <main className='page-home'>
           <Menu selecionado='home' />
            <div className='container'>
              
                
                <div className='conteudo'>
                    <img className='logo-estilizado' src='/assets/images/computer.png'  />
                </div>
            </div>
        </main>
    )
}

//alt='logo estilizado'