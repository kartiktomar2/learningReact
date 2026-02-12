import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
        const {id}= useParams()
       
  return (
    <>
          <p>Params are: {id}</p>
    </>
  )
}

export default Params
