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

export async function cadastroUsuario (usuario) {
    const comando = `insert into tb_usuario (ds_email, ds_senha, nm_usuario, ds_cpf, dt_nascimento, nr_telefone)
                                        values(?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [usuario.email, usuario.senha, usuario.nome, usuario.cpf, usuario.nascimento, usuario.telefone]);
    usuario.id = resposta.insertId;

    return usuario;
}


