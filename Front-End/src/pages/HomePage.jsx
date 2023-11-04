import React, { useEffect, useState } from 'react';
import { ReadRequest } from './../APIRequest/APIRequest';
const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        (async()=>{
            let res = await ReadRequest();
            setData(res);
        })()
    })

    return (
        <div>
            <h1>Home Page</h1>

            <ul>
              {
                data.map((item)=>{
                    return <li>Product Name: {item['ProductName']}
                    <br></br>
                    </li>
                })
              }
            </ul>

        </div>
    );
};

export default HomePage;