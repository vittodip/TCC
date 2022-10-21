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



