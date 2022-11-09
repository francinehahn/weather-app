import React, { useEffect, useState } from "react"
import Head from "next/head"
import { states } from "../data/states"
import { useRequestData } from "../hooks/useRequestData"
import {cities} from "../data/cities"
import { Container } from "../styles/index-style"
import Image from "next/image"


export default function Home() {
  const [selectedState, setSelectedState] = useState<string>("São Paulo")
  const [selectedCity, setSelectedCity] = useState<string>("São Paulo")
  const [data, error, isLoading] = useRequestData(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.replaceAll(' ', '%20')},${'rs'},br&APPID=ce2f4caf0f55a737945e20f7404a89b4&units=metric`)
  
  useEffect(() => {
    const filterCity = cities.filter(item => item.state === selectedState.replaceAll(' ', '').replace('ã', 'a').replace('á', 'a').replace('í', 'i').replace('ô', 'o'))
    setSelectedCity(filterCity[0].cities[0])
  }, [selectedState])

  const renderStates = states.map((state, index) => {
    return <option key={index} value={state.estado}>{state.estado}</option>
  }) 

  const filterCities = cities.filter(item => item.state === selectedState.replaceAll(' ', '').replace('ã', 'a').replace('á', 'a').replace('í', 'i').replace('ô', 'o'))
  
  const renderCities = filterCities[0].cities.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <>
    <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap')
      </style>
    </Head>
    
    <Container>
      <form>
        <label htmlFor="state">Escolha o estado:</label>
        <select name="state" value={selectedState} onChange={e => setSelectedState(e.target.value)}>
          {renderStates}
        </select>

        <label htmlFor="city">Escolha a cidade:</label>
        <select name="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
          {renderCities}
        </select>
      </form>

      <h1>{`${selectedCity} - ${selectedState}`}</h1>

      {isLoading && <Image src={'/img/loading-sun.png'} alt="Sol girando" width="60" height="60"/>}
      {!isLoading && !data && error && <p>{error}</p>}

      {!isLoading && data && (
        <section>
          <div>
            <h4>Temperatura:</h4>
            <p>{data.main.temp}</p>
          </div>
    
          <div>
            <h4>Sensação térmica:</h4>
            <p>{data.main.feels_like}</p>
          </div>

          <div>
            <h4>Nascer do sol:</h4>
            <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br")}</p>
          </div>
    
          <div>
            <h4>Por do sol:</h4>
            <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br")}</p>
          </div>

          <div>
            <h4>Nuvens:</h4>
            <p>{data.clouds.all}%</p>
          </div>

          {data.clouds.all > 80 && <Image src="/img/cloudy.png" alt="Imagem de nuvens" width="100" height="100"/>}
          {new Date().getHours() > 19 && new Date().getHours() < 6 && data.clouds.all < 80 && data.clouds.all > 30 && 
            <Image src="/img/partially-cloudy-night.png" alt="Imagem de noite parcialmente nublada" width="100" height="100"/>}
          {new Date().getHours() >= 6 && new Date().getHours() <= 18 && data.clouds.all < 80 && data.clouds.all > 30 && 
            <Image src="/img/partially-cloudy-day.png" alt="Imagem de dia parcialmente nublado" width="100" height="100"/>}
          {new Date().getHours() > 19 && new Date().getHours() < 6 && data.clouds.all <= 30 && 
            <Image src="/img/moon.png" alt="Imagem de noite sem nuvens" width="100" height="100"/>}
          {new Date().getHours() >= 6 && new Date().getHours() <= 18 && data.clouds.all <= 30 && 
            <Image src="/img/sunny.png" alt="Imagem de dia sem nuvens" width="100" height="100"/>}
        </section>
      )}
    </Container>
    </>
  )
}
