use NEEDATALK_DB;


-- CADASTRO ADM
insert into tb_adm (ds_email, ds_senha, nm_adm, ds_cpf, dt_nascimento, nr_telefone)
	   values('email.adm123@gmail.com', '1234', 'Eduzada','123.456.789-01', '2004-09-23', '(11)912345678');
       
-- LOGIN ADM
select * 
  from tb_adm
where ds_email = 'email.adm123@gmail.com'
  AND ds_senha = '1234';


-- CADASTRO PSICOLOGO
insert into tb_psicologo (ds_email, ds_senha, nm_psicologo, ds_cpf, dt_nascimento, nr_telefone, ds_vagas, ds_situacao, ds_crp)
	   values('email.psi1234@gmail.com', '1234', 'Amanda Fitas','123.456.789-02', '1996-07-19', '(11)912345678', null, null, 'xx/321/123');

-- COLOCAR IMAGEM PSICOLOGO
update tb_psicologo
   set img_psicologo = 'imagem'
 where id_psicologo = 1;

-- LOGIN PSICOLOGO
select * 
  from tb_psicologo
where ds_email = 'email.psi1234@gmail.com'
  AND ds_senha = '1234';
  
-- CADASTRO USUARIO  
insert into tb_usuario (ds_email, ds_senha, nm_usuario, ds_cpf, dt_nascimento, nr_telefone)
	   values('email.user1234@gmail.com', '1234', 'JujuPistori','123.456.789-01', '2004-09-23', '(11)912345678');

-- LOGIN USUARIO
select * 
  from tb_usuario
where ds_email = 'email.user1234@gmail.com'
  AND ds_senha = '1234';
  
-- INFO PERFIL ADM

select nm_adm 	 nome,
	   ds_email      email,
       nr_telefone   telefone,
       ds_cpf        cpf,
       date_format(dt_nascimento, '%d/%m/%Y') as DataDeNascimento
  from tb_adm
where id_adm = 1;


-- INFO PERFIL USUARIO
select nm_usuario 	 nome,
	   ds_email      email,
       nr_telefone   telefone,
       ds_cpf        cpf,
       date_format(dt_nascimento, '%d/%m/%Y') as DataDeNascimento
  from tb_usuario
where id_usuario = 1;

-- INFO PERFIL PSICOLOGO
select nm_psicologo 	nome,
	   ds_email 		email,
       nr_telefone 		telefone,
       ds_cpf 			cpf,
       ds_crp			crp,
       ds_vagas 		vagas,
       dt_nascimento	DataDeNascimento
  from tb_psicologo
 where id_psicologo = 1;

-- EDITAR PERFIL USUARIO
update tb_usuario
   set nm_usuario  =  'Juliano Pistori',
	   ds_email    =  'email.user.juju@gmail.com',
       nr_telefone =  '(11)912332112'
 where id_usuario = 1;
 
  
-- ENVIAR SOLICITACAO  
insert into tb_solicitacao (id_usuario, id_psicologo, ds_solicitacao, ds_situacao, dt_situacao)
	 values (1, nullif( '1', ds_situacao = 1), 'Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.
			 ',false , sysdate());
             
-- MOSTRAR SOLICITACAO             
select id_solicitacao solicitacao,
	   id_usuario 	  usuario,
	   id_psicologo   psicologo,
       ds_solicitacao texto,
       DATE_FORMAT(dt_situacao, '%d/%m/%Y %H:%i') as horario
from tb_solicitacao
where id_solicitacao = 11;

select id_solicitacao 	solicitacao,
	   nm_usuario 	  	usuario,
       nr_telefone      telefone,
       date_format(dt_nascimento, '%d/%m/%Y') as DataDeNascimento,
       id_psicologo   	psicologo,
       ds_solicitacao 	texto,
       ds_situacao		situacao,	
       date_format(dt_situacao, '%d/%m/%Y %H:%i') as horario
  from tb_solicitacao 
 inner join tb_usuario on tb_usuario.id_usuario = tb_solicitacao.id_usuario
 where id_psicologo  = 1
   and ds_situacao     = true;

select * from tb_solicitacao;


-- aceitar solicitação
update tb_solicitacao
   set id_psicologo = 4,
	   ds_situacao = true
 where id_solicitacao = 1;

-- EDITAR SOLICITACAO
update tb_solicitacao 
   set ds_solicitacao = ' Sabe tudo começou a pipipi popopo Estudei, trabalhei, me sacrifiquei, mas acabei no fracasso. A vida de fato não tem a obrigação de ser justa e eu devo ser um azarado ou pode ser apenas o acaso. Nesse ponto da minha vida a unica certeza que tenho é que eu não sou minimamente feliz. Me sinto em uma prisão interna e externa da qual não consigo escapar. Tenho entrado em contato com coachs, todos dizem que eu devo seguir o caminho do qual eu me sinta feliz, e que por consequência, isso vai me trazer felicidade, entretanto, não consigo ver nenhum caminho que me faça feliz apesar de todo o esforço.',
	   ds_situacao = null, dt_situacao = now()
 where id_solicitacao = 1;
 
-- DELETAR SOLICITACAO
delete from tb_solicitacao
	  where id_solicitacao = 1;

-- ADICIONAR CATEGORIA
insert tb_categoria(nm_categoria)
 value('BurnOut');
 
select * from tb_categoria;
      
-- ADICIONAR CATEGORIA NA SOLICITAÇÃO
insert tb_solicitacao_categoria(ID_SOLICITACAO, ID_CATEGORIA)
 value(3, 3);
 
-- MOSTRAR CATEGORIA
select * 
  from tb_solicitacao_categoria
 where id_solicitacao_categoria = 5;


select * from tb_solicitacao_categoria;

-- ACEITAR PSICOLOGO
update tb_psicologo
   set ds_situacao = true
 where id_psicologo = 1;

-- DENUNCIAR USUÁRIO (SOLICITAÇÃO)
insert tb_denuncia_usuario(id_usuario, id_psicologo, ds_denuncia, id_solicitacao)
 value(1, 1, 'denuncia blabalbal', 3);


-- LISTAR DENUNCIA USUÁRIO - ADMINISTRADOR
select id_denuncia denuncia,
	   nm_usuario  nome,
	   ds_email    email,
       ds_denuncia depoimento
  from tb_denuncia_usuario
inner join tb_usuario on tb_usuario.id_usuario = tb_denuncia_usuario.id_usuario;


-- ACEITAR DENÚNCIA - DELETAR USUÁRIO

delete 
  from tb_usuario 
 where id_usuario = 1;

delete 
  from tb_denuncia_usuario
 where id_usuario = 1;

-- RECUSAR DENÚNCIA	  

delete 
  from tb_denuncia_usuario
 where id_denuncia = 1;
      
-- DENUNCIAR PSICÓLOGO 
insert tb_denuncia_psicologo(id_usuario, id_psicologo, ds_denuncia)
 value(1, 1, 'xingou minha família');

-- LISTAR DENUNCIA PSICÓLOGO - ADMINISTRADOR
select   id_denuncia               denuncia,
         tb_psicologo.nm_psicologo nomepsi,
		 tb_psicologo.ds_email     emailpsicologo,
		 tb_usuario.nm_usuario     nome,
	     tb_usuario.ds_email       email,
         ds_denuncia               depoimento
  from   tb_denuncia_psicologo
inner join tb_psicologo on tb_psicologo.id_psicologo = tb_denuncia_psicologo.id_psicologo
inner join tb_usuario on tb_usuario.id_usuario = tb_denuncia_psicologo.id_usuario;

select * from tb_denuncia_psicologo;

-- ACEITAR DENÚNCIA - DELETAR PSICÓLOGO

delete 
  from tb_psicologo 
 where id_psicologo = 1;

delete 
  from tb_denuncia_psicologo
 where id_psicologo = 1;

-- RECUSAR DENÚNCIA	- psicólogo  

delete 
  from tb_denuncia_psicologo
 where id_denuncia = 1;



