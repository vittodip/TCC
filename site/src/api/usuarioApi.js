import axios from 'axios'
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL

})


export async function cadastroUsuario(email, senha, nome, cpf, nascimento, telefone) {
    const resposta = await api.post('/cadastro/usuario', {
        email: email,
        senha: senha,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone
    })
    return resposta.data
}

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/login/usuario', {
        email: email,
        senha: senha
    })
    return resposta.data;
}


export async function carregarUsuario(id) {
    const resposta = await api.get(`/usuario/${id}`);
    return resposta.data;
}

export async function alterarUsuario(id, nome, email, telefone){
    const resposta = await api.put(`/alterar/usuario/${id}`, {
        nome: nome,
        email: email,
        telefone: telefone
    })

    return resposta.data;
}


export async function deletarUsuario(id) {
    const resposta = await api.delete(`/usuario/${id}`);

    return resposta.data;
}

export async function mostrarUsuarios(){
    const resposta = await api.get('/listar/usuario');
    return resposta.data
}

export async function mudarSenhaUser(email, id, senha){
    const resposta = await api.put(`/senha/usuario?email=${email}`, {
        id: id,
        senha:senha
    });
    return resposta.data
}

export async function enviarEmail(email){
    const resposta = await api.post('/enviar-email', {
        email: email
    });
    return resposta.data
}

export async function buscarNomeUser(nome){
    const resposta = await api.get(`/user/busca?nome=${nome}`);
    return resposta.data
}


