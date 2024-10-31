import React, { useEffect,useState } from 'react'

function App() {
  const[data, setData]=useState([])
  useEffect(()=>{
    fetch("https://localhost:8081/city")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err));

  },[])

  return (
    <div>
      <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>country</th>
            <th>district</th>
            <th>population</th>
            <tbody>

              {data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.CountryCode}</td>
                  <td>{d.District}</td>
                  <td>{d.Population}</td>
                </tr>


                )
              )}
            </tbody>

          </thead>
      </table>
    </div>
  )
}



export default App
