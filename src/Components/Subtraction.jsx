import React from 'react'

const Subtraction = ({ first }) => {
    let subtraction = 4
    return (
        <div className='main-container'>
            <p>
                {subtraction} - {first}
            </p>
            <div className='child-container'>
                <p id='pera'>
                    {subtraction - first}
                </p>
            </div>
        </div>
    )
}

export default Subtraction