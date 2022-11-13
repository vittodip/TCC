import { con } from './connection.js'


// Marcar Consulta
export async function marcarConsulta(idUsuario, idPsicologo, consulta) {
    const comando = `insert into tb_consulta(
                    ID_USUARIO,
                    ID_PSICOLOGO,
                    DATE_FORMAT(DT_CONSULTA, '%d/%m/%Y %H:%i'),
                    DS_LINK_MEET)
                    values(?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [idUsuario, idPsicologo, consulta.data, consulta.link]);
    return resposta[0];
}

// Listar Consulta
export async function listarConsulta(id){
    const comando = `select 	tb_consulta.id_consulta  	      CONSULTA,
							    tb_usuario.id_usuario	  	      USUARIO,
                                tb_psicologo.id_psicologo         PSICOLOGO,
                                tb_psicologo.nm_psicologo         profissional,
                    DATE_FORMAT(dt_consulta, '%d/%m/%Y %H:%i') as horario,
                                ds_link_meet                      meet
                    from        tb_consulta
            inner join tb_psicologo on tb_psicologo.id_psicologo = tb_consulta.id_psicologo
            inner join tb_usuario on tb_usuario.id_usuario = tb_consulta.id_usuario
            where tb_consulta.id_usuario = ?`
    const [resposta] = await con.query(comando, id);
    return resposta

}