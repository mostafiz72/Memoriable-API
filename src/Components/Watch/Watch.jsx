import React from 'react'
import './Watch.css'
export default function Watch({data}) {
  return (
    <>
        <div className=' btn-container'>
          <div className=' watch'>
            <h1>Current Time: {data.title}</h1>
            <h2>Date: {data.body}</h2>
            <button className='btn'>Details</button>
          </div>
        </div> 
    </>
  )
}
