import axios from 'axios'
import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL
})


export async function cadastroVoluntario(email, senha, nome, cpf, nascimento, telefone, vagas, crp) {
    console.log(email, senha, nome, cpf, nascimento, telefone, vagas, crp)
    const resposta = await api.post('/cadastro/voluntario', {
        email: email,
        senha: senha,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone,
        vagas: vagas,
        crp: crp 
    })

    return resposta.data;
}

export async function loginVoluntario(email, senha) {
    const resposta = await api.post('/login/voluntario', {
        email: email,
        senha: senha
    })

    return resposta.data;
}

export async function carregarVoluntario(id) {
    const resposta = await api.get(`/voluntario/${id}`);
    return resposta.data;
}