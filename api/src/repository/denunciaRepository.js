import { con } from './connection.js'

export async function denunciarUsuario(denunciaUsuario) {
    const comando = `insert tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia, id_solicitacao)
                                          value(?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [denunciaUsuario.paciente.trim(), denunciaUsuario.voluntario.trim(), denunciaUsuario.depoimento.trim(), denunciaUsuario.solicitacao]);
    denunciaUsuario.id = resposta.insertId;
    
    return denunciaUsuario;
    ;
}