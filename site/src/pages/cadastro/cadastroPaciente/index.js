import "./index.scss"
import login from '../../../api/loginUser.js';
import { Link } from 'react-router-dom';


export default function Cadastro1() {


    return (
        <main className="Main">
            <section className="global">
                <div className="div-logo">
                    <img src="/assets/images/zyro-image__3_-removebg-preview (2) 2.png" alt="logo" />
                </div>

                <div className="lado-esquerdo">
                    <img className="computadozinho" src="/assets/images/zyro-image__8_-removebg-preview 1.png" alt="imagem-de-fundo" />
                    <div>
                        <p className="textao">Te escutando de onde estiver, quando puder. <span>Seja bem vindo!</span></p>

                        <Link to='/' className="botao-direito">Voltar para a página inicial</Link>
                    </div>
                </div>
                <div className="lado-direito">
                    <div className="textinho">
                        <label>Nome</label>
                        <input className="input" type="text" placeholder="Nome e sobrenome" />
                    </div>
                    <div className="textinho">
                        <label>CPF</label>
                        <input className="input" type="text" placeholder="000.000.000-00" />
                    </div>
                    <div className="textinho">
                        <label>CEP</label>
                        <input className="input" type="text" placeholder="00000-000" />
                    </div>
                    <div className="textinho">
                        <label>E-mail</label>
                        <input className="input" type="text" placeholder="email@gmail.com" />
                    </div>

                    <div className="textinho">
                        <label>Senha</label>
                        <input className="input" type="password" placeholder="***************" />
                    </div>
                    <div className="textinho">
                        <label>Número de telefone</label>
                        <input className="input" type="text" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="textinho">
                        <label>Número de telefone alternativo</label>

                        <input className="input" type="text" placeholder="(00) 00000-0000" />

                    </div>

                    <div className="termos">
                        <p>
                            <input type="checkbox" /> Eu li e concordo com a  <a className="link">política de privacidade.</a>
                        </p>
                    </div>
                    <button className="botao">Cadastrar-se</button>
                </div>
            </section>
        </main>
    )
}