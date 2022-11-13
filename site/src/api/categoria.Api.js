import axios from 'axios'
import { API_URL } from './config.js';

const api = axios.create({
    baseURL: API_URL
})


export default async function consultarCategorias() {
    const resposta = await api.get('/categoria');
    return resposta.data
}

export default async function inserirCategoriaSolicitacao(solicitacao, categoria){
    const resposta = await api.post(`/categoria/solicitacao?solicitacao=${solicitacao}}&categoria=${categoria}`);
    return resposta.data;
}

export default async function mostrarCategoriaSol(id) {
    const resposta = await api.get(`/categoria/sol/${id}`);
    return resposta.data
}
