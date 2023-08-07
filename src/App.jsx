import { useState } from 'react'

import RealTimeChart from './components/RealTimeChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>
      <RealTimeChart />
   
    </>
  )
}

export default App
