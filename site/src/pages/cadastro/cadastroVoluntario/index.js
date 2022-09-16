import './index.scss'
import LogoHorizontal from '../../../components/logos'

export default function CadastroVoluntario() {
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
                <div className="s2-alinhamento-inputs">
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>CRP</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>CPF</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>E-mail</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>Senha</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>Número de telefone</label>
                    <input type="text" />
                </div>
                <div className="s2-alinhamento-inputs">
                    <label>Qtd. de pacientes que pode atender</label>
                    <select>
                        <option value="1-5" key="">1-5</option>
                        <option value="5-10" key="">5-10</option>
                        <option value="10-20 ou mais" key="">10-20 ou mais</option>
                    </select>
                </div>
                
                <div className="s2-radio">
                    <input type="checkbox" />
                    <label>Eu li e concordo com a <span>política de privacidade</span>.</label>
                </div>
                
                <button>Cadastrar-se</button>
                
            </section>
        </main>
    )
}