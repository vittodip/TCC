import { con } from './connection.js'


export async function criarChat(usuario, psicologo) {
    const comando = `insert into tb_chat(
                    id_usuario,
                    id_psicologo) 
                    values(?, ?)`

    const [resposta] = await con.query(comando, [usuario, psicologo]);
    return resposta[0];
}

export async function carregarChatsUsuario(id) {
    const comando = `select * 
                        from tb_chat
                    where id_usuario = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function carregarChatsPsicologo(id) {
    const comando = `select * 
                        from tb_chat
                    where id_psicologo = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}


export async function enviarMensagem(remetente, id, mensagem) {
    const comando = `insert into tb_mensagem(
                    tp_remetente,
                    id_chat,
                    ds_mensagem)
                    values (?, ?, ?)`

    const [resposta] = await con.query(comando, [remetente, id, mensagem]);
    return resposta[0]
}


export async function mostrarMensagem() {
    const comando = `select  * 
                        from tb_mensagem`

    const [resposta] = await con.query(comando);

    return resposta;
}