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

export async function carregarAdmin(id) {

    const comando = `select nm_adm 	      nome,
                            ds_email      email,
                            nr_telefone   telefone,
                            ds_cpf        cpf,
    date_format(dt_nascimento, '%d/%m/%Y') as DataDeNascimento
                       from tb_adm
                      where id_adm = ? `

    const [linhas] = await con.query(comando, id);
    return linhas[0]
}


export async function listarDenunciasUsuario() {
    const comando = `select id_denuncia     denuncia,
                            nm_usuario      nome,
                            ds_email        email,
                            ds_solicitacao  solicitação
                       from tb_denuncia_usuario
inner join tb_usuario on tb_usuario.id_usuario = tb_denuncia_usuario.id_usuario
inner join tb_solicitacao on tb_solicitacao.id_solicitacao = tb_denuncia_usuario.id_solicitacao`

    const [resposta] = await con.query(comando);
    return resposta;

}

export async function listarDenunciasPsicologo() {
    const comando = `select  id_denuncia               denuncia,
                             tb_psicologo.nm_psicologo nomepsi,
                             tb_psicologo.ds_email     emailpsicologo,
                             tb_usuario.nm_usuario     nome,
                             tb_usuario.ds_email       email,
                             ds_denuncia               depoimento
                      from   tb_denuncia_psicologo
inner join tb_psicologo on tb_psicologo.id_psicologo = tb_denuncia_psicologo.id_psicologo
inner join tb_usuario on tb_usuario.id_usuario = tb_denuncia_psicologo.id_usuario`

    const [resposta] = await con.query(comando);
    return resposta;

}

export async function PsicologosParaAprovar() {
    const comando = `select id_psicologo        psicologo,
                            nm_psicologo 	    nome,
                            ds_email 		    email,
                            nr_telefone 		telefone,
                            date_format(dt_nascimento, '%d/%m/%Y %H:%i') as data,
                            ds_cpf 			    cpf,
                            ds_crp			    crp
                       from tb_psicologo
                      where ds_situacao         is null
                      ORDER BY id_psicologo desc`
    const [resposta] = await con.query(comando);

    return resposta;
}

export async function aprovarPsicologo(id) {
    const comando = `update tb_psicologo
                        set ds_situacao  = true
                      where id_psicologo = ?`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function reprovarPsicologo(id) {
    const comando = `delete from tb_psicologo
                            where id_psicologo = ?
                        and ds_situacao is null`

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function carregarTodosVoluntarios () {
    const comando = `select nm_psicologo 	nome,
                            ds_email 		email,
                            date_format(dt_nascimento, '%d/%m/%Y %H:%i') as data,
                            nr_telefone		telefone,
                            ds_cpf			cpf,
                            ds_crp			crp
                            
                        from tb_psicologo`

    const [resposta] = await con.query(comando);
    return resposta;
}


