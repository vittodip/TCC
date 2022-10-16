import Menu from '../../../components/home'
import HeaderAdmin from '../../../components/adm/header'
import './index.scss'




export default function Index() {
   
    
   
    return (
        <main className='page-home'>
           
           <Menu selecionado='home' />
            <div className='container'>
            <HeaderAdmin/>
                
                <div className='conteudo'>
                    <img className='logo-estilizado' src='/assets/images/computer.png'  />
                </div>
            </div>
        </main>
    )
}

