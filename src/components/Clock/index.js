import './clock.css'
import { useState, useEffect } from 'react';

const Clock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className={`clock ${props.colorLetter}`}>
            <p>{`Agora são: ${time}`}</p>
        </main>
    )
}

export default Clock