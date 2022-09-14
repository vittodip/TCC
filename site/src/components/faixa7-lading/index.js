

import './index.scss'

export default function Equipe(props) {
   return (
    <div className="equipe">
        <img src={props.integrante} alt="integrantes" />
        <h3> {props.nome} </h3>
        <p> {props.função} </p>
    </div>
   )
}