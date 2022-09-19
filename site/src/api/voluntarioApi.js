import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastroVoluntario(email, senha, nome, cpf, nascimento, telefone, vagas, crp) {
    const resposta = await api.post('/cadastro/voluntario', {
        email: email,
        senha: senha,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone,
        vagas: vagas,
        crp: crp 
    })

    return resposta.data;
}

export async function loginVoluntario(email, senha) {
    const resposta = await api.post('/login/voluntario', {
        email: email,
        senha: senha
    })

    return resposta.data;
}