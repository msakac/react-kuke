import { useState, useEffect } from 'react';

function App() {
  //Zamjenjuje componentDidMount, componentDidUpdate i componentWillUnmount iz react klasa
  const [resourceType, setResourceType] = useState('posts')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [items, setItems] = useState([])
  //poziva se svaki put kad se aplikacija renderira
  //drugi argument je lista varijabli. Kad se neka od tih varijabli premeni
  //onda se poziva useEffect kuka
  //ako u useEffect posaljem prazno polje, onda se poziva samo onMount
  //return je tzv. cleanup
  useEffect(() => {
    console.log('Effect: Dohvacam podatke')
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      return () =>{
        console.log('Effect: UnMount')
      }
  }, [resourceType])

  useEffect(() =>{
    console.log('Effect On Mount: dodajem listener na prozor')
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleResize = () =>{
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
    <div>
      {windowWidth}
    </div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>

      </div>
      <h1>{resourceType}</h1>
      {items.map(item =>{
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App;
