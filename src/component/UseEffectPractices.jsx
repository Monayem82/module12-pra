import React from 'react';

const UseEffectPractices = () => {

    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        console.log('Toggle state changed:', toggle);
    }, );

    return (
        <div>
            <h1>Use Effect Practices Component</h1>
            <button onClick={() => setToggle(!toggle)}>
                Toggle
            </button>
            {toggle ? <p>The toggle is ON</p> : <p>The toggle is OFF</p>}
        </div>
    );
};

export default UseEffectPractices;