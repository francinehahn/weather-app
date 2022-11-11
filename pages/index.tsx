import React, { useEffect, useState } from "react"
import Head from "next/head"
import { states } from "../data/states"
import { useRequestData } from "../hooks/useRequestData"
import {cities} from "../data/cities"
import { Container } from "../styles/index-style"
import Image from "next/image"
import { Loading } from "../components/Loading"


export default function Home() {
  const [selectedState, setSelectedState] = useState<string>("São Paulo")
  const [selectedCity, setSelectedCity] = useState<string>("São Paulo")
  const [data, error, isLoading] = useRequestData(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.replaceAll(' ', '%20')},${selectedState},br&APPID=ce2f4caf0f55a737945e20f7404a89b4&units=metric`)
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`
  
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
      <title>Weather App</title>
      <meta name="keywords" content="clima, tempo, temperatura"></meta>
      <meta name="description" content="Saiba tudo sobre o clima em odo o território brasileiro"></meta>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap')
      </style>
    </Head>
    
    <Container>
      <form>
        <div>
          <label htmlFor="state">Estado:</label>
          <select name="state" value={selectedState} onChange={e => setSelectedState(e.target.value)}>
            {renderStates}
          </select>
        </div>

        <div>
          <label htmlFor="city">Cidade:</label>
          <select name="city" value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
            {renderCities}
          </select>
        </div>
      </form>

      <h2>{`${selectedCity} - ${selectedState}`}</h2>

      {isLoading && <Loading/>}
      {!isLoading && !data && error && <p>{error}</p>}

      {!isLoading && data && (
        <>
          <h3>{data.main.temp}ºC</h3>
          
          <section>
            <div>
              <h4>Sensação:</h4>
              <p>{data.main.feels_like}ºC</p>
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
              <h4>Humidade:</h4>
              <p>{data.main.humidity}%</p>
            </div>

            <div>
              <h4>Vento:</h4>
              <p>{(data.wind.speed * 3.6).toFixed(0)} km/h</p>
            </div>

            <div>
              <h4>Nuvens:</h4>
              <p>{data.clouds.all}%</p>
            </div>
          </section>

          {/* Quando está chovendo independente do horário */}
          {(data.weather[0].description === "light rain" || data.weather[0].description === "moderate rain") && 
            <Image src="/img/rainning.png" alt="Imagem de chuva" width="130" height="130"/>}


          {/* Quando está nublado mas não chovendo (independente do horário) */}
          {data.clouds.all >= 70 && data.weather[0].description !== "light rain" && data.weather[0].description !== "moderate rain" &&
          <Image src="/img/cloudy.png" alt="Imagem de nuvens" width="130" height="130"/>}


          {/* Quando o horário atual é noite (após por-do-sol e antes do amanhecer), com nuvens e sem chuva */}
          {((now > new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br") &&
            now > new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br")) ||
            (now < new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br") &&
            now < new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br"))) &&
            data.clouds.all < 70 && data.clouds.all > 10 && 
            data.weather[0].description !== "light rain" && data.weather[0].description !== "moderate rain" &&
            <Image src="/img/partially-cloudy-night.png" alt="Imagem de noite parcialmente nublada" width="130" height="130"/>}
          

          {/* Quando o horário atual é de dia (após amanhecer e antes do por-do-sol), com nuvens e sem chuva */}
          {(now >= new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br") &&
            now <= new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br")) &&
            data.clouds.all < 70 && data.clouds.all > 10 && 
            data.weather[0].description !== "light rain" && data.weather[0].description !== "moderate rain" &&
            <Image src="/img/partially-cloudy-day.png" alt="Imagem de dia parcialmente nublado" width="130" height="130"/>}
          

          {/* Quando o horário atual é noite (após por-do-sol e antes do amanhecer) e sem nuvens */}
          {((now > new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br") &&
            now > new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br")) ||
            (now < new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br") &&
            now < new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br"))) &&
            data.clouds.all <= 10 && 
            <Image src="/img/moon.png" alt="Imagem de noite sem nuvens" width="130" height="130"/>}
          

          {/* Quando o horário atual é de dia (após amanhecer e antes do por-do-sol) e sem nuvens */}
          {(now >= new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-br") &&
            now <= new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-br")) &&
            data.clouds.all <= 10 && 
            <Image src="/img/sunny.png" alt="Imagem de dia sem nuvens" width="130" height="130"/>}
        

          {data.weather[0].description === "broken clouds" && <h5>Predominantemente nublado</h5>}
          {data.weather[0].description === "clear sky" && <h5>Céu limpo</h5>}
          {data.weather[0].description === "scattered clouds" && <h5>Nuvens dispersas</h5>}
          {data.weather[0].description === "few clouds" && <h5>Poucas nuvens</h5>}
          {data.weather[0].description === "overcast clouds" && <h5>Nublado</h5>}
          {data.weather[0].description === "light rain" && <h5>Chuva fraca</h5>}
          {data.weather[0].description === "moderate rain" && <h5>Chuva moderada</h5>}
        </>
      )}
    </Container>
    </>
  )
}
