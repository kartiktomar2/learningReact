import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const GithubInfo = () => {
       
    //     const [followers, setFollowers]= useState(0)
    //     const [avatar, setAvatar]= useState(null)
        console.log("github rendered")
    //   useEffect(()=>{
    //      //load data 

    //      fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(res=>res.json())
    //      .then(data=>{
    //         setFollowers(data.followers)
    //         setAvatar(data.avatar_url)
    //     })
    //   },[])
     const {followers, avatar_url}= useLoaderData();
    //  console.log("loader data is: ", result)
  return (
    <div>
          <p>Github Followers:
             {followers}
             </p>
          <img  
          src={avatar_url}
           alt='github avatar'/>
    </div>
  )
}

export default GithubInfo


export const githubInfoRouteLoader=async()=>{
    console.log("started fetching data ")
    const respose= await fetch('https://api.github.com/users/hiteshchoudhary');
    return respose.json();
}
