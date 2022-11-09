import React from 'react'

const Multiplyer = ({ first }) => {
    let multiply = -5
    return (
        <div className='main-container'>
            <p>
                {multiply} * {first}
            </p>
            <div className='child-container'>
                <p id='pera'>{multiply * first}</p>
            </div>
        </div>
    )
}

export default Multiplyer