import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000',     
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar',   'Authorization' : false} 
})


export async function inserirSolicitacao(idUsuario, assunto) {
    const resposta = api.post('/solicitacao', {
        idUsuario: idUsuario,
        assunto: assunto
    })

    return resposta.data;
}

export async function carregarSolicitacao(id) {
    const resposta = api.get(`/mostrar/solicitacao/${id}`);
    return resposta.data;
}