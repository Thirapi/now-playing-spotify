import { useState } from 'react'
import './App.css'
import { BsSpotify } from "react-icons/bs";
import { SpotifyProvider } from './components/SpotifyProvider'
import NowPlaying from './components/NowPlaying'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpotifyProvider>
        <NowPlaying icon={<BsSpotify />}/>
      </SpotifyProvider>
    </>
  )
}

export default App
