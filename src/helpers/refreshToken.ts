export const refreshToken = {
    setToken: (token: string) => {
        localStorage.setItem('refreshToken', token);
    },
    getToken: () => {
        return localStorage.getItem('refreshToken');
    },
    removeToken: () => {
        localStorage.removeItem('refreshToken');
    }
}
