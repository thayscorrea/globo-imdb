export const routePrivate = () => {
    if (typeof window !== "undefined") {
        if (sessionStorage.getItem('isAdmin') == 0) {
            return window.location.href = '/'
        }
    }
}