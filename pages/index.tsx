import React, { useState } from "react"
import { states } from "../data/states"
import { useRequestData } from "../hooks/useRequestData"
import {cities} from "../data/cities"
import { Container } from "../styles/index-style"

/*export async function getStaticProps() {
  
  const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Porto%20Alegre,br&APPID=ce2f4caf0f55a737945e20f7404a89b4')
  const weather = await data.json()
  console.log(weather)

  return {
    props: {weather}
  }
}*/

export default function Home() {
  const [selectedState, setSelectedState] = useState("DistritoFederal")
  const [selectedCity, setSelectedCity] = useState("Brasilia")
  const [data, error, isLoading] = useRequestData(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.replaceAll(' ', '%20')},${'rs'},br&APPID=ce2f4caf0f55a737945e20f7404a89b4&units=metric`)

  const renderStates = states.map((state, index) => {
    return <option key={index} value={state.estado}>{state.estado}</option>
  }) 

  const filterCities = cities.filter(item => item.state === selectedState.replaceAll(' ', '').replace('ã', 'a').replace('á', 'a').replace('í', 'i').replace('ô', 'o'))
  
  const renderCities = filterCities[0].cities.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })
  

  return (
    <Container>
      <form>
        <label>Escolha o estado:</label>
        <select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
          {renderStates}
        </select>

        <label>Escolha a cidade:</label>
        <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
          {renderCities}
        </select>

        <button>Enviar</button>
      </form>
    </Container>
  )
}
