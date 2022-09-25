import axios from 'axios'
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL

})


export async function cadastroUsuario(email, senha, nome, cpf, nascimento, telefone) {
    const resposta = api.post('/cadastro/usuario', {
        email,
        senha,
        nome,
        cpf,
        nascimento,
        telefone
    })
    console.log(resposta)
    return resposta.data
}

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/login/usuario', {
        email: email,
        senha: senha
    })
    console.log(resposta.data);
    return resposta.data;
}


export async function carregarUsuario(id) {
    const resposta = await api.get(`/usuario/${id}`);
    return resposta.data;
}




