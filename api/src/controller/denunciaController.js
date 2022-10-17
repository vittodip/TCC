import { denunciarUsuario } from "../repository/denunciaRepository.js";

server.post('/denunciar/usuario', async (req, resp) => {
    try {
        const { idUsuario, idPsicologo, idSolicitacao } = req.query;
        const denuncia = req.body;

        if (!denuncia) {
            throw new Error('Insira alguma denuncia!')
        }

        const resposta =  await denunciarUsuario(idUsuario, idPsicologo, idSolicitacao, denuncia);

        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})