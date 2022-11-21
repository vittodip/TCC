import axios from "axios";
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL
})

export async function marcarConsulta(consultaData, consultaHora, consultaLink, idPsic, idUsu) {
    const resposta = await api.post('/agendamento', {
        data: consultaData,
        hora: consultaHora,
        link: consultaLink,
        idPsicologo: idPsic,
        idUsuario: idUsu
    })
    return resposta.data
}

export async function consultarConsulta() {
    const resposta = await api.post('/agenda/consulta');
    return resposta.data;
}

export async function listarConsulta(id) {
    const resposta = await api.get(`/consulta/${id}`);
    return resposta.data;
} 

