import React from 'react'

const Window = ({expression,result}) => {
    return (
        <div className='Window'>
            <p className="expression">{expression}</p>
            <p className="result">{result}</p>
        </div>
    )
}

export default Window
