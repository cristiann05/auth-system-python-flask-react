// src/context/appContext.js
import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: { ...state.store, ...updatedStore },
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            // Solo ejecutamos checkAuth si está disponible en actions
            if (state.actions && typeof state.actions.checkAuth === 'function') {
                state.actions.checkAuth();
            }
        }, []); // Dependencia vacía, se ejecuta solo una vez después del montaje

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
