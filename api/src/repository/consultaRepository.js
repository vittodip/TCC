import { con } from './connection.js'


// Marcar Consulta
export async function marcarConsulta(idUsuario, idPsicologo, consulta) {
    const comando = `insert into tb_consulta(
                    ID_USUARIO,
                    ID_PSICOLOGO,
                    DT_CONSULTA,
                    DS_LINK_MEET)
                    values(?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [idUsuario, idPsicologo, consulta.data, consulta.link]);
    return resposta[0];
}

// Listar Consulta
export async function listarConsulta(){
    const comando = `select id_consulta   CONSULTA,
                            id_usuario	  USUARIO,
                            id_psicologo  PSICOLOGO,
                            DATE_FORMAT(dt_consulta, '%d/%m/%Y %H:%i') as HORARIO,
                            ds_link_meet  MEET
                     from tb_consulta`
    const [resposta] = await con.query(comando);
    return resposta

}