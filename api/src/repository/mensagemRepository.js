import { con } from './connection.js'


export async function enviarMensagem() {
    const comando = ``

    const [resposta] = await con.query(comando);
    return resposta;
}

export async function listarMengagens() {
    const comando = ``

    const [resposta] = await con.query(comando);
    return resposta;
}