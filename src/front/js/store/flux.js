const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            login: false,
            signup: false,
            error: null,
        },
        actions: {
            login: (email, password) => {
                const myHeaders = {
                    "Content-Type": "application/json"
                };

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify({ email, password })
                };

                return fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
                    .then((response) => {
                        if (response.status === 200) {
                            setStore({ login: true });
                            return response.json();
                        } else if (response.status === 401) {
                            throw new Error("Correo o contraseña incorrectos");
                        } else {
                            throw new Error("Error en el servidor");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({ auth: true });
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((error) => {
                        console.error("Error durante el login:", error.message);
                        setStore({ error: error.message });
                    });
            },

            signup: (email, password) => {
                const myHeaders = {
                    "Content-Type": "application/json"
                };

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify({ email, password })
                };

                return fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
                    .then((response) => {
                        if (response.status === 200) {
                            setStore({ signup: true });
                        } else {
                            return response.json().then((data) => {
                                throw new Error(data.msg || "Error en el registro");
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        if (data.access_token) {
                            localStorage.setItem("token", data.access_token);
                        }
                    })
                    .catch((error) => {
                        console.error("Error durante el signup:", error.message);
                        setStore({ error: error.message });
                    });
            },

            checkAuth: () => {
                const token = localStorage.getItem('token');

                if (token) {
                    setStore({
                        user: { token },
                    });
                }
            },

            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    user: null,
                    error: null,
                });
            }
        },
    };
};

export default getState;
