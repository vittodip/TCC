import { con } from './connection.js';


export async function inserirSolicitacao(solicitacao) {
    const comando = `insert into tb_solicitacao (
        id_usuario,
        ds_solicitacao,
        ds_situacao,
        dt_situacao)

        values (?, ?, false, sysdate())`

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
           date_format(dt_situacao, '%d/%m/%Y %H:%i') as horario
          
    from tb_solicitacao
    where id_usuario = ?`

    const [linhas] = await con.query(comando, [id])
    return linhas;
}


export async function listarSoliciPsicologo(id) {
    const comando = `select id_solicitacao 	solicitacao,
                            nm_usuario 	  	usuario,
                            nr_telefone     telefone,
                            date_format(dt_nascimento, '%d/%m/%Y') as DataDeNascimento,
                            id_psicologo   	psicologo,
                            ds_solicitacao 	texto,
                            ds_situacao		situacao,
                            date_format(dt_situacao, '%d/%m/%Y %H:%i') as horario
                    from tb_solicitacao 
                    inner join tb_usuario  on tb_usuario.id_usuario = tb_solicitacao.id_usuario
                    where id_psicologo  = ?
                    and ds_situacao     = true`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function alterarSolicitacao(solicitacao, id) {
    const comando = `update tb_solicitacao 
                        set ds_solicitacao = ?,
                            ds_situacao = null, 
                            dt_situacao = now()
                      where id_solicitacao = ?`
                    
    const [resposta] = await con.query(comando, [solicitacao.assunto, id]);
    return resposta.affectedRows;
}

export async function aceitarSolicitacao(psicologo, solicitacao) {
    const comando = `update tb_solicitacao
                        set id_psicologo    = ?,
                            ds_situacao     = true
                    where id_solicitacao    = ?`
                
    const [resposta] = await con.query(comando, [psicologo, solicitacao]);
    return resposta.affectedRows;
    
}


export async function deletarSolicitacao(id) {
    const comando = `delete from tb_solicitacao
                            where id_solicitacao = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function mostrarTodasSolicitações(){
    const comando = `select ds_solicitacao texto,
                            dt_situacao    data
                       from tb_solicitacao`

    const [resposta] = await con.query(comando)
    return resposta

}