import './index.scss'



export default function Perfil(props) {


    return (

        <main className='perfil-usuario-main'>
            <div className='pic-background-user'>
           
                <img src='/assets/images/logonat.png'/>
                
                <div className='buttons'>
                    {props.perfil === 'usuario' && 
                        <button>Denunciar</button>
                    }
                    <button>Conversas</button>
                    <button> <img src='/assets/images/Logout (1).png'/> Sair</button>
                </div>
            
                <div className='pic-user'> 
                    <span>N</span> 
                </div>
                
            </div>
            <h1 className='nome-usuario'>Sejam bem-vindo, Nome! <img src='/assets/images/Heart.png'/></h1>
        </main>
    )
}