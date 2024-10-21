
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Watch from './Components/Watch/Watch'

function App() {
  const [myData, setMyData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      console.log(data);
      
      setMyData(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='watch-container'>
         {myData.map(data => <Watch key={data.id} data={data}></Watch>)}
      </div>
    </>
  )
}

export default App
