import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function carregarSolicitacao(id) {
    const resposta = api.get(`/mostrar/solicitacao/${id}`);
    return resposta.data;
}