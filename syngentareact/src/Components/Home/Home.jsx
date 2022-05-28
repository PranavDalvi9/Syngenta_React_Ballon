import React, { useState } from 'react';
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

    const [numberShoot , setNumberShoot] = useState(0);

    const[emptyBag , setEmptyBag] = useState([])

    const handleShoot = () => {
        console.log("shoot Number" , numberShoot)
        console.log("number choosen" ,ballon[numberShoot-1] )
        setEmptyBag([...emptyBag, ballon[numberShoot-1]])
    }
    console.log("emptybaggg" ,emptyBag.length, emptyBag)


    return (
        <div className='HomeMain'>
            <div className='ColorMainDiv'>
                <div>
                    {
                        emptyBag.length >0 ? 
                        <>
                        {
                        emptyBag.map((e) => (
                            <div className='IndividualCircle' style={{ background: `${e.color}` }}>{e.index}</div>
                        ))
                    }
                        </> : 
                        <>no</>
                    }
                </div>
                <div className='ColorCircleMain'>

                    {
                        ballon.map((e) => (
                            <div className='IndividualCircle' style={{ background: `${e.color}` }}>{e.index}</div>
                        ))
                    }


                </div>
            </div>

            <div className='InputMainDiv'>
                <input type="text" placeholder='Add Number to shoot' value={numberShoot} onChange={(e) => setNumberShoot(e.target.value)}/> <br /><br />
                <button onClick={() => handleShoot()}>Shoot</button>
            </div>
        </div>
    )
}
