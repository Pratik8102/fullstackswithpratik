import { useState, useEffect } from 'react'
import axios from 'axios'
import viteLogo from '/vite.svg'
import './App.css'


// App.use(cors);


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Fullstack with Pratik</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h3>{joke.title || `Joke ${index + 1}`}</h3>
            <p>{joke.content || joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
