import React from 'react';
import { useState } from 'react';

function ListOfGools({ gools }) {
    const lists = {...gools };
    lists.gools = gools.gools;
    lists.by = gools.by;
    return (
        <div>
            <p>{lists.gools} - by {lists.by}</p>
        </div>
    );
}

function SetGoolsForms({ onAdd }) {
    const [gools, setGools] = useState({gools:'', by:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const goolsValue = form.gools.value;
        const byValue = form.by.value;
        setGools({gools: goolsValue, by: byValue});
        console.log('Gools set to:', goolsValue, 'by', byValue);
        onAdd && onAdd({gools: goolsValue, by: byValue});
        //
        ListOfGools({ gools });
        
        form.reset();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGools(prevGools => ({...prevGools, [name]: value}));
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="gools">Set your gools:</label>
                <input type="text" id='gools' name='gools' onChange={handleChange}/>
                <label htmlFor="by">By</label>
                <input type="date" id='by' name='by' onChange={handleChange}/>
                <button type='submit'>Set Gools</button>
            </form>
        </div>
    )
}

const SetGols = () => {
    const [allgools, setAllgools] = useState([]);

    function handleAddGools(newGools) {
        setAllgools(prevGools => [...prevGools, newGools]);
    }

    return (
        <div>
            <h1>Set Your Gools Here</h1>
            {<SetGoolsForms onAdd={handleAddGools} />}
            <h1> Goals List</h1>
            {allgools.map((gools, index) => (
                <ListOfGools key={index} gools={gools} />
            ))}
        </div>
    );
};

export default SetGols;