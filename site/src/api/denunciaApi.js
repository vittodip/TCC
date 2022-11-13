import axios from "axios";
import { API_URL } from './config.js';

const api = axios.create({
    baseURL:API_URL
})


export async function denunciarUsuario(denunciarUser){
    const resposta = await api.post(`/denuncia/usuario`, {
       depoimento:denunciarUser
    }) 
    return resposta.data
}

export async function denunciarPsicologo(denunciarPsi){
    const resposta = await api.post(`/denuncia/psicologo`, {
        depoimento:denunciarPsi
    })
    return resposta.data
}

export async function denunciarUsuarioChat(denunciarUserChat){
    const resposta = await api.post(`/chatdenuncia/usuario`, {
       depoimento:denunciarUserChat
    }) 
    return resposta.data
}