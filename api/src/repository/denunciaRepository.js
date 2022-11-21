import { con } from './connection.js'


// denunciar usuario pela solicitação
export async function denunciarUsuario(denunciaUser) {
    const comando = `insert tb_denuncia_usuario(id_usuario, id_psicologo, id_solicitacao)
                                          value(?, ?, ?)`

    const [resposta] = await con.query(comando, [denunciaUser.idUsuario, denunciaUser.idPsicologo, denunciaUser.idSolicitacao]);
    denunciaUser.id = resposta.insertId;

    return denunciaUser;
}

// denunciar psicologo
export async function denunciarPsicologo(denunciaPsi) {
    const comando = `insert tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
                                            value(?, ?, ?)`
    const [resposta] = await con.query(comando, [denunciaPsi.idUsuario, denunciaPsi.idPsicologo, denunciaPsi.depoimento.trim()]);
    denunciaPsi.id = resposta.insertId;

    return denunciaPsi;
}

// denunciar usuario pelo chat
export async function denunciarUsuarioChat(denunciaUserChat) {
    const comando = `insert tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia)
                                          value(?, ?, ?)`

    const [resposta] = await con.query(comando, [denunciaUserChat.idUsuario, denunciaUserChat.idPsicologo, denunciaUserChat.depoimento.trim()]);
    denunciaUserChat.id = resposta.insertId;

    return denunciaUserChat;
}

// denunciar psicologo pelo perfil
export async function denunciaPerfil(idPsicologo, denuncia) {
    const comando = `insert into tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
                     values(?, ?, ?);`

    const [resposta] = await con.query(comando, [denuncia.idUsuario, idPsicologo.id_psicologo, denuncia.depoimento.trim()]);
    denuncia.id = resposta.insertId;
    return denuncia;
}

export async function denunciaPerfilUsuario(idUsuario, denuncia) {
    const comando = `insert into tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia)
                     values(?, ?, ?)`

    const [resposta] = await con.query(comando, [idUsuario.id_usuario, denuncia.idPsicologo, denuncia.depoimento.trim()]);
    denuncia.id = resposta.insertId;
    return denuncia;
}

//pegar id do psicologo
export async function idPsicologoDenuncia(denuncia) {
    const comando = `select id_psicologo 
                        from tb_psicologo
                    where nm_psicologo = ? and ds_email = ?`

    const [resposta] = await con.query(comando, [denuncia.nomePsicologo.trim(), denuncia.emailPsicologo.trim()]);
    return resposta[0];
}

//pegar o id do usuario
export async function idUsuarioDenuncia(denuncia) {
    const comando = `select id_usuario 
                        from tb_usuario
                    where nm_usuario = ? and ds_email = ?`                    

    const [resposta] = await con.query(comando, [denuncia.nomeUsuario.trim(), denuncia.emailUsuario.trim()]);
    return resposta[0];
}