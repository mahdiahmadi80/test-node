import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/city") // اطمینان از استفاده از http
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); // بررسی وضعیت پاسخ
        }
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>country</th>
            <th>district</th>
            <th>population</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.CountryCode}</td>
              <td>{d.District}</td>
              <td>{d.Population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;