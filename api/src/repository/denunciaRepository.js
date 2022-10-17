import { con } from './connection.js'

export async function denunciarUsuario(denuncia) {
    const comando = `insert tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia, id_solicitacao)
                                          value(?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [denuncia.idUsuario, denuncia.idPsicologo, denuncia.depoimento, denuncia.idSolicitacao]);
    denuncia.id = resposta.insertId;
    
    return denuncia;
}

export async function denunciarPsicologo(denunciaPsi) {
    const comando = `insert tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
                                            value(?, ?, ?)`
    const [resposta] = await con.query(comando, [denunciaPsi.paciente.trim(), denunciaPsi.voluntario.trim(), denunciaPsi.depoimento.trim()]);
    denunciaPsi.id = resposta.insertId;
    
    return denunciaPsi;
    ;
}