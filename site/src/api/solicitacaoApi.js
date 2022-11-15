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
    const resposta = await api.get(`/solicitacao/${id}`);
    
    return resposta.data;
}

export async function solicitacaoPsicologo(id) {
    const resposta = await api.get(`/solicitacao/psicologo/${id}`);

    return resposta.data;
}

export async function aceitarSolicitacao(idPsicologo, idSolicitacao) {
    const resposta = await api.put(`/solicitacao`, {
        idPsic: idPsicologo,
        idSoli: idSolicitacao
    });
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

    return resposta.status;
}

export async function mostrarTodasSolicitacoes(){
    const resposta = await api.get('/solicitacao');
    return resposta.data;

}


export async function deletarSolicitacaoPsic(id){
    const resposta = await api.put(`/solicitacao/psic/${id}`)
    return resposta.data;
}

export async function carregarSolicitacaoUsuario(usuario, solicitacao) {
    const resposta = await api.get(`/usuario/solicitacao/busca/?usuario=${usuario}&solicitacao=${solicitacao}`)
    console.log(resposta)
    return resposta.data;
}

export async function inserirCategoriaSol(solicitacao, categoria){
    const resp = await api.post(`/usuario/sol/cat/?solicitacao=${solicitacao}&categoria=${categoria}`)
    return resp.data;
}

export async function mostrarCategoriaSol(id){
    const resposta = await api.get(`/usuario/solcad/cat/?solicitacao=${id}`)
    return resposta;
}
