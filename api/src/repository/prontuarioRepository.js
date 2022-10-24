import { con } from "./connection.js";

export async function enviarProntuario() {
    const comando = ``

    const [resposta] = await con.query(comando)
    return resposta
}


export async function consultarProntuario() {
    const comando = ``

    const [resposta] = await con.query(comando)
    return resposta
}