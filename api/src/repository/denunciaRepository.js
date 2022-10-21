import { con } from './connection.js'

export async function denunciarUsuario(denunciaUser) {
    const comando = `insert tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia, id_solicitacao)
                                          value(?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [denunciaUser.idUsuario, denunciaUser.idPsicologo, denunciaUser.depoimento.trim(), denunciaUser.idSolicitacao]);
    denunciaUser.id = resposta.insertId;
    
    return denunciaUser;
}

export async function denunciarPsicologo(denunciaPsi) {
    const comando = `insert tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
                                            value(?, ?, ?)`
    const [resposta] = await con.query(comando, [denunciaPsi.idUsuario, denunciaPsi.idPsicologo, denunciaPsi.depoimento.trim()]);
    denunciaPsi.id = resposta.insertId;
    
    return denunciaPsi;
}

