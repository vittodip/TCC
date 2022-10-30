import { con } from "./connection.js";

export async function alterarSenhaUsuario(user) {
    const comando = `update tb_usuario
                        set  ds_senha = ?
                      where  ds_email = ?`
        const [resposta] = await con.query(comando, [user.senha, user.email])
        return resposta.affectedRows;
}

export async function alterarSenhaPsicologo(psic) {
    const comando = `update tb_psicologo
                        set  ds_senha = ?
                      where  ds_email = ?`
        const [resposta] = await con.query(comando, [psic.senha, psic.email])
        return resposta.affectedRows;
}