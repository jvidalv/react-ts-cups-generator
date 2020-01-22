import React from 'react';
import {ThemeProvider} from "styled-components";
import {ContainerStyled, ContentStyled, RowInput} from "../styles/GenericsStyled";
import Navbar from "../layouts/Navbar";
import Button from "../components/Button";
import ButtonTitle from "../components/ButtonTitle";
import Tool from "../components/Tool";

/**
 * @constructor
 */
const Main: React.FC = () => {
    const [theme, useTheme] = React.useState<string>('dark');
    return (
        <ThemeProvider theme={{type : theme}}>
            <ContainerStyled>
                <Navbar theme={theme} useTheme={useTheme}/>
                <ContentStyled>
                    <h1>
                        Código Universal del Punto de Suministro
                    </h1>
                    <div className="input">
                        <div>
                            <div className="tools">
                                <Tool text="👥" background="orange" />
                                <Tool text="♻" background="yellowgreen" />
                            </div>
                            <input readOnly={true} value="ES0318363477145938GE"/>
                        </div>
                    </div>
                    <div className="options">
                        <div className="tipo-subministro">
                            <ButtonTitle text="Tipo" icon="⚡" />
                            <Button text="Electricidad" background="yellow" color="black" />
                            <Button text="Gas" background="purple" color="white" />
                        </div>
                        <div className="tipo-subministro">
                            <ButtonTitle text="Distribuïdora" icon="🏭" />
                            <Button text="Endesa" background="cadetblue" color="white" />
                            <Button text="Iberdrola" background="cornflowerblue" color="white" />
                            <Button text="Naturgy" background="darkslateblue" color="white" />
                            <Button text="E-Redes" background="mediumslateblue" color="white" />
                        </div>
                        <div className="tipo-subministro">
                            <ButtonTitle text="Otros" icon="🌴" />
                            <Button text="Canario" background="aqua" color="black" />
                        </div>
                    </div>
                    <div className="desc">
                        <p>
                            El número CUPS es el <strong>código alfanumérico que identifica cada casa o negocio</strong>, tanto para la red de electricidad como de la red de gas natural.
                        </p>
                    </div>
                </ContentStyled>
            </ContainerStyled>
        </ThemeProvider>
    );
};

export default Main;
