import React from "react";

const KeyWindow = ({ handleButton }) => {
    const sciKeys = ["sin", "cos", "tan", "cot", "sec", "csc", "ln", "log", "π", "e", "^", "!", "√", "%"];
    
    const basicKeys = [
        "7", "8", "9", "*", "/",
        "4", "5", "6", "-", "(",
        "1", "2", "3", "+", ")",
        ".", "0", "DEL", "AC", "=",
    ];
    
    return (
        <div className="KeyWindow">
            <div className="keyScientific">
                {sciKeys.map((item, index) => (
                    <button key={index} onClick={() => handleButton(item)}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="line"></div>
            <div className="keyBasic">
                {basicKeys.map((item, index) => (
                    <button
                        key={index}
                        className={`${item >= "0" && item <= "9" ? "number" : ""} 
                                   ${item === "=" ? "equal" : ""} 
                                   ${item === "." ? "dot" : ""} 
                                   ${item === "DEL" ? "del" : ""}`}
                        onClick={() => handleButton(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default KeyWindow;