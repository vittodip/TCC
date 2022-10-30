import './index.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

import Roxinho from '../../components/faixa2-lading/index.js';
import Pscologos from '../../components/faixa3-landing/index.js';
import Equipe from '../../components/faixa7-lading/index.js'

export default function Home() {
    return (
        <main className="principal">

            <section className="faixa-1">
                <div className="logo">
                    <img className="logo-img" src="/assets/images/logonat.png" alt="logo" />
                    <div className="usuario">
                        <img src="/assets/images/do-utilizador (1) 1.png" alt="inscreva-se" />
                        <Link to='/home/login' className="inscreva-se" > Entre ou cadastre-se </Link>
                    </div>
                </div>
                <div className="texto-faixa-1">
                    <p>Investir em saúde mental
                        é investir na
                        construção de pessoas saudáveis e de pontes entre as pessoas.
                    </p>
                </div>

                <div className="como-funciona">
                    <h2>Como funciona o nosso site </h2>
                    <img className="coracao" src="/assets/images/Heart.png" alt="coração" />
                </div>
            </section>

            <section className="faixa-2">

                <img className="bola-cinza" src="assets/images/Ellipse 7.png" alt="bola-cinza" />
                <img className="bola-roxa" src="assets/images/Ellipse 8.png" alt="bola-roxa" />


                <div className="faixa-2-textos">
                    <Roxinho roxinho="secao-padrao" titulo='A conversa' texto='Desenvolvemos nosso site com a proposta de que os usuários irão expor seus problemas, assim,  o psicólogo pode visualizar e ter acesso a informações restritas e a uma conversa com o usuário. 
                    Esta conversa pode ser por chat, disponibilizado pelo nosso site, ou por uma chamada pelo Google Meet.' img='/assets/images/zyro-image__1_-removebg 1.png' />

                    <Roxinho roxinho="secao-padrao-1" titulo='O objetivo' texto='
                    Nosso objetivo é poder ajudar e dar acesso a pessoas que vivem em situações em que não é capaz de realizar uma consulta ou sessões com um profissional. 
                    Sabemos da realidade de muitas pessoas, se você for menor de idade, não se preocupe. Nosso site cuida das suas informações e não há idade mínima para se cuidar e cuidar da saúde mental.' img='/assets/images/flecha-no-alvo 1.png' />

                    <Roxinho roxinho="secao-padrao-2" titulo='As sessões' texto='
                    Cada profissional tem um limite de sessões que ele pode disponibilizar. Caso você não seja selecionado, você estará em uma lista de espera, aguardando que uma vaga seja liberada. 
                    Eles podem mover o seu problema para que o profissional indicado possa conversar com você.
                    ' img='/assets/images/Armchair.png' />

                    <img className="mocinha" src="assets/images/image-removebg-preview (2) 2.png" alt="pessoinha" />
                </div>

            </section>

            <section className="faixa-3">
                <h3>Profissionais que ajudam nossa causa</h3>

                <Carousel>
                    <Pscologos psicologo='/assets/images/image 5.png' nome='Psicóloga Amanda Fitas' descricao='Psicóloga e escritora, com cinco livros publicados, encoraja seus pacientes
                a se valorizarem mais.  Com 10 anos de profissão e mais de 2 milhões de seguidores no instagram, ela faz vídeos curtos com conselhos e também tem um podcast.' fala='Quero ajudar aqueles que não podem chegar até nós, seja por questões financeiras ou falta de acesso, pois saúde mental e autoestima deveriam ser acessíveis para todos.' rede='@amandafitas' />
                <Pscologos psicologo='/assets/images/anili.jpg' nome='Anili Mancuzo' descricao='Psicóloga e escritora, com cinco livros publicados, encoraja seus pacientes
                a se valorizarem mais.  Com 10 anos de profissão e mais de 2 milhões de seguidores no instagram, ela faz vídeos curtos com conselhos e também tem um podcast.' fala='Quero ajudar aqueles que não podem chegar até nós, seja por questões financeiras ou falta de acesso, pois saúde mental e autoestima deveriam ser acessíveis para todos.' rede='@amandafitas' />
                <Pscologos psicologo='/assets/images/andre.jpeg' nome='André Barbosa' descricao='Psicóloga e escritora, com cinco livros publicados, encoraja seus pacientes
                a se valorizarem mais.  Com 10 anos de profissão e mais de 2 milhões de seguidores no instagram, ela faz vídeos curtos com conselhos e também tem um podcast.' fala='Quero ajudar aqueles que não podem chegar até nós, seja por questões financeiras ou falta de acesso, pois saúde mental e autoestima deveriam ser acessíveis para todos.' rede='@amandafitas' />
                </Carousel>
            </section>

            <section className="faixa-4">
                <div className="faixa-4-texto">
                    <h1> Os sonhos sufocados nas comunidades levam ao adoecimento da mente dos que vivem na periferia. </h1>
                    <p>A falta de escuta e de um olhar acolhedor degenera a saúde mental de uma população acostumada à marginalização</p>
                </div>
            </section>

            <section className="faixa-5">
                <div className="faixa-5-texto">
                    <p>Os psicólogos no Brasil preferem o setor privado onde podem cobrar valores altos. Isto contribui para um preconceito generalizado que “os problemas de saúde mental são problemas dos ricos: os pobres não têm tempo para ficarem tristes, porque precisam ganhar a vida, criar os filhos, construir uma casa…”. A grande maioria dos moradores das comunidades ainda acreditam que os problemas de saúde mental são um tabu. Irenaldo Honório da Silva, um fisioterapeuta e presidente da Associação de Moradores do Pica-Pau, uma favela na Zona Norte do Rio de Janeiro, diz que a falta de infraestrutura de saúde contribui para este problema:  “Há muitas pessoas aqui com depressão. E elas não conseguem melhorar por falta de tratamento adequado”.
                    </p>
                    <p>
                        Infelizmente, o tratamento de saúde mental adequado muitas vezes é substituído por práticas medicinais rápidas e fáceis. Rivotril, um medicamento calmante, é vendido por preços baixos e em grandes quantidades no Brasil. Nos EUA, o medicamento receitado é conhecido como Klonopin (nome médico clonazepam),e é considerado um dos mais perigosos no mercado hoje em dia. Nas favelas, o custo baixo do Rivotril torna este medicamento atraente. Para aqueles que não tem acesso a estes medicamentos receitados, o álcool e outras drogas de rua são acessíveis e podem tornar-se o escape, do paciente, dos desafios cotidianos.</p>
                    <p>As condições de vida também podem ser uma barreira para uma mente saudável. Moradores das favelas podem ter espaço limitado para morar, as ruas podem ser congestionadas e sujas, o esgoto pode correr a céu aberto por falta de um sistema de esgoto adequado. Esta condições são precursoras de vários problemas de saúde, como a tuberculose. Irenaldo, de Pica-Pau, vem exigindo que a Prefeitura do Rio implemente uma infraestrutura melhor na sua comunidade durante anos. Ele acredita que a falta de saneamento adequado e de coleta de lixo tenha impactos severos sobre o bem-estar na sua comunidade, e que os problemas de saúde mental são mais frequentes na sua favela devido às más condições de vida.</p>
                    <p>Pensando nisso, desenvolvemos este site, sem fins lucrativos, para ajudar essas pessoas que não podem ter acesso. De onde ela estiver, poderá ser escutada.
                        O NAT é aberto para todos, do Brasil inteiro. Saúde em primeiro lugar sempre!</p>

                </div>



            </section>

            <section className="faixa-6">
                <h3 className="faixa-6-titulo">Empresas que contribuem para que o nosso projeto possa existir</h3>
                <div className="faixa-6-empresas">
                    <img src="/assets/images/image 11.png" alt="uninove" />
                    <img src="/assets/images/Group 3.png" alt="samede" />
                    <img src="/assets/images/image 13.png" alt="humboldt" />
                    <img src="/assets/images/image 14.png" alt="crefisa" />
                </div>
            </section>

            <section className="faixa-7">

                <div className="nossa-equipe">
                    <h2>Nossa Equipe</h2>
                    <img className="coracao" src="/assets/images/Heart.png" alt="coração" />
                </div>

                <div className="integrantes">
                    <Equipe className='integrante-1' integrante='/assets/images/image 19.png' nome='Mateus Andrade' função='DBA' link='https://www.instagram.com/amandafitas/?hl=pt-br' />
                    <Equipe className='integrante-2' integrante='/assets/images/image 18.png' nome='Bruno Virgilio' função='DBA' />
                    <Equipe className='integrante-3' integrante='/assets/images/image 17.png' nome='Jennifer Oliveira' função='Front-End' />
                    <Equipe className='integrante-4' integrante='/assets/images/image 21.png' nome='Eduardo César' função='Backend' />
                    <Equipe className='integrante-5' integrante='/assets/images/image 20.png' nome='Victor de Paula' função='Full-Stack' />
                </div>

            </section>

            <footer className="rodape">
                <img className="logo-img" src="/assets/images/logonat.png" alt="logo" />

                <div>

                    <div className="redes-sociais-site">
                        <div className="redes-rodape">
                            <img src="/assets/images/Instagram Circle.png" alt="instagram" />
                            <p>@needatalk</p>
                        </div>
                        <div className="redes-rodape">
                            <img src="/assets/images/Facebook.png" alt="facebook" />
                            <p>/needatalk</p>
                        </div>
                        <div className="redes-rodape">
                            <img src="/assets/images/Circled Envelope.png" alt="email" />
                            <p>needatalk@contato.com</p>
                        </div>
                    </div>

                    <p className="termos">Termos de uso e Política de Privacidade</p>

                </div>

                <p className="Crystal-Castles">© 2022 Crystal Castles</p>
            </footer>
        </main>
    )
} 