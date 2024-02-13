import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/yashchhatrala25')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    return (
        <div className='text-center p-4 bg-gray-600 text-white text-3xl'>
            Githib Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

