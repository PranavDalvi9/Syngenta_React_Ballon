import React, { useEffect, useState } from 'react';
import "./Home.css";

export default function Home() {
    const ballon11 = [
        {
            color: "blue",
            index: 1
        },
        {
            color: "brown",
            index: 2
        },
        {
            color: "green",
            index: 3
        },
        {
            color: "pink",
            index: 4
        },
        {
            color: "cyan",
            index: 5
        },
    ];

    const [ballonData, setBallonData] = useState([]);

    const [numberShoot, setNumberShoot] = useState("");

    const [emptyBag, setEmptyBag] = useState([]);
    
    useEffect(() => {
        setBallonData(ballon11);
    }, []);

    ballonData.sort((a, b) => a.index - b.index);


    const handleShoot = () => {
        // console.log("shoot id" , numberShoot)
        // console.log("shoot" ,ballonData[numberShoot-1] )

        if (ballonData[numberShoot - 1]) {
            setEmptyBag([...emptyBag, ballonData[numberShoot - 1]]);

            const afteradd = ballonData.filter((e) => ballonData[numberShoot - 1].index !== e.index);
            setBallonData(afteradd);
            setNumberShoot("");
        }
        else {
            alert("Enter Valid Number");
            setNumberShoot("");
        }

    }

    const handleCircleclicked = (e) => {
        setBallonData([...ballonData, e]);
        const fillll = emptyBag.filter((x) => e.index !== x.index);
        setEmptyBag(fillll);
    };


    return (
        <div className='HomeMain'>
            <div className='NavBar'>
                <h1>Syngenta : Ballon Shoot</h1>
            </div>

            <div className='ColorMainDiv'>
                <div className='EmptyCircleDiv'>
                    {
                        emptyBag.length > 0 ?
                            <>
                                {
                                    emptyBag.map((e) => (
                                        <div className='IndividualCircle' style={{ background: `${e.color}` }} key={e.index} onClick={() => handleCircleclicked(e)} ><p>{e.index}</p></div>
                                    ))
                                }
                            </> :
                            <>
                                <div> <p>No Data found</p></div>
                            </>
                    }
                </div>
                <div className='ColorCircleMain'>
                    {
                        ballonData.length > 0 ? <>
                            {
                                ballonData.map((e) => (
                                    <div className='IndividualCircle' style={{ background: `${e.color}` }} key={e.index}><p>{e.index}</p></div>
                                ))
                            }
                        </> : <>
                            <div> <p>No Data found</p></div>
                        </>
                    }




                </div>
            </div>

            <div className='InputMainDiv'>
                <input type="text" placeholder='Add Number to shoot' value={numberShoot} onChange={(e) => setNumberShoot(e.target.value)} />
                <button onClick={() => handleShoot()}>Shoot</button>
            </div>
        </div>
    )
}
