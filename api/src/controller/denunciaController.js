import { denunciarUsuario } from "../repository/denunciaRepository.js";

server.post('/denuncia/usuario', async (req, resp) => {
    try {
        const denuncia = req.body;

        if (!denuncia) {
            throw new Error('Insira algum depoimento!')
        }

        const resposta =  await denunciarUsuario(denuncia);

        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})