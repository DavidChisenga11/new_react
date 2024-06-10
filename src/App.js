import axios from "axios";
import { useEffect, useState } from "react";


function App(){
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get(`http://localhost:30011/data`)
      .then(response =>{
        setData(response.data)
      })
      .catch(error=>{
        console.error('There was an error fetching the data!', error)
      })
  }, [])
  return(
    <div className="App">
            <h1>Excel Data</h1>
            <table>
                <thead>
                    <tr>
                        {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, i) => (
                                <td key={i}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default App;