import React from 'react';
import "./Home.css";

export default function Home() {
    return (
        <div className='HomeMain'>
            <div className='ColorMainDiv'>
                <div>Empty</div>
                <div>Color</div>
            </div>

            <div className='InputMainDiv'>
                <input type="text" placeholder='Add Number to shoot' /> <br /><br />
                <button>Shoot</button>
            </div>
        </div>
    )
}
