import React, { useState } from 'react'

const Counter = ({onAdd, onSub, first, setFirst}) => {
    // const [first, setFirst] = useState(0)
    return (
        <div>
            {/* <button onClick={() => setFirst(first + 1)}>+</button> */}
            <button style={{padding: "0 6px"}} onClick={onAdd}>+</button>
            <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
            {/* <button onClick={() => setFirst(first !== 0 ? first - 1 : 0)}>-</button> */}
            <button style={{padding: "0 6px"}} onClick={onSub}>-</button>
        </div>
    )
}

export default Counter