import './index.scss'
import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { useState, useEffect } from 'react';
import { carregarAdmin } from "../../../api/adminApi.js";

export default function HeaderAdmin() {

    const [admin, setAdmin] = useState([])
    
    const navigate = useNavigate();

    async function carregarAdm() {
        const idAdm = Storage('admin-logado').id
        const resposta = await carregarAdmin(idAdm);
        setAdmin(resposta);
      }

      useEffect(() => {
        carregarAdm();
        if(!Storage('admin-logado')) {
          navigate('/login/adm')
        }
        
      }, []);

    return(
        <div className="Header-admin">
            <header className="section-header">
                <p>Bem vindo, {admin.nome}</p>
                <div className="header-circulo">
                    <h3>{String(admin.nome).substr(0,1)}</h3>
                </div>
            </header>
        </div>
        
    )
}