import './index.scss'

import { Link } from 'react-router-dom'


export default function HomeLogin() {
    return (
        <main className='home-login'>
            <section className='secao1'>
                <img className="mocas-tocaq" width={350} src="/assets/images/MOCAS TOCAQ 1.png" alt="" />
                <img className='moca-nuvem' src="/assets/images/moca nuvem.png" width={315} alt="" />
                <img className='moco-nuvem' src="/assets/images/moco deitado.png" width={350} alt="" />
            </section>
            <section className='secao2'>
                <img className='s2-logo' src="/assets/images/logo-login.png" alt="" />
                <p className='s2-texto-logo'>Acesse de onde estiver!</p>

                <h1>Cadastre-se como</h1>
                <div className="opcoes">
                    <div className='s2-opcoes'>

                        <button>Voluntário</button>
                        <a href="/cadastro/voluntario">Clique para saber mais</a>
                    </div>
                    <div className='s2-opcoes'>
                        <button>Paciente</button>
                        <a href="/cadastro/paciente">Clique para continuar</a>
                    </div>
                </div>
                <div className='s2-alinhamento-opcoes'>
                    <p>Já tem um cadastro?Conecte-se <Link to='/login/paciente' className='a'>aqui</Link></p>

                </div>
            </section>
        </main>
    )
}