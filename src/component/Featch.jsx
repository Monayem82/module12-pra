import React, { useEffect } from 'react';

const Featch = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => { 
        fetch('../../public/json_data.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    console.log(data);

    return (
        <div>
            <h2>Fetch Data card {data.length}</h2>
            {
                data.map(item => (
                    <div key={item.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
                        <h3>{item.title}</h3>
                        <p>{item.image}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                        <p>{item.rating}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default Featch;
