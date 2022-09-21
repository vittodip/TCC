import axios from 'axios'
import { API_URL } from './config';

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

    return resposta.data;
}

export async function loginUsuario(email, senha) {
    const resposta = api.post('/login/usuario', {
        email: email,
        senha: senha
    })

    return resposta.data;
}


export async function carregarUsuario(id) {
    const resposta = await api.get(`/usuario/${id}`);
    return resposta.data;
}




