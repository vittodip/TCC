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

export async function denunciaPsiPerfil(denuncia) {
    const comando = `insert into tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
                        select id_usuario, id_psicologo, ?
                            from tb_usuario, tb_psicologo
                        where tb_usuario.nm_usuario = ? and  tb_psicologo.nm_psicologo = ?
                        and tb_usuario.ds_email = ? and tb_psicologo.ds_email = ?`

    const [resposta] = await con.query(comando, [denuncia.depoimento.trim(), denuncia.nomeUsuario.trim(), denuncia.nomePsicologo.trim(), denuncia.emailUsuario.trim(), denuncia.emailPsicologo.trim()]);
    denuncia.id = resposta.insertId;
    
    return denuncia
}
