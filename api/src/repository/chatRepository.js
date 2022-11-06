import { con } from './connection.js'


export async function criarChat(usuario, psicologo) {
    const comando = `insert into tb_chat(
                    id_usuario,
                    id_psicologo) 
                    values(?, ?)`

    const [resposta] = await con.query(comando, [usuario, psicologo]);
    return resposta[0];
}

export async function checarChat(usuario, psicologo) {
    const comando = `select * from tb_chat
                     where id_usuario = ?
                     and id_psicologo = ?`
    
    const [resposta] = await con.query(comando, [usuario, psicologo]);
    return resposta;
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
    return resposta
}


export async function mostrarMensagem(id) {
    const comando = `select * from tb_mensagem
                     inner join tb_chat on tb_chat.id_chat = tb_mensagem.id_chat
                     where tb_chat.id_chat = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function carregarNome(id){
    const comando = `select nm_usuario
                     from tb_usuario
                     where id_usuario = ?`
                     
    const [resposta] = await con.query(comando, [id]);
    return resposta;
}