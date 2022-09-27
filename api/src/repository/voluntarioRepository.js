import { con } from './connection.js'

export async function loginVoluntario(email, senha) {
    const comando = `select id_psicologo    id,
                            nm_psicologo    nome,
                            ds_email        email,
                            ds_situacao     situacao 
                    from tb_psicologo
                    where ds_email          = ?
                    AND ds_senha            = ?`

    const [resposta] = await con.query(comando, [email, senha]);
    return resposta[0];
}


export async function cadastroVoluntario (volunt) {
    const comando = `insert into tb_psicologo (ds_email, ds_senha, nm_psicologo, ds_cpf, dt_nascimento, nr_telefone, ds_vagas, ds_crp)
                                        values(?, ?, ?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [volunt.email, volunt.senha, volunt.nome.trim(), volunt.cpf, volunt.nascimento, volunt.telefone, volunt.vagas, volunt.crp]);
    volunt.id = resposta.insertId;

    return volunt;
}

export async function alterarVoluntario(volunt, id) {
    const comando = `update tb_psicologo
                        set nm_psicologo      =  ?,
                            ds_email          =  ?,
                            nr_telefone       =  ?
                      where id_psicologo      =  ?`

    const [resposta] = await con.query(comando, [volunt.nome, volunt.email, volunt.telefone, id]);

    return resposta[0];
}