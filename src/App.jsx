import './App.css'
import Navbar from './components/Navbar'
//import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cardElements = data.map( el => {
    return <Card 
      key = {el.id}
      img = {el.coverImg}
      rating = {el.stats.rating}
      reviewCount = {el.stats.reviewCount}
      location = {el.location}
      title = {el.title}
      price = {el.price}
    />
  })

  return (
    <div>
        <Navbar />
        {/* <Hero /> */}
        {cardElements}
    </div>
  )
}

export default App
