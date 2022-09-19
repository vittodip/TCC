import './index.scss'

import {useState} from 'react'

import LogoHorizontal from '../../../components/logos'
import InputsVoluntario from '../../../components/cadastro/voluntario'


import { cadastroVoluntario } from '../../../api/voluntarioApi'

export default function CadastroVoluntario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [vagas, setVagas] = useState();
    const [crp, setCrp] = useState('');
    

    async function cadastro() {
        const resposta = await cadastroVoluntario(email, senha, nome, cpf, nascimento, telefone, vagas, crp);
    }
    

    return (
        <main className="cadastro-voluntario">
            
            <section className="secao1">
                <div className='logonat'>
                    <LogoHorizontal/>
                </div>
                <img src="/assets/images/purplewoman.png" alt="" />
                <div className="s1-alinhamento-texto">
                    <p>Ao cadastrar-se como um psicólogo voluntário é necessário que saiba:</p>
                    <p>O NAT(Need a Talk) é uma instituição privada sem fins lucrativos, com objetivo de atuar em áreas onde o poder público não chega, sendo assim, não receberá nenhum tipo de remuneração;</p>
                    <p>Nosso real objetivo é poder levar apoio psicológico e possíveis tratamentos para pessoas que não tem condições para pagar por consulta; visamos o acesso dos mais carentes e moradores da periferia.
                        Em um mundo onde ansiedade e depressão andam lado a lado, nos mobilizamos a ajudar todos, estender nossas mãos e fazer com que todos possam ter a oportunidade de tratar sua saúde mental.</p>
                    <p>Precisaremos do número de seu CRP, para que possamos ter mais segurança e saber se você, profissional, possui registro ativo para atuar
                        como psicólogo(a).</p>
                    <p>Você passará por um processo avaliativo, podendo ter resultado em apenas 3 dias úteis. Neste tempo, verificaremos seus dados e se poderá contribuir com nossa organização. Enviaremos o resultado para o e-mail cadastrado.</p>
                </div>
                <button>Voltar para a página inicial</button>
            </section>
            <section className="secao2">
                <div className='logonat'>
                    <LogoHorizontal/>
                </div>
                <InputsVoluntario info='Nome' placeholder='Nome e sobrenome' valor={nome} onchange={e => setNome(e.target.value)} />
                <InputsVoluntario info='CRP' placeholder='XX/00000' valor={crp} onchange={e => setCrp(e.target.value)} />
                <InputsVoluntario info='CPF' placeholder='000.000.000-00' valor={cpf} onchange={e => setCpf(e.target.value)} />
                <InputsVoluntario info='E-mail' placeholder='email@email' valor={email} onchange={e => setEmail(e.target.value)} />
                <InputsVoluntario info='Senha' placeholder='*************' valor={senha} onchange={e => setSenha(e.target.senha)} />
                <InputsVoluntario info='Número de telefone' placeholder='(00) 00000-0000' value={telefone} onChange={e => setTelefone(e.target.telefone)} />
                

                <div className="s2-alinhamento-inputs">
                    <label>Qtd. de pacientes que pode atender</label>
                    <select onChange={e => setVagas(e.target.value)}>
                        <option selected disable hidden>Selecione</option>
                        <option value={vagas} key="">1-5</option>
                        <option value={vagas} key="">5-10</option>
                        <option value={vagas} key="">10-20 ou mais</option>
                    </select>
                </div>
                
                <div className="s2-radio">
                    <input type="checkbox" />
                    <label>Eu li e concordo com a <span>política de privacidade</span>.</label>
                </div>
                
                <button onClick={cadastro} >Cadastrar-se</button>
                
            </section>
        </main>
    )
}