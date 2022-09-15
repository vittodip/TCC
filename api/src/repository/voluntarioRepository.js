import { con } from './connection.js'

export async function loginVoluntario(email, senha) {
    const comando = `select id_psicologo    id,
                            nm_psicologo    nome,
                            ds_email        email 
                    from tb_psicologo
                    where ds_email          = ?
                    AND ds_senha            = ?`

    const [resposta] = await con.query(comando, [email, senha]);
    return resposta;
}