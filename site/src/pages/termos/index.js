import './index.scss'
import LogoHorizontalBranca from '../../components/logos/logobranca'
import { useNavigate } from 'react-router-dom'


export default function PoliticaPrivacidade(){

    const navigate = useNavigate();
    
    function VoltarTopoClick(){
        var btn = document.querySelector("#back-to-top");

        btn.addEventListener("click", function() {
            window.scrollTo(0, 0);
        });
    }

    return(
        <main className='politica-principal'>
            <header className='header'>
                <div className="header-align1">
                    <div>
                        <LogoHorizontalBranca />
                    </div>
                    <button>Voltar</button>
                </div>
                <div className="header-align2">
                    <img src="/assets/images/manshield.svg" alt="" />
                    <h1>Política de Privacidade</h1>
                    <img src="/assets/images/manphone.svg" alt="" />
                </div>
            </header>
            <section className="secao-termos">
                <p className="texto-alteracao">Última alteração: 21 de Agosto de 2022</p>
                <p>Bem-vindo ao Need a Talk! Nossa política de privacidade explica quais informações o Need a Talk coleta quando você visita ou usa os Serviços, bem como as formas como podemos usá-las ou compartilhá-las.</p>

                <h2>SEÇÃO 1 - INFORMAÇÕES GERAIS</h2>
                <p>A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site NEED A TALK, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.</p>
                <p>Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site NEED A TALK e integra os Termos e Condições Gerais de Uso do site NEED A TALK, devidamente inscrita no CNPJ.</p>
                <p>O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da RB n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.</p>

                <h2>SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?</h2>
                <p>Os dados pessoais do usuário e visitante são recolhidos pela plataforma da seguinte forma:</p>
                <p>Quando o usuário cria uma conta/perfil na plataforma NEED A TALK: esses dados são os dados de identificação básicos, como e-mail, nome completo, CPF e número de celular. A partir deles, podemos identificar o usuário e o visitante, além de garantir uma maior segurança e bem-estar às suas necessidade. Ficam cientes os usuários e visitantes de que seu perfil na plataforma estará acessível a todos demais usuários e visitantes da plataforma NEED A TALK.</p>
                <p>Quando um usuário e visitante acessa OU páginas do site NEED A TALK: as informações sobre interação e acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, o compartilhamento de um documento específico, comentários, visualizações de páginas, perfis, a URL de onde o usuário e visitante provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.</p>
                <p>Por intermédio de terceiro: a plataforma NEED A TALK recebe dados de terceiros, como Google, quando um usuário faz login com o seu perfil de um desses sites. A utilização desses dados é autorizada previamente pelos usuários junto ao terceiro em questão.</p>

                <h2>SEÇÃO 3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?</h2>
                <p>Os dados pessoais do usuário e visitante recolhidos são os seguintes:</p>
                <p>Dados para a criação da conta/perfil na plataforma NEED A TALK:  E-mail, nome completo, CPF e número de celular.</p>
                <p>Dados para concretizar transações: dados referentes ao pagamento e transações, tais como, número do cartão de crédito e outras informações sobre o cartão, além dos pagamentos efetuados.</p>
                <p>Dados sensíveis: Aqueles autorizados a administrar a plataforma ou trabalhar como voluntário tem direito a questionar dados sensíveis do usuário para o trabalho em questão e auxiliar o tratamento.</p>

                <h2>SEÇÃO 3 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO E VISITANTE?</h2>
                <p>Os dados pessoais do usuário e do visitante coletados e armazenados pela plataforma NEED A TALK tem por finalidade:</p>
                <p>Bem-estar do usuário e visitante: aprimorar o produto e/ou serviço oferecido, facilitar, agilizar e cumprir os compromissos estabelecidos entre o usuário e a empresa, melhorar a experiência dos usuários e fornecer funcionalidades específicas a depender das características básicas do usuário.</p>
                <p>Melhorias da plataforma: compreender como o usuário utiliza os serviços da plataforma, para ajudar no desenvolvimento de negócios e técnicas.</p>
                <p>Comercial: os dados são usados para personalizar o conteúdo oferecido e gerar subsídio à plataforma para a melhora da qualidade no funcionamento dos serviços.</p>
                <p>Previsão do perfil do usuário: tratamento automatizados de dados pessoais para avaliar o uso na plataforma.</p>
                <p>Dados de cadastro: para permitir o acesso do usuário a determinados conteúdos da plataforma, exclusivo para usuários cadastrados</p>
                <p>O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.</p>

                <h2>SEÇÃO 4 - POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?</h2>
                <p>Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.</p>
                <p>Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.</p>
                <p>Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:</p>

                <ol type='I'>
                    <li>cumprimento de obrigação legal ou regulatória pelo controlador;</li>
                    <li>estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</li>
                    <li>transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;</li>
                    <li>uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</li>
                </ol>

                <h2>SEÇÃO 5 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS</h2>
                <p>A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.</p>
                <p>Os dados relativas a cartões de crédito são criptografados usando a tecnologia "secure socket layer" (SSL) que garante a transmissão de dados de forma segura e confidencial, de modo que a transmissão dos dados entre o servidor e o usuário ocorre de maneira cifrada e encriptada.</p>
                <p>A plataforma não se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.</p>
                <p>Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.</p>

                <h2>SEÇÃO 6 - COMPARTILHAMENTO DOS DADOS</h2>
                <p>O compartilhamento de dados do usuário ocorre apenas com os dados referentes a publicações realizadas pelo próprio usuário, tais ações são compartilhadas apenas com os voluntários legais.</p>

                <h2>SEÇÃO 6 - OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A TERCEIROS?</h2>
                <p>Os dados pessoais não podem ser compartilhados com terceiros fora da área de trabalho.</p>

                <h2>SEÇÃO 07 – COOKIES OU DADOS DE NAVEGAÇÃO</h2>
                <p>Os cookies referem-se a arquivos de texto enviados pela plataforma ao computador do usuário e visitante e que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do usuário e visitante para que o servidor da plataforma possa lê-las posteriormente a fim de personalizar os serviços da plataforma.</p>
                <p>O usuário e o visitante da plataforma NEED A TALK manifesta conhecer e aceitar que pode ser utilizado um sistema de coleta de dados de navegação mediante à utilização de cookies.</p>
                <p>O cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos seguindo as instruções do seu navegador. Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado. É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da plataforma podem não funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.</p>

                <h2>SEÇÃO 8 - CONSENTIMENTO</h2>
                <p>Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a presente Política de Privacidade.</p>
                <p>O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a veracidade das informações por ele disponibilizadas.</p>
                <p>O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato através do e-mail needatalk@contato.com.</p>

                <h2>SEÇÃO 9 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE</h2>
                <p>Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.</p>
                <p>As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas.</p>
                <p>Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários podem ser transferidas para os novos proprietários para que a permanência dos serviços oferecidos.</p>

                <button id='back-to-top' onClick={VoltarTopoClick} >Voltar para o início</button>
            </section>
        </main>
    )
}


