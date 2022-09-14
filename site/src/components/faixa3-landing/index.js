import "./index.scss"

export default function Pscologos(props) {
    return(
        <div className="psicologos">
            <button  className="seta-esquerda" href=""> <img src="assets/images/Group 2.png" alt="seta-esquerda" /> </button>
            <div className="sobre-psicologo">
                <img className="foto-psicologos" src={props.psicologo} alt="psicologos" />

                <div>
                    <h3> {props.nome} </h3>
                    <p> {props.descricao} </p>
                    <div className="falas-aspas">
                        <img className="aspas-1" src="assets/images/image 6.png" alt="aspas-1" />
                        <img className="aspas-2" src="assets/images/image 7.png" alt="aspas-2" />

                        <p> {props.fala} </p>

                        <h4 className="redes-sociais">{props.rede}</h4>
                    </div>
                    
                </div>
            </div>
            <button className="seta-direita" href=""> <img src="assets/images/Group 1.png" alt="seta-direita" /> </button>
        </div>
    )
}