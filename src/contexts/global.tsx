import React, {createContext, ReactElement, useContext, useReducer} from "react";

export const reducer = (state : object, action : any)  : object|undefined => {
    switch (action.type) {
        case "changeTheme":
            return {
                ...state,
                theme: action.changeTheme,
            };
        case "changeCCUPS":
            return {
                ...state,
                changeCCUPS: action.changeTipo
            };
    }
};

/**
 * Initial app context, theme and cups generator properties
 */
export const initialState : any = {
    theme: 'dark',
    ccups: {
        tipo: 'any',
        distribuidoras: [
            'endesa', 'iberdrola', 'naturgy', 'e-redes'
        ],
        otros: {
            canario: 1
        }
    }
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

export const StateProvider: React.FC<StateProviderProps> = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useGlobals = () => useContext(StateContext);
