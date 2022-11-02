import axios from 'axios'
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL
})


export async function enviarProntuario(idUsuario, idPsicologo) {
    const resposta = await api.post(`/prontuario/?idUsuario=${idUsuario}&idPsicologo=${idPsicologo}`);
    return resposta.data
}

export async function novoProntuario(idUsuario, idPsicologo, diagnostico, reacoes, estado, historia, exame, geral) {
    const resposta = await api.put(`/prontuario/?idUsuario=${idUsuario}&idPsicologo=${idPsicologo}`, {
        diagnostico: diagnostico,
        reacoes: reacoes,
        estado: estado,
        historia: historia,
        exame: exame,
        geral: geral
    });
    return resposta.data
}

export async function consultarProntuario(usuario) {
    const resposta = await api.get(`/prontuario`);
    return resposta.data
}


export async function consultarProntuarioUsuario(usuario) {
    const resposta = await api.get(`/prontuario/${usuario}`);
    return resposta.data
}