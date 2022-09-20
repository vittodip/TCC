import { con } from "./connection.js";


export async function adcCategoria() {
    const comando = `insert tb_categoria(nm_categoria)
    value('?')`

    const [resp] = await con.query(comando, [adcCategoria.nmCategoria ])
    adcCategoria.texto = resp.insertId
    return adcCategoria;
}