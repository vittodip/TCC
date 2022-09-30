import axios from 'axios'
import { API_URL } from './config.js';


const api = axios.create({
    baseURL: API_URL
})


export async function inserirSolicitacao(idUsuario, assunto) {
    const resp = await api.post(`/solicitacao`, {
        idUsuario: idUsuario,
        assunto: assunto
    })
    return resp.data;
}

export async function listarSolicitacao(id) {
    const resposta = await api.get(`/mostrar/solicitacao/${id}`);
    
    return resposta.data;
}

export async function solicitacaoPsicologo() {
    const resposta = await api.get(`/solicitacao/psicologo`);

    return resposta.data;
}

export async function aceitarSolicitacao() {
    const resposta = await api.put(`/solicitacao`);
    
    return resposta.data;
}

export async function alterarSolicitacao(id, assunto) {
    const resposta = await api.put(`/solicitacao/${id}`, {
        assunto: assunto
    });

    return resposta.data;
}


export async function deletarSolicitacao(id) {
    const resposta = await api.delete(`/solicitacao/${id}`);

    return resposta.data;
}