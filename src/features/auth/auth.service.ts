import { toast } from 'sonner'
import { api } from '@/shared/api'
import { LoginPayload } from './auth.type'
import { showApiError } from './auth.utils'

export async function login(payload: LoginPayload) {
    toast.loading("Validando credenciales...", { id: "login" })

    try {
        const response = await api.post('/auth/login', payload)
        toast.success("Bienvenido", { id: "login" });
        return response
    } catch (error) {
        showApiError(error, 'login')
    }
}

export async function logout() {
    toast.loading("Cerrando Sesion...", { id: "logout" })

    try {
        const response = await api.post('/auth/logout')
        toast.success("Sesión cerrada correctamente", { id: "logout", })
        return response
    } catch (error) {
        showApiError(error, 'logout')
    }

}

export async function me() {
    try {
        const response = await api.get('/auth/me')
        return response
    } catch (error) {
        showApiError(error, 'me')
    }
}