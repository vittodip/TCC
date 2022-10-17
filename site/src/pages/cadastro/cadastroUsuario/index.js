import "./index.scss";
import { cadastroUsuario } from "../../../api/usuarioApi";
import { Link } from "react-router-dom";
import LogoHorizontal from "../../../components/logos";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Cadastro1() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [termos, setTermos] = useState(false);

  async function Cadastro() {

    try {
        const resp = await cadastroUsuario(email, senha, nome, cpf, nascimento, telefone);
        console.log(resp)
        toast("Usuario cadastrado com sucesso")
    } catch (err) {
        toast(err.response.data.erro)
    }
    
  }

  return (
    <main className="Main">
        <ToastContainer/>
      <section className="global">
        <div className="lado-esquerdo">
          <div className="div-logo">
            <LogoHorizontal />
          </div>
          <img
            className="computadozinho"
            src="/assets/images/zyro-image__8_-removebg-preview 1.png"
            alt="imagem-de-fundo"
          />
          <div className="container-texto-botao">
            <p className="textao">
              Te escutando de onde estiver, quando puder.{" "}
              <span>Seja bem-vindo!</span>
            </p>

            <Link to="/" className="botao-direito">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
        <div className="lado-direito">
          <div className="textinho">
            <label>Nome</label>
            <input
              className="input"
              type="text"
              placeholder="Nome e sobrenome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="textinho">
            <label>Data de nascimento</label>

            <input
              className="input"
              type="date"
              
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="textinho">
            <label>CPF</label>
            <input
              className="input"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="textinho">
            <label>E-mail</label>
            <input
              className="input"
              type="text"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="textinho">
            <label>Senha</label>
            <input
              className="input"
              type="password"
              placeholder="***************"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="textinho">
            <label>Número de telefone</label>
            <input
              className="input"
              type="text"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="termos">
            <p>
              <input
                type="checkbox"
                value={termos}
                onChange={(e) => setTermos(e.target.checked)}
              />{" "}
              Eu li e concordo com a{" "}
              <Link to='/politica-privacidade' className="link">política de privacidade.</Link>
            </p>
          </div>
          <div className="botao-ladodireito">
            <button onClick={Cadastro}>Cadastro</button>
          </div>
        </div>
      </section>
    </main>
  );
}
