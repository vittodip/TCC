import axios from 'axios'
import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL
})


export async function inserirSolicitacao(idUsuario, assunto, data) {
    const resposta = api.post('/solicitacao', {
        idUsuario: idUsuario,
        assunto: assunto,
        data: data
    })

    return resposta.data;
}

export async function carregarSolicitacao(id) {
    const resposta = api.get(`/mostrar/solicitacao/${id}`);
    return resposta.data;
}