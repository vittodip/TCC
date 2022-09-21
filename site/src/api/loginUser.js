import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
    baseURL: API_URL
})

export async function login(email, senha){
    const r = await api.get('/login/usuario', {
                email:email,
                senha:senha
        });
        return r.data;
}