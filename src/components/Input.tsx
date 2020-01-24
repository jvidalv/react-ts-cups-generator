import React from "react";
import {useCups} from "../utils/useCups";

/**
 * @constructor
 */
const Input: React.FC = () => {
    const cups = useCups();

    return (
        <input readOnly={true} value={cups}/>
    );
};

export default Input;