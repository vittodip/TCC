import { Link } from 'react-router-dom'
import './index.scss';

export default function ConcluirSenha(){


    return(
        <main className='CSenha'>
            <div className='header'>
                <img src='/assets/images/logonat.png' />
                <div>
                    <Link to='/'>Pagina Inicial</Link>
                    <Link to='/home/login'>Voltar</Link>
                </div>
            </div>

                <img src='/assets/images/mocoAtendimento.png' className='img'/>
            <div className='painel'>
                <h1>Digite sua nova senha</h1>
                <p>Sua senha deve ter pelo menos 8 caracteres e deve conter letras e números. </p>

                <div className='infoEmail'>
                    <label>Nova senha</label>
                    <input type='text' placeholder='***********' />
                </div>
                <button>Concluir</button>
            </div>
                <img src='/assets/images/mocaFormas.png' className='img2' />



        </main>
    )


}