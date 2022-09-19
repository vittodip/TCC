import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
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



export async function loginAdmin(email, senha) {
    const resposta = api.post('/login/adm', {
        email: email,
        senha: senha
    })

    return resposta.data;
}