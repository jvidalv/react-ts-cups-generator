import React from "react";
import {initialState, reducer, StateProvider} from "../contexts/global";
import Main from "./Main";

const App: React.FC = () => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Main/>
        </StateProvider>
    )
};

export default App;