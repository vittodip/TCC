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
    return resposta[0];
}

export async function carregarChatsUsuario(id) {
    const comando = `select id_chat 		            idChat,
                    tb_usuario.id_usuario 	    idUser,
                    tb_usuario.nm_usuario       nomeUsuario,
                    tb_psicologo.id_psicologo   idPsic,
                    tb_psicologo.nm_psicologo   nomePsicologo
                from tb_chat
                inner join tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario
                inner join tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
                where tb_usuario.id_usuario = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function carregarChatsPsicologo(id) {
    const comando = `select id_chat 		            idChat,
                            tb_usuario.id_usuario 	    idUser,
                            tb_usuario.nm_usuario       nomeUsuario,
                            tb_psicologo.id_psicologo   idPsic,
                            tb_psicologo.nm_psicologo   nomePsicologo
                       from tb_chat
                inner join tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario
                inner join tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
                     where tb_psicologo.id_psicologo = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}


export async function enviarMensagem(remetente, id, mensagem) {
    const comando = `insert into tb_mensagem(
                    tp_remetente,
                    id_chat,
                    ds_mensagem)
                    values (?, ?, ?)`

    const [resposta] = await con.query(comando, [remetente, id, mensagem.trim()]);
    return resposta
}


export async function mostrarMensagem(id) {
    const comando = `select * from tb_mensagem
                     inner join tb_chat on tb_chat.id_chat = tb_mensagem.id_chat
                     where tb_chat.id_chat = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function mostrarUltimaMensagem(id) {
    const comando = `select ds_mensagem mensagem
                     from tb_mensagem
                     inner join tb_chat on tb_chat.id_chat = tb_mensagem.id_chat
                     where tb_chat.id_chat = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta[resposta.length -1];
}

export async function carregarNomeUsuario(id){
    const comando = `select nm_usuario nome
                     from tb_usuario
                     inner join tb_chat on tb_chat.id_usuario = tb_usuario.id_usuario
                     where tb_chat.id_chat = ?`
                     
    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}

export async function carregarNomePsic(id){
    const comando = `select nm_psicologo nome
                     from tb_psicologo
                     inner join tb_chat on tb_chat.id_psicologo = tb_psicologo.id_psicologo
                     where tb_chat.id_chat = ?`
                     
    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}
