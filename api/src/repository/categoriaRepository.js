import { con } from "./connection.js";


export async function mostrarCategorias() {
    const comando = `select *
                         from tb_categoria`

    const [resposta] = await con.query(comando);
    return resposta;
}


export async function categoriaSolicitacao(solicitacao, categoria) {
    const comando = `insert tb_solicitacao_categoria(
        ID_SOLICITACAO, 
        ID_CATEGORIA)
        value(?, ?)`

    const [resposta] = await con.query(comando, [solicitacao, categoria]);
    return resposta[0];
}


export async function mostrarCategoriasSol(id) {
    const comando = ` select tb_categoria.id_categoria		 	idCategoria,
                                tb_solicitacao.id_solicitacao		idSolicitacao,
                                tb_solicitacao.ds_solicitacao       solicitacao,
                                tb_categoria.nm_categoria			nomeCategoria
                            from tb_solicitacao_categoria
                            inner join tb_solicitacao on tb_solicitacao_categoria.id_solicitacao = tb_solicitacao.id_solicitacao
                            inner join tb_categoria on tb_solicitacao_categoria.id_categoria = tb_categoria.id_categoria
                            where tb_solicitacao.id_solicitacao = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}