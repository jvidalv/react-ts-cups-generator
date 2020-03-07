import React, {createContext, ReactElement, useContext, useReducer} from "react";

/**
 * @param state
 * @param action
 */
export const reducer = (state: object, action: any): object | undefined => {
    switch (action.type) {
        case "changeTheme":
            return {
                ...state,
                theme: action.changeTheme,
            };
        case "changeCCUPS":
            return {
                ...state,
                changeCCUPS: action.changeCCUPS
            };
        case "regenerate":
            return {
                ...state,
                updated: action.regenerate
            };
    }
};

/**
 * Initial app state, theme and cups generator properties
 */
export const initialState: any = {
    theme: 'dark',
    ccups: {
        tipo: ['Electricidad'],
        distribuidora: [
            'Naturgy'
        ],
        otros: ['Canario'],
    },
    updated: Date.now(),
};

/**
 * @type {React.Context<any>}
 */
export const StateContext = createContext(initialState);

interface StateProviderProps {
    reducer: any,
    initialState: object,
    children: ReactElement
}

/**
 * @param reducer
 * @param initialState
 * @param children
 * @constructor
 */
export const StateProvider: React.FC<StateProviderProps> = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useGlobals = () => useContext(StateContext);
