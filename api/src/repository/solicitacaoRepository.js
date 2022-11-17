import { con } from './connection.js';


export async function inserirSolicitacao(solicitacao) {

    const comando = `insert into tb_solicitacao (
        id_usuario,
        ds_solicitacao,
        ds_situacao,
        dt_situacao)

        values (?, ?, false, sysdate())`

    const [resp] = await con.query(comando, [solicitacao.idUsuario, solicitacao.assunto.trim()])
    solicitacao.idSolicitacao = resp.insertId

    return solicitacao;
}

export async function listarSolicitacao(id) {
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
                            tb_usuario.id_usuario      idUsuario,
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
                            dt_situacao = now()
                      where id_solicitacao = ?`

    const [resposta] = await con.query(comando, [solicitacao.assunto.trim(), id]);
    return resposta.affectedRows;
}

export async function aceitarSolicitacao(ids) {
    const comando = `update tb_solicitacao
                        set id_psicologo    = ?,
                            ds_situacao     = true
                    where id_solicitacao    = ?`

    const [resposta] = await con.query(comando, [ids.idPsic, ids.idSoli]);
    return resposta.affectedRows;
}


export async function deletarSolicitacao(id) {
    const comando = `delete from tb_solicitacao
                            where id_solicitacao = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function mostrarTodasSolicitacoes() {
    const comando = `select
                     id_solicitacao ,
                     tb_usuario.id_usuario     idUsuario,
                     ds_solicitacao texto,
                     date_format(dt_situacao, '%d/%m/%Y %H:%i') as data,
                     tb_usuario.nm_usuario nome
                     from tb_solicitacao
                     inner join tb_usuario on tb_usuario.id_usuario = tb_solicitacao.id_usuario
                     where ds_situacao = false;
                       `

    const [resposta] = await con.query(comando)
    return resposta

}


export async function deletarSolicitacaoPsic(id) {
    const comando = `update tb_solicitacao 
                     set ds_situacao = 0
                     where id_solicitacao = ?`

    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}

export async function carregarSolicitacaoUsuario(usuario, solicitacao) {

    const comando = `select ds_solicitacao solicitacao
                       from tb_solicitacao
                      where id_usuario = ?
                        and id_solicitacao = ?`

    const [linhas] = await con.query(comando, [usuario, solicitacao]);
    return linhas[0]
}

export async function inserirCategoria(categoria, solicitacao, id) {
    const comando = `insert into tb_solicitacao_categoria(id_categoria, id_solicitacao) 
    values( ? , ?)`

    const [resposta] = await con.query(comando, [categoria, solicitacao])
    return resposta.affectedRows
}


export async function mostrarCatSol(idSolicitacao) {
    const comando = `   select tb_categoria.nm_categoria 
                          from tb_solicitacao_categoria
                    inner join tb_categoria on tb_categoria.id_categoria = tb_solicitacao_categoria.id_categoria
                    inner join tb_solicitacao on tb_solicitacao.id_solicitacao = tb_solicitacao_categoria.id_solicitacao
                         where tb_solicitacao.id_solicitacao = ?`
    const [resposta] = await con.query(comando, [idSolicitacao])
    return resposta
}

export async function consultarCategorias() {
    const comando = `  select tb_categoria.nm_categoria 
                                         from tb_solicitacao_categoria
                                   inner join tb_categoria on tb_categoria.id_categoria = tb_solicitacao_categoria.id_categoria
                  `
    const [resposta] = await con.query(comando)
    return resposta
}