use NEEDATALK_DB;

insert into tb_adm (ds_email, ds_senha, nm_adm, ds_cpf, dt_nascimento, nr_telefone)
	   values('email.adm1234@gmail.com', '1234', 'Eduzada','123.456.789-01', '2004-09-23', '(11)912345678');
       
select * 
  from tb_adm
where ds_email = 'email.adm1234@gmail.com'
  AND ds_senha = '1234';
  
insert into tb_psicologo (ds_email, ds_senha, nm_psicologo, ds_cpf, dt_nascimento, nr_telefone, ds_vagas, ds_vagas_disponivel, ds_crp)
	   values('email.psi1234@gmail.com', '1234', 'Amanda Fitas','123.456.789-02', '1996-07-19', '(11)912345678', null, 5, 'xx/321/123');
       
select * 
  from tb_psicologo
where ds_email = 'email.psi1234@gmail.com'
  AND ds_senha = '1234';
  
insert into tb_usuario (ds_email, ds_senha, nm_usuario, ds_cpf, dt_nascimento, nr_telefone)
	   values('email.user1234@gmail.com', '1234', 'JujuPistori','123.456.789-01', '2004-09-23', '(11)912345678');

select * 
  from tb_usuario
where ds_email = 'email.user1234@gmail.com'
  AND ds_senha = '1234';