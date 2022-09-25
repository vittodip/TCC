import { con } from './connection.js';


export async function inserirSolicitacao(solicitacao) {
    const comando = `insert into tb_solicitacao (id_usuario, ds_solicitacao, ds_situacao, dt_situacao)
    values (?, ?, false, now())`

    const [resp] = await con.query(comando, [solicitacao.idUsuario, solicitacao.assunto])
    solicitacao.idSolicitacao = resp.insertId
    return solicitacao;
}

export async function listarSolicitacao(id){
    const comando = `select 
           id_solicitacao solicitacao,
           id_usuario 	  usuario,
           ds_solicitacao texto,
           ds_situacao    situacao,
           dt_situacao 	  horario
          
    from tb_solicitacao
    where id_usuario = ?`

    const [linhas] = await con.query(comando, [id])
    return linhas;
}
