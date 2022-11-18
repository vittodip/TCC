import Menu from '../../../components/home'
import HeaderAdmin from '../../../components/adm/header'
import './index.scss'
import Storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export default function Index() {

    const navigate = useNavigate()
   
    useEffect(() => {
        if(!Storage('admin-logado')) {
            navigate('admin/login')
          }
        }, []);
   
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

