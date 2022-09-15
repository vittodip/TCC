import { con } from './connection.js';

export async function loginAdm(email, senha) {
    const comando = `select id_adm      id,
                            nm_adm      nome,
                            ds_email    email
                    from tb_adm
                    where ds_email      = ?
                    AND ds_senha        = ?`

    const [resposta] = await con.query(comando, [email, senha]);
    return resposta;
}