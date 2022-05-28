import React, { useEffect, useState } from 'react';
import "./Home.css";

export default function Home() {
    const ballon11 = [
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

    const [ballonData , setBallonData] = useState([])


    const [numberShoot , setNumberShoot] = useState(0);

    const[emptyBag , setEmptyBag] = useState([])

    useEffect(() => {
        setBallonData(ballon11)
    },[])

    const handleShoot = () => {
        console.log("shoot Number" , numberShoot)
        console.log("number choosen" ,ballonData[numberShoot-1] )
        setEmptyBag([...emptyBag, ballonData[numberShoot-1]])

        const afteradd = ballonData.filter((e) => ballonData[numberShoot-1].index !== e.index )
        setBallonData(afteradd)
        console.log("after filter" , afteradd)
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
                            <div className='IndividualCircle' style={{ background: `${e.color}` }} key={e.index}>{e.index}</div>
                        ))
                    }
                        </> : 
                        <>no</>
                    }
                </div>
                <div className='ColorCircleMain'>

                    {
                        ballonData.map((e) => (
                            <div className='IndividualCircle' style={{ background: `${e.color}` }} key={e.index}>{e.index}</div>
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
