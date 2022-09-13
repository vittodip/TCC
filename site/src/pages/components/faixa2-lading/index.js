import './index.scss'


export default function Roxinho(props) {
    return(
        <div className={props.roxinho}>   
            <div>
                <h3> {props.titulo} </h3>
                <p> {props.texto} </p>
            </div>
            <img src={props.img} alt="icons" />
        </div>
    )
}