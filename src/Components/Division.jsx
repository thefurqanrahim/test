import React from 'react'

const Division = ({ first }) => {
    let divison = 21
    return (
        <div className='main-container'>
            <p>
                {divison} / {first}
            </p>
            <div className='child-container'>
            <p id='pera'>{first ===  0 ? 0 : Math.round(divison / first) }</p>
            </div>
        </div>
    )
}

export default Division