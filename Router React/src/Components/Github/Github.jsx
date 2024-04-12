import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const[data ,  SetData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/SnehasisGhara")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         SetData(data)

    //     })

    // },[])

  return (
    <div className='bg-gray-400 text-center  text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git Picture"width={300}/>
    </div>
  )
}

export default Github 

export  const  githubinfoLoader = async()=>{
   const response = await fetch("https://api.github.com/users/SnehasisGhara")
   return response.json();
}
