import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData]= useState({})
  const [location, setLocation]= useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b3a917abdf1d7ba928681cf7adad100d`

  const searchLocation = (e)=>{
    if (e.key === 'Enter'){
      axios.get(url).then((res)=>{
        setData(res.data);
        console.log(res.data);

      })
      setLocation('')
    }
  }

  return (
    <div className='container'>
      <div className='main'>
      <div className='search-Container'>
        <input type='text' value={location} onChange={e => setLocation(e.target.value)} onKeyUp={searchLocation} placeholder='Search by City' />

      </div>
      <div className='description'>
        <div className='name'>
          <p>{data.name}</p>
          
        </div>
        <div className='temp'>
          {data.main ? <h1>{data.main.temp}°F</h1> : null}

        </div>
        <div className='lower-dsecription'>
          <div className='weather'>

          <p>Feeling</p>
          {data.main ? <p className='feel'>{data.main.feels_like}°F</p> : null}
          

          </div>
          <div className='humidity'>

          <p>Humidity</p>
          {data.main ? <p className='feel'>{data.main.humidity}%</p> : null}
          

          </div>
          <div className='wind'>

          <p>Wind</p>
          {data.main ? <p className='feel'>{data.wind.speed}MPH</p> : null}
          

          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default App
