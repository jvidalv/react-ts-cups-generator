import React from 'react';
import {useGlobals} from "../contexts/global";
import {ThemeProvider} from "styled-components";
import {ContainerStyled, ContentStyled} from "../styles/GenericsStyled";
import Navbar from "../layouts/Navbar";
import Button from "../components/Button";
import ButtonTitle from "../components/ButtonTitle";
import Tool from "../components/Tool";
import Input from "../components/Input";

/**
 * @constructor
 */
const Main: React.FC = () => {
    const [{theme}] = useGlobals();
    return (
        <ThemeProvider theme={{type: theme}}>
            <ContainerStyled>
                <ContentStyled>
                    <Navbar/>
                    <h1>
                        Código Universal del Punto de Suministro
                    </h1>
                    <div className="input">
                        <div>
                            <div className="tools">
                            {/*    <Tool icon="👥" text="COPIAR" background="orange"/>*/}
                                <Tool icon="♻" text="REGENERAR" background="chocolate"/>
                            </div>
                            <Input/>
                        </div>
                    </div>
                    <div className="options">
                        <div className="tipo-subministro">
                            <ButtonTitle text="Tipo" icon="⚡"/>
                            <Button type="tipo" text="Electricidad" background="yellow" color="black"/>
                            <Button type="tipo" text="Gas" background="purple" color="white"/>
                        </div>
                        <div className="tipo-subministro">
                            <ButtonTitle text="Distribuidora" icon="🏭"/>
                            <Button type="distribuidora" text="Endesa" background="cadetblue" color="white"/>
                            <Button type="distribuidora" text="Iberdrola" background="cornflowerblue" color="white"/>
                            <Button type="distribuidora" text="Naturgy" background="darkslateblue" color="white"/>
                            <Button type="distribuidora" text="E-Redes" background="mediumslateblue" color="white"/>
                            <Button type="distribuidora" text="Redexis" background="dodgerblue" color="white"/>
                            <Button type="distribuidora" text="Nortegas" background="midnightblue" color="white"/>
                            <Button type="distribuidora" text="RDG" background="royalblue" color="white"/>
                        </div>
                        <div className="tipo-subministro">
                            <ButtonTitle text="Otros" icon="🌴"/>
                            <Button type="otros" text="Canario" background="aqua" color="black"/>
                        </div>
                    </div>
                    <div className="desc">
                        <p>
                            El número CUPS es el <strong>código alfanumérico que identifica cada casa o
                            negocio</strong>, tanto para la red de electricidad como de la red de gas natural.
                        </p>
                    </div>
                </ContentStyled>
            </ContainerStyled>
        </ThemeProvider>
    );
};

export default Main;
