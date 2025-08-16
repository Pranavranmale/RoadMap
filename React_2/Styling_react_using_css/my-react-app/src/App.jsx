import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [cardStyle, setCardStyle] = useState({
    border: 'solid 2px',
    margin: "10px",
    padding: "20px"
  })

  const [gride, setgrid] = useState(true)


  const Setcolor = (bgcolor, textcolor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgcolor,
      color: textcolor
    })
  }

  return (
    <>
      <h1 style={{ color: 'pink', backgroundColor: "green" }}>This is Inline style</h1>
      <button
        style={{ backgroundColor: "lightgreen", padding: '10px', margin: '20px' }}
        onClick={() => Setcolor('black', 'green')}
      >
        Gray theme
      </button>
      <button
        style={{ backgroundColor: "pink", padding: "10px", margin: '20px' }}
        onClick={() => Setcolor('pink', 'green')}
      >
        Default theme
      </button>

      <button
        style={{ backgroundColor: "", padding: "10px", margin: '20px' }}
        onClick={() => setgrid(!gride)}
      >
        ToggleGrid
      </button>

      <div style={{ display: gride ? 'flex' : 'block' }}>
        <div style={cardStyle} >
          <img style={{ width: '600px' }} src="https://imgs.search.brave.com/7Jvmc6r5uW5Fq6KEBL-WmileViM_QcURzHsckiTFtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDYy/NDg3NDQyL3ZpZGVv/L3Nsb3ctbW90aW9u/LWJpcmRzLWJlZS1l/YXRlcnMtbGFuZGlu/Zy1vbi1hLWJyYW5j/aC1hbmQtcGVyY2hp/bmcuanBnP3M9NjQw/eDY0MCZrPTIwJmM9/S0w4MEotcUw0VUFv/MVBvRmxQMnBVRzdL/cUw0bzJ0NW5WRHFM/Q3NkbldrRT0" alt="bird" />
          <h4>This is bird</h4>
          <h5>Bird is sitting on tree branch</h5>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '600px' }} src="https://imgs.search.brave.com/7Jvmc6r5uW5Fq6KEBL-WmileViM_QcURzHsckiTFtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDYy/NDg3NDQyL3ZpZGVv/L3Nsb3ctbW90aW9u/LWJpcmRzLWJlZS1l/YXRlcnMtbGFuZGlu/Zy1vbi1hLWJyYW5j/aC1hbmQtcGVyY2hp/bmcuanBnP3M9NjQw/eDY0MCZrPTIwJmM9/S0w4MEotcUw0VUFv/MVBvRmxQMnBVRzdL/cUw0bzJ0NW5WRHFM/Q3NkbldrRT0" alt="bird" />
          <h4>This is bird</h4>
          <h5>Bird is sitting on tree branch</h5>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '600px' }} src="https://imgs.search.brave.com/7Jvmc6r5uW5Fq6KEBL-WmileViM_QcURzHsckiTFtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDYy/NDg3NDQyL3ZpZGVv/L3Nsb3ctbW90aW9u/LWJpcmRzLWJlZS1l/YXRlcnMtbGFuZGlu/Zy1vbi1hLWJyYW5j/aC1hbmQtcGVyY2hp/bmcuanBnP3M9NjQw/eDY0MCZrPTIwJmM9/S0w4MEotcUw0VUFv/MVBvRmxQMnBVRzdL/cUw0bzJ0NW5WRHFM/Q3NkbldrRT0" alt="bird" />
          <h4>This is bird</h4>
          <h5>Bird is sitting on tree branch</h5>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '600px' }} src="https://imgs.search.brave.com/7Jvmc6r5uW5Fq6KEBL-WmileViM_QcURzHsckiTFtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDYy/NDg3NDQyL3ZpZGVv/L3Nsb3ctbW90aW9u/LWJpcmRzLWJlZS1l/YXRlcnMtbGFuZGlu/Zy1vbi1hLWJyYW5j/aC1hbmQtcGVyY2hp/bmcuanBnP3M9NjQw/eDY0MCZrPTIwJmM9/S0w4MEotcUw0VUFv/MVBvRmxQMnBVRzdL/cUw0bzJ0NW5WRHFM/Q3NkbldrRT0" alt="bird" />
          <h4>This is bird</h4>
          <h5>Bird is sitting on tree branch</h5>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '600px' }} src="https://imgs.search.brave.com/7Jvmc6r5uW5Fq6KEBL-WmileViM_QcURzHsckiTFtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDYy/NDg3NDQyL3ZpZGVv/L3Nsb3ctbW90aW9u/LWJpcmRzLWJlZS1l/YXRlcnMtbGFuZGlu/Zy1vbi1hLWJyYW5j/aC1hbmQtcGVyY2hp/bmcuanBnP3M9NjQw/eDY0MCZrPTIwJmM9/S0w4MEotcUw0VUFv/MVBvRmxQMnBVRzdL/cUw0bzJ0NW5WRHFM/Q3NkbldrRT0" alt="bird" />
          <h4>This is bird</h4>
          <h5>Bird is sitting on tree branch</h5>
        </div>
      </div>
    </>
  )
}

export default App
