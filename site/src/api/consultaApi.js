import axios from "axios";
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL
})

export async function marcarConsulta(idUsuario, idPsicologo, consulta, link) {
    const resposta = await api.post(`/consulta?idUsuario=${idUsuario}&idPsicologo=${idPsicologo}`, {
        data: consulta,
        hora: consulta,
        link: link
    })
    return resposta.data;
}

export async function consultarConsulta() {
    const resposta = await api.get('/consulta');
    return resposta.data;
}

