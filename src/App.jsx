import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {

  const cards = data.map((x)=>
    <Card {...x} />
  )

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
