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
            color: "voilet",
            index: 5
        },
    ]

    const [ballonData, setBallonData] = useState([])


    const [numberShoot, setNumberShoot] = useState(0);

    const [emptyBag, setEmptyBag] = useState([])

    useEffect(() => {
        setBallonData(ballon11)
    }, [])

    const handleShoot = () => {
        console.log("shoot Number", numberShoot)
        // console.log("number choosen" ,ballonData[numberShoot] )
        const findIndiv = ballonData.find((e) => e.index === +numberShoot)
        // console.log("datat find after shoot" , findIndiv)
        setEmptyBag([...emptyBag, findIndiv])

        const afteradd = ballonData.filter((e) => findIndiv.index !== e.index)
        setBallonData(afteradd)
        // console.log("after filter" , afteradd)
    }
    // console.log("emptybaggg", emptyBag.length, emptyBag)

    const handleCircleclicked = (e) => {
        console.log("circle clicked",e.index)
        setBallonData([...ballonData,e])
        console.log("baggg" , emptyBag)
        const fillll =  emptyBag.filter((x) => e.index !== x.index)
        setEmptyBag(fillll)
        // console.log("filll" , fillll)
    }

    return (
        <div className='HomeMain'>
            <div className='ColorMainDiv'>
                <div>
                    {
                        emptyBag.length > 0 ?
                            <>
                                {
                                    emptyBag.map((e) => (
                                        <div className='IndividualCircle' style={{ background: `${e.color}` }} key={e.index} onClick={() =>handleCircleclicked(e)} >{e.index}</div>
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
                <input type="text" placeholder='Add Number to shoot' value={numberShoot} onChange={(e) => setNumberShoot(e.target.value)} /> <br /><br />
                <button onClick={() => handleShoot()}>Shoot</button>
            </div>
        </div>
    )
}
