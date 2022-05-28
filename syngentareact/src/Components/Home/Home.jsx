import React from 'react';
import "./Home.css";

export default function Home() {
    const ballon = [
        {
            color: "blue",
            index: 0
        },
        {
            color: "brown",
            index: 1
        },
        {
            color: "green",
            index: 2
        },
        {
            color: "pink",
            index: 3
        },
        {
            color: "voilet",
            index: 4
        },

    ]


    return (
        <div className='HomeMain'>
            <div className='ColorMainDiv'>
                <div>Empty</div>
                <div className='ColorCircleMain'>

                    {
                        ballon.map((e) => (
                            <div className='IndividualCircle' style={{ background: `${e.color}` }}>{e.index}</div>
                        ))
                    }


                </div>
            </div>

            <div className='InputMainDiv'>
                <input type="text" placeholder='Add Number to shoot' /> <br /><br />
                <button>Shoot</button>
            </div>
        </div>
    )
}
