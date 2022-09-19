import "./index.scss"
import { cadastroUsuario } from "../../../api/usuarioApi";

export default function Cadastro1() {
    
    const [nome, setNome] = ('');
    const [nascimento, setNascimento] = ('');
    const [cpf, setCpf] = ('');
    const [cep, setCep] = ('');
    const [email, setEmail] = ('');
    const [senha, setSenha] = ('');
    const [telefone, setTelefone] = ('');

    async function cadastro() {
        const resposta = await cadastroUsuario(nome, nascimento, cpf, cep, email, senha, telefone);
    }
    
 

    return (
        <main className="principal">
            <section className="global">
                <div className="div-logo">
                    <img src="/assets/images/zyro-image__3_-removebg-preview (2) 2.png" alt="logo" />
                </div>

                <div className="lado-esquerdo">
                    <img className="computadozinho" src="/assets/images/zyro-image__8_-removebg-preview 1.png" alt="imagem-de-fundo" />
                    <div>
                        <p className="textao">Te escutando de onde estiver, quando puder. <span>Seja bem vindo!</span></p>

                        <button className="botao-direito">Voltar para a página inicial</button>
                    </div>
                </div>
                <div className="lado-direito">
                    <div className="textinho">
                        <label>Nome</label>
                        <input className="input" type="text" placeholder="Nome e sobrenome" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className="textinho">
                        <label>Data de nascimento</label>

                        <input className="input" type="text" placeholder="00/00/0000" value={nascimento} onChange={e => setNascimento(e.target.value)} />

                    </div>
                    <div className="textinho">
                        <label>CPF</label>
                        <input className="input" type="text" placeholder="000.000.000-00" value={cpf} onChange={e => setCpf(e.target.value)}  />
                    </div>
                    <div className="textinho">
                        <label>CEP</label>
                        <input className="input" type="text" placeholder="00000-000" 
                        value={cep} onChange={e => setCep(e.target.value)}/>
                    </div>
                    <div className="textinho">
                        <label>E-mail</label>
                        <input className="input" type="text" placeholder="email@gmail.com" 
                        value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="textinho">
                        <label>Senha</label>
                        <input className="input" type="password" placeholder="***************" 
                        value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <div className="textinho">
                        <label>Número de telefone</label>
                        <input className="input" type="text" placeholder="(00) 00000-0000" 
                        value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>
                   

                    <div className="termos">
                        <p>
                            <input type="checkbox" /> Eu li e concordo com a  <a className="link">política de privacidade.</a>
                        </p>
                    </div>
                    <button onClick={cadastro} className="botao" >Cadastrar-se</button>
                </div>
            </section>
        </main>
    )
}