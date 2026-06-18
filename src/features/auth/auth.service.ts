import { api } from '@/shared/api'
import { LoginInterface } from './auth.type'

export const authService = {
    login: (data: LoginInterface) => api.post('/auth/login', data),
    logouth: () => api.post('/auth/logout'),
    me: () => api.get('/auth/me')
}