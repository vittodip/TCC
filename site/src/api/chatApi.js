import axios from 'axios'
import { API_URL } from './config.js';


const api = axios.create({
    baseURL: API_URL
})



export async function enviarMensagem(tipo, id, mensagem){
    const resposta = await api.post('/chat/mensagem', {
        remetente: tipo,
        id: id,
        mensagem: mensagem
    })
    return resposta.data;
}

export async function mostrarMensagem(id){
    const resposta = await api.get(`/conversa/mensagem/${id}`)
    return resposta.data;
}

export async function criarChat(idUsuario, idPsic) {
    const resposta = await api.post(`/chat/?usuario=${idUsuario}&psicologo=${idPsic}`)
    return resposta.data
}

export async function checarChat(idUsuario, idPsic) {
    const resposta = await api.get(`/chat/disponivel/?usuario=${idUsuario}&psicologo=${idPsic}`)
    return resposta.data;
}

export async function carregarChatsPsicologo(id) {
    const resposta = await api.get(`/psicologo/mensagem/${id}`)
    return resposta.data;
}

export async function carregarNomeUsuario(idChat) {
    const resposta = await api.get(`/chat/nome/usuario/${idChat}`)
    return resposta.data;
}

export async function carregarNomePsic(idChat) {
    const resposta = await api.get(`/chat/nome/psicologo/${idChat}`)
    return resposta.data;
}

export async function mostrarUltimaMensagem(idChat) {
    const resposta = await api.get(`/conversa/mensagem/ultima/${idChat}`)
    return resposta.data;
}