import axios from 'axios'
import { API_URL } from './config.js'

const api = axios.create({
    baseURL: API_URL
})

export async function cadastroAdmin(email, senha, nome, cpf, nascimento, telefone) {
    const resposta = await api.post('/cadastro/admin', {
        email: email,
        senha: senha,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone
    })

    return resposta.data
}



export async function loginAdm(email, senha) {
    
    const r = await api.post('/login/adm', {
        email: email,
        senha: senha
    })
    return r.data;
    
}

export async function carregarAdmin(id) {
    const resposta = await api.get(`/admin/${id}`);
    return resposta.data;
}

export async function PsicologosParaAprovar(){
    const resposta = await api.get('/admin/voluntario/analise');
    return resposta.data;

}

export async function aprovarPsicologo(psicologo) {
    const resposta = await api.put(`/admin/aprovacao/${psicologo}`);
    return resposta.data;
}

export async function reprovarPsicologo(id) {
    const resposta = await api.delete(`/admin/reprovacao/${id}`, {
        idPsicologo: id
    });
    return resposta.data;
}

export async function denunciaPsico(){
    const resposta = await api.get('/denuncia/psicologo');
    return resposta.data;

}


export async function aceitarDenunciaUser(id) {
    const resposta = await api.delete(`/positivo/denuncia/usuario/${id}`);
    return resposta.data;
}

export async function recusarDenunciaUser(id) {
    const resposta = await api.delete(`/negativo/denuncia/usuario/${id}`);
    return resposta.data;
}

export async function aceitarDenunciaPsi(psicologoId) {
    const resposta = await api.delete(`/positivo/denuncia/psicologo/${psicologoId}`);
    return resposta.data;
}

export async function recusarDenunciaPsi(id) {
    const resposta = await api.delete(`/negativo/denuncia/psicologo/${id}`);
    return resposta.data;
}