export const isAuthenticated = () => {
    if (typeof window !== "undefined") {
        return sessionStorage.getItem('token') !== null ? true : false;
    }
}

export const isAdmin = () => { 
    if (typeof window !== "undefined") { 
        return sessionStorage.getItem('isAdmin'); 
    }
}

export const getUser = () => {
    if (typeof window !== "undefined") {
        return sessionStorage.getItem('userID');
    }
}

export const login = (token, userID, isAdmin) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('userID', userID)
        sessionStorage.setItem('isAdmin', isAdmin)
    }
};

export const logout = () => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userID');
        sessionStorage.removeItem('isAdmin');
    }
};