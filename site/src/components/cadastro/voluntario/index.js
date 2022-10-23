import '../../../pages/cadastro/cadastroVoluntario/index.scss'


export default function InputsVoluntario(props) {
    return(
        <div className="s2-alinhamento-inputs">
                    <label>{props.info}</label>
                    <input type={props.type} value={props.valor} onChange={props.onchange}  placeholder={props.placeholder} />
        </div>
    )
}