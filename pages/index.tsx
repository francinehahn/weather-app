import React from "react"
import { states } from "../data/states"

/*export async function getStaticProps() {
  
  const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Porto%20Alegre,br&APPID=ce2f4caf0f55a737945e20f7404a89b4')
  const weather = await data.json()
  console.log(weather)

  return {
    props: {weather}
  }
}*/

export default function Home() {
  
  //const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Água%20Branca,PB,br&APPID=ce2f4caf0f55a737945e20f7404a89b4')
  //const weather = await data.json()
  //console.log(weather)

  const renderStates = states.map((state, index) => {
    return <option key={index}>{state.estado}</option>
  }) 

  return (
    <form>
      <label>Escolha a cidade:</label>
      <select>
        {renderStates}
      </select>
    </form>
  )
}
