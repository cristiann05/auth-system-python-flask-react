const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user: null,
            error: null,
        },
        actions: {
            login: async (email, password) => {
                try {
                    const response = await fetch('https://fantastic-fiesta-r4rgvr6xv9r7fxp6j-3001.app.github.dev/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json(); // Obtén detalles del error
                        throw new Error(errorData.error || 'Error en el inicio de sesión');
                    }

                    const data = await response.json();
                    console.log('Login data:', data);

                    setStore({
                        user: { token: data.access_token }, // Guardamos el token en el estado
                        error: null,
                    });

                    if (data.access_token) {
                        localStorage.setItem('token', data.access_token);
                    }

                } catch (error) {
                    console.error('Login error:', error);

                    let errorMessage = 'Error al iniciar sesión. Por favor, intenta de nuevo.';
                    if (error.message.includes('Missing email or password')) {
                        errorMessage = 'Missing email or password';
                    } else if (error.message.includes('Invalid email or password')) {
                        errorMessage = 'Invalid email or password';
                    } else if (error.message.includes('User not found')) {
                        errorMessage = 'Invalid email or password'; // Cambia según el mensaje real del backend
                    }
                    
                    setStore({
                        error: errorMessage,
                    });
                }
            },

            signup: async (email, password) => {
                try {
                    const response = await fetch('https://fantastic-fiesta-r4rgvr6xv9r7fxp6j-3001.app.github.dev/api/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });
            
                    if (!response.ok) {
                        const errorData = await response.json(); // Obtener detalles del error si ocurre
                        throw new Error(errorData.msg || 'Sign Up failed');
                    }
            
                    const data = await response.json(); // Obtener la respuesta del backend
                    console.log('Signup data:', data);
                    
                    if (data.msg === "User created") {
                        // Si el usuario se crea correctamente, limpiamos cualquier error
                        setStore({
                            error: null,
                        });
                    } else {
                        throw new Error('User creation failed');
                    }
                } catch (error) {
                    console.error('Signup error:', error);
                    setStore({
                        error: error.message || 'Sign Up failed. Please try again.',
                    });
                }
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
