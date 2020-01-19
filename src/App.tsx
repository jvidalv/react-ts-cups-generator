import React from 'react';
import {ThemeProvider} from "styled-components";
import {ContainerStyled, ContentStyled} from "./styles/GenericsStyled";
import Navbar from "./layouts/Navbar";

/**
 * @constructor
 */
const App: React.FC = () => {
    const [theme, useTheme] = React.useState<string>('dark');
    return (
        <ThemeProvider theme={{type : theme}}>
            <ContainerStyled>
                <Navbar theme={theme} useTheme={useTheme}/>
                <ContentStyled>
                    <label>
                        <span>Wrapper label tag</span>
                    </label>
                    <h1>
                        Código Universal del Punto de Suministro
                    </h1>
                    <h2>
                        Generador aleatorio
                    </h2>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </ContentStyled>
            </ContainerStyled>
        </ThemeProvider>
    );
};

export default App;
