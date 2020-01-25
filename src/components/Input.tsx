import React from "react";
import {useCups} from "../utils/useCups";
import {CupsDivStyled, InputHiddenStyled, PropertiesStyled} from "./InputStyled";


/**
 * @constructor
 */
const Input: React.FC = () => {
    const {cups, distribuidora, tipo} = useCups();
    const [afterText, setAfterText] = React.useState("Click para copiar");
    const inputRef = React.createRef();
    const hiddenInputRef = React.createRef();

    const copy = () => {
        const dom_hidden : any = hiddenInputRef.current;
        navigator.clipboard.writeText(dom_hidden.value);
        setAfterText("Copiado!")
    };

    // Separates the string with spans
    React.useEffect(() => {
        const dom_input : any = inputRef.current;
        let m_cups = cups;
        dom_input.innerHTML = cups.length > 5 ? [ `<span class="space">${m_cups.slice(0, 5)}</span>`, `<span class="space">${m_cups.slice(5, 18)}</span>`, `<span class="space">${m_cups.slice(18)}</span>`].join('') : cups;
        setAfterText("Click para copiar")
    }, [inputRef, cups]);

    return (
        <>
            <PropertiesStyled>
                <div>
                    {tipo} ─ {distribuidora}
                </div>
            </PropertiesStyled>
            <CupsDivStyled className="cups-div" ref={inputRef} onClick={() => copy()} afterText={afterText}>
                {cups}
            </CupsDivStyled>
            <InputHiddenStyled ref={hiddenInputRef} id="hidden-cups" value={cups}/>
        </>
    );
};

export default Input;