import React, { useEffect, useRef, useState } from 'react';




const CustomHook = () => {
    const [day, setDay] = useState('Monday');
    const prevDay = usePrevious(day);

    // if need to create another componet and use globaly then create a folder named 'hooks' and create a file named 'usePrevious.js' and move the below function to that file and export it and import it here and use it.
    function usePrevious(value) {
        const ref = useRef()
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }



    usePrevious(day);
    const getNextDay = () => {
        if (day === 'Monday') {
            setDay('Tuesday');
        } else if (day === 'Tuesday') {
            setDay('Wednesday');
        } else if (day === 'Wednesday') {
            setDay('Thursday');
        } else if (day === 'Thursday') {
            setDay('Friday');
        } else if (day === 'Friday') {
            setDay('Saturday');
        } else if (day === 'Saturday') {
            setDay('Sunday');
        } else {
            setDay('Monday');
        }
    }
    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h1>Custom Hook</h1>
            <p>Current Day: {day}</p>
            {
                prevDay && (
                    <span>Previous work day was: {prevDay}</span>
                )
            }
            <br />
            <button onClick={getNextDay}>Get next day</button>
        </div>
    );
};

export default CustomHook;


