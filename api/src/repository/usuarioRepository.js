import { con } from './connection.js';


export async function loginUsuario(email, senha) {
    const comando = `select id_usuario	id,
                        nm_usuario		nome,
                        ds_email		email
                    from tb_usuario
                    where ds_email      = ?
                    and ds_senha        = ?`

    const [resposta] = await con.query(comando, [email, senha]);
    
    return resposta[0];
}

export async function cadastroUsuario (user) {
    const comando = `insert into tb_usuario (ds_email, ds_senha, nm_usuario, ds_cpf, dt_nascimento, nr_telefone)
                                        values(?, ?, ?, ?, ?, ?)`


    const [resposta] = await con.query(comando, [user.email, user.senha, user.nome, user.cpf, user.nascimento, user.telefone]);
    user.id = resposta.insertId;

    return user;
}


export async function carregarUsuario(id) {
    
    const comando = `
    select  nm_usuario 	         nome,
            ds_email             email,
            nr_telefone          telefone,
            ds_cpf               cpf,
            dt_nascimento        DataDeNascimento
    from tb_usuario
    where id_usuario = ?`

    const [linhas] = await con.query(comando, id);
    console.log(linhas);

    return linhas[0]
}



