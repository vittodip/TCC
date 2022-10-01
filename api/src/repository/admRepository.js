import { con } from './connection.js';

// Login Admin
export async function loginAdm(email, senha) {
    const comando = `select id_adm      id,
                            nm_adm      nome,
                            ds_email    email
                    from tb_adm
                    where ds_email      = ?
                    AND ds_senha        = ?`

    const [resposta] = await con.query(comando, [email, senha]);
    return resposta[0];
}

// Cadastro Admin
export async function cadastroAdm(admin) {
    const comando = `insert into tb_adm (ds_email, ds_senha, nm_adm, ds_cpf, dt_nascimento, nr_telefone)
                                  values(?, ?, ?, ?, ?, ?)`
    
    const [resposta] = await con.query(comando, [admin.email.trim(), admin.senha.trim(), admin.nome.trim(), admin.cpf.trim(), admin.nascimento, admin.telefone.trim()]);
    admin.id = resposta.insertId;

    return admin;
}