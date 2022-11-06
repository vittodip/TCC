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
    return resposta;
}

export async function mostrarMensagem(id){
    const resposta = await api.get(`/conversa/mensagem/${id}`)
    return resposta;
}

export async function criarChat(idUsuario, idPsic) {
    const resposta = await api.post(`/chat/?usuario=${idUsuario}&psicologo=${idPsic}`)
    return resposta
}

export async function checarChat(idUsuario, idPsic) {
    const resposta = await api.get(`/chat/disponivel/?usuario=${idUsuario}&psicologo=${idPsic}`)
    return resposta;
}

export async function carregarChatsPsicologo(idPsic) {
    const resposta = await api.get(`/psicologo/mensagem/${idPsic}`)
    console.log(resposta) 
    return resposta;
}