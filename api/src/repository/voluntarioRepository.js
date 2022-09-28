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

    const [resposta] = await con.query(comando, [volunt.email, volunt.senha, volunt.nome, volunt.cpf, volunt.nascimento, volunt.telefone, volunt.vagas, volunt.crp]);
    volunt.id = resposta.insertId;

    return volunt;
}

export async function carregarVoluntario(id) {
    const comando = `
    select nm_psicologo 	nome,
	       ds_email 		email,
           nr_telefone 		telefone,
           ds_cpf 			cpf,
           ds_crp			crp,
           ds_vagas 		vagas,
           dt_nascimento	DataDeNascimento
      from tb_psicologo
    where id_psicologo = ?`

    const [linhas] = await con.query(comando, id);
    return linhas[0]

}