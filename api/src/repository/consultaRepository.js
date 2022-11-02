import { con } from './connection.js'


// Marcar Consulta
export default async function marcarConsulta(idUsuario, idPsicologo, consulta) {
    const comando = `insert into tb_consulta(
                    ID_USUARIO,
                    ID_PSICOLOGO,
                    DT_CONSULTA,
                    DS_LINK_MEET)
                    values(?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [idUsuario, idPsicologo, consulta.data, consulta.link]);
    return resposta[0];
}